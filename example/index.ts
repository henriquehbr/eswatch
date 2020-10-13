import inquirer from 'inquirer'

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
