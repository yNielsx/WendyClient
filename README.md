<div>
<h2> WENDYCLIENT </h2>

> Um simples template para bots do discord utilizando classes.

> Caso utilize de os créditos para (yNielsx#3398) agradeço.

> Caso haja bugs reporte no meu privado. sou novo em programação por isso pode haver bugs.

</div>

<div>
<h2> TEMPLATES </h2>

```js
// TEMPLATE COMANDOS

const Base = require('../../Base/comando');

module.exports = class NomeComando extends Base {
  constructor(client) {
    super(client, {
      name: "", // Nome do comando
      description: "", // Desc do comando
      usage: "", // Como usar o comando
      category: "", // Categoria

      aliases: [""], // Aliases
      cooldown: 1000, // Cooldown para utilizar o cmd
      permission: "SEND_MESSAGES", // Permissões 
      allowDMS: false // Permitir o comando em privado ou não.
    });
  }
  
  run(message, args) {
    // seu código aqui
  }
} 
```

```js
// TEMPLATE EVENTO

module.exports = class {
  constructor(client) {
    this.client = client;
    this.name = 'ready'; // Nome do evento aqui
  }

  executar(//Nome do evento aqui tbm) {
    // Seu código aqui
  }
}
