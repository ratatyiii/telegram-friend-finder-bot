import { Context } from 'telegraf';
import {
  SceneContextScene,
  SceneSession,
  WizardContext,
  WizardContextWizard,
  WizardSession,
  WizardSessionData,
} from 'telegraf/scenes';
import { SessionContext } from 'telegraf/src/session';

interface CustomContextSessionData extends SceneSession {}

interface CustomState {}

export interface CustomContext extends Context {
  session: CustomContextSessionData;
  scene: SceneContextScene<CustomContext> & { state: CustomState };
}

interface CustomWizardContextSessionData extends WizardSessionData {}

export interface CustomWizardContext extends WizardContext {
  session: WizardSession;
  scene: SceneContextScene<CustomWizardContext, WizardSessionData>;
  wizard: WizardContextWizard<SessionContext<CustomWizardContextSessionData>>;
}

export type TNextFn = () => void | Promise<void>;
