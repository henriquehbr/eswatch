import inquirer from 'inquirer'
import { message } from './message'

message()

inquirer
  .prompt([
    {
      type: 'input',
      name: 'username',
      default: 'World'
    }
  ])
  .then(answers => {
    console.log(`Hello ${answers.username}!`)
  })
