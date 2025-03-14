import BotService from './services/bot-service';

async function bootstrap() {
  const bot = new BotService();
  await bot.connectDatabase();
  bot.registerScenes([]);
  bot.registerMiddlewares([]);
  bot.createStage();
  return bot;
}

bootstrap()
  .then(() => {
    console.log('Bot success started');
  })
  .catch((e: Error) => {
    console.error(`Bot caught error when starting: ${e.message}`);
  });

// process.once('SIGINT', () => bot.stop('SIGINT'));
// process.once('SIGTERM', () => bot.stop('SIGTERM'));
