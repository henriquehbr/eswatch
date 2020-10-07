import inquirer from 'inquirer'

console.log('Starting subprocess...')

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
