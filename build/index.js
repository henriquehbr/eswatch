import inquirer2 from "inquirer";
console.log("Starting subprocess...");
inquirer2.prompt([
  {
    type: "input",
    name: "username",
    default: "World"
  }
]).then((answers) => {
  console.log(`Hello ${answers.username}!`);
});
