/*
* @param {WendyClient} client
*/
module.exports = class Comando {
  constructor(client, options) {
    /**
    * @type {WendyClient}
    */
    this.client = client;

    this.base = {
      name: options.name || null,
      description: options.description || 'Descrição indefinida.',
      usage: options.usage || 'indefinido',
      category: options.category || 'Utilidades'
    }

    this.conf = {
      aliases: options.aliases || [],
      cooldown: options.cooldown || 1000,
      permission: options.permission || 'SEND_MESSAGES',
      allowDMS: options.allowDMS || false,
    };

    this.cooldown = new Set();
  };

  startCooldown(user) {
    this.cooldown.add(user);
    setTimeout(() => {
      this.cooldown.delete(user);
    }, this.conf.cooldown);
  };

  setMessages(message) {
    this.message = message;
  }
}