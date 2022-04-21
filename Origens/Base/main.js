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
    this.aliases = new Collection();
  }

  async login(token) {
    return (await super.login(token).then(() => console.log('[WendyClient]'.bgBlack.cyan, `O client foi inicializado com sucesso.`)))
  }

  async loadComandos(comandoPath) {
      const Command = await PGlob(process.cwd() + comandoPath + '*/*.js');


    Command.map((files) => {
      const cmd = new (require(files))(this);
      if (!files) return;

      this.comandos.set(cmd.base.name, cmd)
      cmd.conf.aliases.forEach(a => this.aliases.set(a, cmd.base.name))
    })
    return this;
  };

  async loadEventos(eventoPath) {
    const evento = await PGlob(process.cwd() + eventoPath + '**/*.js');
    evento.map((arquivos) => {
      const evt = new (require(arquivos))(this);

      if (!evt.name) return console.log('[evento error]'.bgBlack.bold.red, 'Nome indefinido no arquivo: ' + `${arquivos("/")[7]}`.cyan);

      super.on(evt.name, (...args) => evt.executar(...args));
    });
    return this;
  };
}