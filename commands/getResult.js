import resultRemark from '../utils/resultRemark.js';

async function getResult(roll) {
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
