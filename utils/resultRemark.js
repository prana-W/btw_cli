// Comments on your CGPA because why not?!
export default function restartSession(sgpa, cgpa, name) {
    let remark = null;
    if (cgpa >= 9.5) {
        remark = 'send me notes... Quick!';
    } else if (cgpa >= 8 && cgpa < 9.5) {
        remark = "Keep it up! You're doing great!";
    } else if (cgpa >= 7 && cgpa < 8) {
        remark = "Just a bit more efforts! You're almost there!";
    } else if (cgpa < 6) {
        remark = 'go study now!';
    } else {
        remark = 'Invalid CGPA value.';
    }

    console.log(
        `Hello, ${name}! Your SGPA: ${sgpa} and CGPA: ${cgpa}\n${remark}`,
    );
}
