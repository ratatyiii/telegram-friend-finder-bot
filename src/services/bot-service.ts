import { Scenes, session, Telegraf, Middleware } from 'telegraf';
import { Stage } from 'telegraf/scenes';
import { CustomContext, TNextFn } from '../interfaces/ctx';
import 'dotenv/config';
import DatabaseService from './database-service';

export default class BotService {
  private databaseService: DatabaseService = new DatabaseService();
  private bot: Telegraf<CustomContext> = new Telegraf<CustomContext>(
    process.env.BOT_TOKEN || ''
  );
  private scenes: Scenes.BaseScene<CustomContext>[] = [];

  registerScenes(scenes: Scenes.BaseScene<CustomContext>[]): void {
    scenes.forEach((scene: Scenes.BaseScene<CustomContext>) => {
      this.scenes.push(scene);
    });
  }

  createStage() {
    const stage = new Stage<CustomContext>(this.scenes);

    this.bot.use(stage.middleware());
  }

  registerMiddlewares(middlewares: Middleware<CustomContext>[] = []) {
    middlewares.forEach((middleware: Middleware<CustomContext>) => {
      this.bot.use(middleware);
    });

    this.bot.use(async (ctx: CustomContext, next: TNextFn) => {
      console.log(
        `${ctx.message!.from.first_name}:${ctx.chat!.id} sent ${ctx.updateType}`
      );

      await next();
    });

    this.bot.use(session());
  }

  async connectDatabase() {
    try {
      await this.databaseService.connect(process.env.MONGODB_URI!);
      console.log('Successful connected to database');
    } catch (err) {
      console.error(`Failed to connect database:`);
    }
  }
}
