export default class Pessoa {
    contructor(nome){
        this.nome = nome;
    }
    
    toString(){
        return `Pessoa: ${this.nome}`;
    }
}
