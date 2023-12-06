"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculo = void 0;
class Veiculo {
    tipo;
    marca;
    categoria;
    combustivel;
    placa;
    cor;
    quantEixos;
    altura;
    peso;
    constructor(_tipo, _marca, _categoria, _combustivel, _placa, _cor, _quantEixos, _altura, _peso) {
        this.tipo = _tipo;
        this.marca = _marca;
        this.categoria = _categoria;
        this.combustivel = _combustivel;
        this.placa = _placa;
        this.cor = _cor;
        this.quantEixos = _quantEixos;
        this.altura = _altura;
        this.peso = _peso;
    }
    getTipo() {
        return this.tipo;
    }
    setMarca(_marca) {
        this.marca = _marca;
    }
    getMarca() {
        return this.marca;
    }
    setCategoria(_categoria) {
        this.categoria = _categoria;
    }
    getCategoria() {
        return this.categoria;
    }
    setCombustivel(_combustivel) {
        this.combustivel = _combustivel;
    }
    getCombustivel() {
        return this.combustivel;
    }
    setPlaca(_placa) {
        this.placa = _placa;
    }
    getPlaca() {
        return this.placa;
    }
    setCor(_cor) {
        this.cor = _cor;
    }
    getCor() {
        return this.cor;
    }
    setQuantEixos(_quantEixos) {
        this.quantEixos = _quantEixos;
    }
    getQuantEixos() {
        return this.quantEixos;
    }
    setAltura(_altura) {
        this.altura = _altura;
    }
    getAltura() {
        return this.altura;
    }
    setPeso(_peso) {
        this.peso = _peso;
    }
    getPeso() {
        return this.peso;
    }
    mostrarVeiculo() {
        console.log(`Tipo:${this.tipo} 
        Marca:${this.marca} 
        Categoria:${this.categoria} 
        Combustível:${this.combustivel} 
        Placa:${this.placa} 
        Cor:${this.cor} 
        Quantidade de eixos:${this.quantEixos}
        Altura:${this.altura}
        Peso:${this.peso}
        `);
    }
    acelerar() {
        console.log(`${this.tipo} está acelerando`);
    }
    acelerarFrente(_acelerar) {
        console.log(`${this.tipo} acelera ${_acelerar} KM/H`);
    }
    andar() {
        console.log(`${this.tipo} está andando`);
    }
    andarQuilometros(_quilometros) {
        setTimeout(() => {
            console.log(`${this.tipo} andou ${_quilometros} quilômetros`);
        }, 3000);
    }
    freiar() {
        console.log(`${this.tipo} está freiando`);
    }
    freiarParar(_parando) {
        console.log(`${this.tipo} está freiando a ${_parando} KM/H`);
    }
    cadastroVeiculo(veiculo) {
        console.log(`${veiculo.tipo} cadastrado(a) com sucesso`);
    }
}
exports.Veiculo = Veiculo;
//# sourceMappingURL=Veiculo.js.map