import chalk from 'chalk';

// Displays the System time
function time() {
    console.log(`${chalk.cyanBright(new Date().toLocaleTimeString())}`);
}

export { time };
