import { Veiculo } from "../model/Veiculo";

let bancoDadosVeiculo: Veiculo[] = [];

export function persistirVeiculo(veiculo: Veiculo) {
    try {
        bancoDadosVeiculo.push(veiculo);
    } catch (error) {
        return `Erro ao persistir os dados\n ${error}`;
    }
}

export function listarVeiculos() {
    return bancoDadosVeiculo;
}

export function inicializarVeiculo() {
    const carro = new Veiculo('Carro', 'TOYOTA', 'Próprio', 'Gasolina', 'BRA5I19', 'Branco', 2, 150, 1335);
    const caminhao = new Veiculo('Caminhão', 'VOLVO', 'Próprio', 'Diesel', 'Bar8i33', 'Rosa', 3, 230, 30000);

    persistirVeiculo(carro);
    persistirVeiculo(caminhao);
}
