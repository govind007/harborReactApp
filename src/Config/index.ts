import local from './local';
import { IConfig } from './types';

function getConfig(): IConfig {
  return local;
}

export default getConfig();