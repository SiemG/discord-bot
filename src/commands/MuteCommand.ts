import { injectable } from 'inversify';
import { ICommand, ICommandArgument, IMessage } from '../interfaces';

@injectable()
export class MuteCommand implements ICommand {
  id: string;

  args: ICommandArgument[];

  constructor() {
    this.id = 'mute';
    this.args = [];
  }

  async execute(message: IMessage): Promise<void> {
    if (!message.member.hasPermission('KICK_MEMBERS')) return;
    const role = message.guild.roles.cache.find((role) => role.name === 'Muted');
    const member = message.mentions.members.first();
    member.roles.add(role);
    await message.channel.send(`Muted ${member}`);
  }
}
