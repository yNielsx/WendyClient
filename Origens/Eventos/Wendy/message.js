const { MessageEmbed } = require('discord.js')

module.exports = class {
  constructor(client) {
    this.client = client;
    this.name = 'messageCreate';
    this.prefix = '!!';
  }
  async executar(message) {
   if (message.author.bot || !message.content.startsWith(this.prefix)) return;

        const args = message.content.split(/\s+/g);
        const command = args.shift().slice(this.prefix.length);
        const cmd = this.client.comandos.get(command) || this.client.comandos.get(this.client.aliases.get(command));

        if (!cmd) return;
        if (cmd.cooldown.has(message.author.id)) return message.channel.send({ embeds: [
          new MessageEmbed()
          .setTitle('oi')
          .setDescription('sh')
        ]}) && message.delete();

        cmd.setMessages(message);
        cmd.run(message, args);

        if (cmd.conf.cooldown > 0) cmd.startCooldown(message.author.id);
    }
}