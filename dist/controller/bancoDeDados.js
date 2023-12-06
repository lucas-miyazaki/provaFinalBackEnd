"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inicializarVeiculo = exports.listarVeiculos = exports.persistirVeiculo = void 0;
const Veiculo_1 = require("../model/Veiculo");
let bancoDadosVeiculo = [];
function persistirVeiculo(veiculo) {
    try {
        bancoDadosVeiculo.push(veiculo);
    }
    catch (error) {
        return `Erro ao persistir os dados\n ${error}`;
    }
}
exports.persistirVeiculo = persistirVeiculo;
function listarVeiculos() {
    return bancoDadosVeiculo;
}
exports.listarVeiculos = listarVeiculos;
function inicializarVeiculo() {
    const carro = new Veiculo_1.Veiculo('Carro', 'TOYOTA', 'Próprio', 'Gasolina', 'BRA5I19', 'Branco', 2, 150, 1335);
    const caminhao = new Veiculo_1.Veiculo('Caminhão', 'VOLVO', 'Próprio', 'Diesel', 'Bar8i33', 'Rosa', 3, 230, 30000);
    persistirVeiculo(carro);
    persistirVeiculo(caminhao);
}
exports.inicializarVeiculo = inicializarVeiculo;
//# sourceMappingURL=bancoDeDados.js.map