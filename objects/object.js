function Carro(marca, modelo, combustivel, valor) {
    this.marca = marca;
    this.modelo = modelo;
    this.combustivel = combustivel;
    this.valor = valor;

    this.ligar = function () {
        return "Vruuuuuum"
    }

    this.buzinar = function (nomeDoModelo) {
        return nomeDoModelo + " Passando beeeeennnn"
    }
}