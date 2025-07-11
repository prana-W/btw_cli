// Takes a time in milliseconds and converts it to the largest possible unit (seconds, minutes, or hours).
export default function convertTime(timeInMilliseconds) {
    let time = timeInMilliseconds;
    let unit = 'milliseconds';

    // Conversion to required units

    if (time >= 1000) {
        time /= 1000; // Convert milliseconds to seconds
        unit = 'seconds';
    }
    if (time >= 60) {
        time /= 60; // Convert seconds to minutes
        unit = 'minutes';
    }
    if (time >= 60) {
        time /= 60; // Convert minutes to hours
        unit = 'hours';
    }

    return {
        convertedTime: time.toFixed(2),
        unit: unit,
    };
}
