#!/usr/bin/env node
import {program} from "commander";
import {currentTime} from "./commands/currentTime.js";

program.name('btw').description('btw - by the W, is a basic CLI Tool built by Pranaw Kumar for doing stuffs directly from the terminal!').version('1.0.0');

program
    .command('greet <name>')
    .description('Greet someone')
    .option('-u, --uppercase', 'Uppercase the name')
    .action((name, options) => {
        const message = options.uppercase ? name.toUpperCase() : name;
        console.log(`Hello, ${message}!`);
    });

program
    .command('time')
    .description('Display the current time')
    .action(currentTime);

program.parse();
