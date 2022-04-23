const WendyClient = require('./Base/main');

const client = new WendyClient({
  intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_PRESENCES'],
  partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'USER']
})

client.login(process.env.BotToken)

client.loadComandos('/Origens/Comandos/');
client.loadEventos('/Origens/Eventos/');
