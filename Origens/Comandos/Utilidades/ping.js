const Base = require('../../Base/comando');

module.exports = class Ping extends Base {
  constructor(client) {
    // Initialise base command and pass data - all properties except name are optional
    super(client, {
      name: "ping",
      description: "Pings the bot.",
      usage: "",
      category: "Information",

      aliases: ["pong"],
      cooldown: 1000000,
      permission: "READ_MESSAGES"
    });
  }
  
  run(message, args) {
    
    message.channel.send('la')
  }
}