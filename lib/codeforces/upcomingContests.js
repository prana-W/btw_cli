import { codeforcesApiUrl } from '../../constants/index.js';

class Contest {
    constructor(name, startTimeSeconds) {
        this.name = name;
        this.date = new Date(startTimeSeconds * 1000).toLocaleString('en-IN');
    }
}

export default async function upcomingContests() {
    try {
        const response = await fetch(`${codeforcesApiUrl}/contest.list`);
        if (!response.ok) {
            throw new Error(
                'Failed to fetch upcoming contests. Kindly check your network or try again later.',
            );
        }
        const allContests = (await response.json())?.result;
        // console.log(allContests);

        let upcomingContests = [];

        let index = 0;

        while (allContests[index]?.relativeTimeSeconds <= 0) {
            let contestObj = new Contest(
                allContests[index].name,
                allContests[index].startTimeSeconds,
            );

            upcomingContests.push({ ...contestObj });
            index++;
        }

        upcomingContests.reverse();

        return upcomingContests;
    } catch (err) {
        throw err;
    }
}
