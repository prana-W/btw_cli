import { sapCredentialsPrompts } from '../lib/prompts.js';
import sapStore from '../config/sapStore.js';
import enquirer from 'enquirer';
import chalk from 'chalk';

const { prompt } = enquirer;

export default async function setSap() {
    try {
        const { username, password } = await prompt(sapCredentialsPrompts);
        sapStore.set('username', username);
        sapStore.set('password', password);

        console.log(
            chalk.green(
                'SAP credentials saved successfully! Run `btw attendance` to check your attendance!',
            ),
        );
    } catch (err) {
        console.error(chalk.red(err?.message || err));
    }
}
