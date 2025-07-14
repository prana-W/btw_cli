import chalk from 'chalk';

// Displays the System time
function currentTime() {
    console.log(`${chalk.cyanBright(new Date().toLocaleTimeString())}`);
}

export { currentTime };
