const { Client, Collection } = require('discord.js');
const c = require('colors')
const { promisify } = require('util');
const glob = require('glob');
const PGlob = promisify(glob);

module.exports = class WendyClient extends Client {
  constructor(options) {
    super(options);

    this.comandos = new Collection();
    this.botões = new Collection();
  }

  async login(token) {
    return (await super.login(token));
    console.log('Conectado com sucesso');
  }

  async loadComandos(comandoPath) {
    const comando = await PGlob(process.cwd() + comandoPath + '**/*.js');
    comando.forEach((arquivos) => {
      const cmd = new (require(arquivos))(this);

      if (!cmd.base.name === null) return console.log('[comando error]'.bgBlack.bold.red, 'Nome indefinido no arquivo: ' + `${arquivos("/")[7]}`.cyan);

      this.comandos.set(cmd.base.name, cmd);
      this.comandosArray.push(cmd);
    });


    super.on('ready', async () => {
      const server = this.guilds.cache.get('954416329652314204');
      server.commands.set(this.comandosArray)
    });
    return this;
  };

  async loadEventos(eventoPath) {
    const evento = await PGlob(process.cwd() + eventoPath + '**/*.js');
    evento.forEach((arquivos) => {
      const evt = new (require(arquivos))(this);

      if (!evt.name) return console.log('[evento error]'.bgBlack.bold.red, 'Nome indefinido no arquivo: ' + `${arquivos("/")[7]}`.cyan);

      super.on(evt.name, (...args) => evt.executar(...args));
    });
    return this;
  };
}