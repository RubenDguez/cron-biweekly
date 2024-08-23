import * as core from '@actions/core'

function calcBiweekly(referenceDate: string): boolean {
    const refDate = new Date(referenceDate);
    if (isNaN(refDate.getTime())) {
        throw new Error('Invalid start date format. Use YYYY-MM-DD.');
    }

    const currentDate = new Date();
    const timeDifference = Math.abs(currentDate.getTime() - refDate.getTime());
    const dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    const numOfWeeks = Math.floor(dayDifference / 7);

    return (numOfWeeks % 2) === 0;
}

async function run() {
    try {
        const referenceDate: string = core.getInput('reference-date');
        const isBiweekly = calcBiweekly(referenceDate);
        core.setOutput('is-biweekly', isBiweekly);
        console.log(`Is the current date on a week biweekly schedule from ${referenceDate}? ${isBiweekly}`);
    } catch (error) {
        const ERROR = <Error>error
        core.setFailed(`Action failed with error: ${ERROR.message}`);
    }
}

run();
