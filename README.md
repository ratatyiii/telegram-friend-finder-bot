# Telegram Bot

A powerful and flexible Telegram bot built with Node.js, using MongoDB for data storage and for caching.

## Features

- Fast and responsive message handling
- Persistent data and caching storage with MongoDB
- Easy configuration through environment variables
- Development and production modes

## Prerequisites

- Node.js (v16 or newer)
- MongoDB instance
- Telegram bot token (from BotFather)

## Installation

1. Clone the repository:

```
git clone https://github.com/ratatyiii/telegram-friend-finder-bot.git
cd telegram-friend-finder-bot
```

2. Install dependencies:

```
npm install
```

3. Create a `.env` file in the root directory using the provided `.env.example` as a template.

## Configuration

### Environment Variables

Copy the `.env.example` file to a new file named `.env` and fill in your values:

```
BOT_TOKEN=your_telegram_bot_token
MONGODB_URI=your_mongodb_connection_string
```

### Creating a Telegram Bot

To obtain a `BOT_TOKEN`, you need to create a new bot with BotFather:

1. Open Telegram and search for [@BotFather](https://t.me/BotFather)
2. Send the `/newbot` command and follow the instructions
3. Choose a name for your bot
4. Choose a username for your bot (must end with "bot")
5. BotFather will provide you with a token - use this as your `BOT_TOKEN`
6. Optionally, you can set a description, about text, and profile picture for your bot using the `/setdescription`, `/setabouttext`, and `/setuserpic` commands

## Usage

### Development Mode

To run the bot in development mode with hot reloading:

```
npm run dev
```

### Production Mode

To run the bot in production mode:

```
npm run start
```
