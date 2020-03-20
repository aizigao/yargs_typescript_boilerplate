#!/usr/bin/env node
import * as clear from 'clear'
import * as chalk from 'chalk'
import * as figlet from 'figlet'

clear()

console.log(
  chalk.red(figlet.textSync('aizigao-test', { horizontalLayout: 'full' })),
)
