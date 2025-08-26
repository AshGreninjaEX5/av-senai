const Criatura = require("./Criatura");

class Fenix extends Criatura {
    constructor(nome) {
        super(nome, "Chamas da Renovação");
    }

    agir() {
        console.log(`${this.nome} ressurge em ${this.ataqueMagico}, incendiando tudo ao redor e renascendo das cinzas!`);
        this.alterarEnergia(-30);
    }
}

module.exports = Fenix;
