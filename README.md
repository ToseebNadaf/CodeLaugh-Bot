# CodeLaugh Bot 🤖

CodeLaugh Bot is a fun and educational Telegram bot built using Node.js and the telegraf.js library. It combines humor and coding by providing random jokes and algorithm code snippets on demand. Whether you're in the mood for a laugh or need a quick reference for an algorithm, CodeLaugh Bot has got you covered!

## Features

- **Joke Bot**: Get a random joke with the `/joke` command.
- **Algorithm Bot**: Fetch the code for popular algorithms using the `/algorithm <name>` command.
- **User-Friendly**: Simple and intuitive commands for seamless interaction.
- **Extensible**: Easily add more features or algorithms.

## Commands

| Command             | Description                                                             |
| ------------------- | ----------------------------------------------------------------------- |
| `/start`            | Welcome message and instructions.                                       |
| `/joke`             | Get a random joke.                                                      |
| `/algorithm <name>` | Get the code for a specific algorithm (e.g., `/algorithm bubble sort`). |

## Technologies Used

- **Node.js**: Runtime environment for building the bot.
- **Telegraf.js**: Library for interacting with the Telegram Bot API.
- **Axios**: For fetching jokes from an external API.
- **JavaScript**: Programming language used for the bot logic.

## Setup and Installation

### Prerequisites

- **Node.js**: Make sure you have Node.js installed. [Download it here](https://nodejs.org/).
- **Telegram Bot Token**: Get your bot token from [BotFather](https://core.telegram.org/bots#botfather).

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/CodeLaugh-Bot.git
   cd CodeLaugh-Bot
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Your Bot Token**:
   - Create a `.env` file in the root directory:
     ```env
     BOT_TOKEN=your-telegram-bot-token
     ```
   - Replace `your-telegram-bot-token` with the token you got from BotFather.

4. **Run the Bot**:
   ```bash
   npm start
   ```