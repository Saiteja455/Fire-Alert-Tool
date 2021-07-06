#!/usr/bin/env node

"use strict";
/*
  Import modules
*/
require('dotenv').config()
import program = require("commander");
import figlet = require("figlet");
import { prompt } from "inquirer";
import { output } from "./src/functions";
import { Answers } from "./src/interface";
import { questions } from "./src/questions";
import { syncFile } from "./src/sync";
const chalk = require("chalk");

// Clearing the terminal
output("\u001B[2J\u001B[0;0f");

output(
  chalk.yellow(
    figlet.textSync("Alert Fire Tool", { horizontalLayout: "full" }),
  ),
);

program
  .command("start")
  .alias("s")
  .description("Alerting for fire update")
  .option("-p, --path", "Start syncing to file specified")
  .action((options) => {
    if (options.path) {
      prompt(questions.questionsForPath).then((answers: Answers) => {
        output(`Listening to changes in ${answers.file}`);
        syncFile(answers);
      });
    }
  });

program.parse(process.argv);

if (program.args.length === 0) { program.help(); }
