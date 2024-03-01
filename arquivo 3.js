// Classe genérica para heróis
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    switch (this.tipo) {
      case "mago":
        ataque = "usou magia";
        break;
      case "guerreiro":
        ataque = "usou espada";
        break;
      case "monge":
        ataque = "usou artes marciais";
        break;
      case "ninja":
        ataque = "usou shuriken";
        break;
      default:
        ataque = "com um ataque poderoso";
    }

    console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
  }
}

// Criação de alguns exemplos de heróis
const mago = new Heroi("Merlin", 500, "mago");
const guerreiro = new Heroi("Arthur", 30, "guerreiro");
const monge = new Heroi("Shaolin", 25, "monge");
const ninja = new Heroi("Hanzo", 40, "ninja");

// Ataque dos heróis
mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
