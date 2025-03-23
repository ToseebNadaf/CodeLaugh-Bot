const { Telegraf } = require("telegraf");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) =>
  ctx.reply(
    "Welcome to the CodeLaugh! Use /joke to get a random joke or /algorithm <name> to get the code for an algorithm."
  )
);

bot.command("joke", async (ctx) => {
  try {
    const response = await axios.get("https://v2.jokeapi.dev/joke/Any");
    const joke = response.data.setup
      ? `${response.data.setup} ${response.data.delivery}`
      : response.data.joke;
    ctx.reply(joke);
  } catch (error) {
    ctx.reply("Failed to fetch a joke. Please try again later.");
  }
});

bot.command("algorithm", (ctx) => {
  const algorithmName = ctx.message.text.split(" ").slice(1).join(" ");
  const algorithms = {
    "bubble sort": `
    function bubbleSort(arr) {
      let n = arr.length;
      for (let i = 0; i < n-1; i++) {
        for (let j = 0; j < n-i-1; j++) {
          if (arr[j] > arr[j+1]) {
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
          }
        }
      }
      return arr;
    }`,
    "quick sort": `
    function quickSort(arr) {
      if (arr.length <= 1) return arr;
      const pivot = arr[0];
      const left = [];
      const right = [];
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
      }
      return [...quickSort(left), pivot, ...quickSort(right)];
    }`,
  };

  const code = algorithms[algorithmName.toLowerCase()];
  if (code) {
    ctx.reply(`Here's the code for ${algorithmName}:\n${code}`);
  } else {
    ctx.reply(
      `Algorithm "${algorithmName}" not found. Try "bubble sort" or "quick sort".`
    );
  }
});

bot.launch();
console.log("Bot is running...");
