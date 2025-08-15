async function getTodaysSolvedProblems(handle) {
    // Get today's start timestamp (00:00:00 UTC)
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    today.setDate(today.getDate() - 5); // move to previous day
    const todayTimestamp = Math.floor(today.getTime() / 1000);

    // Fetch submissions from Codeforces API
    const res = await fetch(`https://codeforces.com/api/user.status?handle=${handle}&from=1&count=1000`);
    const apiResponse = await res.json();

    if (apiResponse.status !== "OK") {
        throw new Error("Failed to fetch data from Codeforces API");
    }

    const submissions = apiResponse.result; // already newest → oldest from API
    const problemAttempts = {};
    const stats = [];

    for (let sub of submissions) {
        if (sub.creationTimeSeconds < todayTimestamp) {
            break; // stop once we hit yesterday or earlier
        }

        const key = `${sub.problem.contestId}-${sub.problem.index}`;

        if (!problemAttempts[key]) {
            problemAttempts[key] = { wrong: 0, correct: 0 };
        }

        if (sub.verdict === "OK") {

                problemAttempts[key].correct++;
                stats.push({
                    problem: sub.problem.name,
                    wrongSubmissions: problemAttempts[key].wrong,
                    correctSubmissions: 1
                });

        } else {
                problemAttempts[key].wrong++;
        }
    }

    return stats;
}

// Example usage
(async () => {
    const handle = "Pranaw_Kumar"; // your Codeforces handle
    const results = await getTodaysSolvedProblems(handle);
    console.log(results);
})();
