const inquirer = require("inquirer");
const axios = require("axios");

const app = async () => {
  //define username question
  const usernameQuestion = {
    type: "input",
    name: "username",
    message: "Enter GitHub username:",
  };

  //prompt question
  const { username } = await inquirer.prompt(usernameQuestion);

  //define url
  const url = `https://api.github.com/users/${username}`;

  //make api request with url
  const { data } = await axios.get(url);

  const displayData = {
    username: data.login,
    name: data.name,
    location: data.location,
    bio: data.bio,
    followers: data.followers,
    repos: data.public_repos,
    link: data.html_url,
  };
  console.table(displayData);
};

app();
