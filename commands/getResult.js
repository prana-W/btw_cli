import resultRemark from '../utils/resultRemark.js';

async function getResult(roll) {
    if (!roll || roll.length < 10) {
        console.error('Kindly enter a valid roll number!');
        return;
    }

    roll = roll.toUpperCase();

    try {
        const allResult = await fetch(
            'https://cgpa-server.vercel.app/api/v1/getResults',
        );
        const allData = await allResult.json();
        const requiredResultData = allData.filter(
            (result) => result.Regn === roll,
        );

        if (!requiredResultData)
            throw new Error(
                'There seems to be an error, please try again later!',
            );

        resultRemark(
            requiredResultData[0].Sgpa,
            requiredResultData[0].Cgpa,
            requiredResultData[0].Name,
        );
    } catch (err) {
        console.error(err?.message);
    }
}

export default getResult;
