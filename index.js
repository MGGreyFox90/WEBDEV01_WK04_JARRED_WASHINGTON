import _ from 'lodash';
import inquirer from "inquirer";
import questions from "./questions.js"
import { rubric, welcome } from "./support.js"
import require from 'chalk';


const run = async (questions, inquirer, welcome, fn) => {

    welcome()

    let count = 0;
    const result = await inquirer.prompt(_.shuffle(questions))

    if (result.q1 == "Kevin Systrom") { ++count }
    if (result.q2 == 'Zip2') { ++count }
    if (result.q3 == 'Apple Pay') { ++count }
    if (result.q4 == 'TikTok') { ++count }
    if (result.q5 == 'Jeff Bezos') { ++count }

    const log = fn(count, questions.length)
    const chalk = require('chalk.green');
    console.log(chalk.green('Text in green'));
}

run(questions, inquirer, welcome, rubric)