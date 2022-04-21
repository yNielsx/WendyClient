module.exports = class {
  constructor(client) {
    this.client = client;
    this.name = 'ready';
  }

  executar(ready) {
    console.log('oii')
  }
}