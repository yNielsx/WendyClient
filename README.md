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
      name: "", // nome do comando
      description: "", // Desc do comando
      usage: "", // como usar o comando
      category: "", // categoria

      aliases: [""], // aliases
      cooldown: 1000, // cooldown para utilizar o cmd
      permission: "SEND_MESSAGES" //permissões 
    });
  }
  
  run(message, args) {
    // seu código aqui
  }
} 
```
