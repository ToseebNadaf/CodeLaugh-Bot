const { Telegraf } = require("telegraf");
const axios = require("axios");
const dotenv = require("dotenv");
const algorithms = require("./algorithms.json");

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
  const algorithmName = ctx.message.text
    .split(" ")
    .slice(1)
    .join(" ")
    .toLowerCase();
  const code = algorithms[algorithmName];

  if (code) {
    ctx.replyWithMarkdownV2(
      `*Here's the code for ${algorithmName}:*\n\`\`\`javascript\n${code}\n\`\`\``
    );
  } else {
    ctx.reply(
      `Algorithm "${algorithmName}" not found. Try "bubble sort", "quick sort", or "merge sort".`
    );
  }
});

bot.launch();
console.log("Bot is running...");
