const WendyClient = require('./Base/main');

const client = new WendyClient({
  intents: ['GUILDS', 'GUILD_MESSAGES'],
  partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'USER']
})

client.login('SEU TOKEN')

client.loadComandos('/Origens/Comandos/');
client.loadEventos('/Origens/Eventos/');
