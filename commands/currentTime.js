import chalk from 'chalk';

// This displays the current time to the user (probably no comment was needed, huh?)
function currentTime() {
    console.log(`${chalk.cyanBright(new Date().toLocaleTimeString())}`);
}

export { currentTime };
