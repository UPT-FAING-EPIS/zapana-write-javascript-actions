const core = require('@actions/core');
const rp = require('request-promise');

async function run() {
  try {
    const options = {
      uri: 'https://icanhazdadjoke.com/',
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'GitHub-Action-Dad-Joke'
      },
      json: true
    };

    const response = await rp(options);
    const joke = response.joke;

    core.setOutput('joke', joke); // Asegúrate que aquí diga 'joke'
    console.log(joke);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();