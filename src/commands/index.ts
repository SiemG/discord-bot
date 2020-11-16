import { container } from '../config/ioc.config';
import { ICommand } from '../interfaces';

import { PingCommand } from './PingCommand';
import { GithubCommand } from './GithubCommand';
import { RoadmapCommand } from './RoadmapCommand';
import { MuteCommand } from './MuteCommand';

export const commands: ICommand[] = [
  PingCommand,
  GithubCommand,
  RoadmapCommand,
  MuteCommand
].map((i) => container.resolve<ICommand>(i));
