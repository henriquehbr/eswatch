import inquirer from 'inquirer'

const main = async () => {
  const { message } = await import('./message')
  message()
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'username',
        default: 'World'
      }
    ])
    .then(async answers => {
      console.log(`Hello ${answers.username}!`)
    })
}

main()
