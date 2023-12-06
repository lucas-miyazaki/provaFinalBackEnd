"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Veiculo_1 = require("../model/Veiculo");
const bancoDeDados_1 = require("./bancoDeDados");
(0, bancoDeDados_1.inicializarVeiculo)();
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    console.log('Recebi uma requisição GET');
    res.send({ mensagem: "Estou devolvendo a resposta para sua requisição" });
});
app.post('/cadastro', (req, res) => {
    try {
        const { tipo, marca, categoria, combustivel, placa, cor, quantEixos, altura, peso } = req.body;
        const veiculo = new Veiculo_1.Veiculo(tipo, marca, categoria, combustivel, placa, cor, quantEixos, altura, peso);
        console.log('Veículo cadastrado:', veiculo);
        (0, bancoDeDados_1.persistirVeiculo)(veiculo);
        res.json({ mensagem: "Veículo cadastrado com sucesso" });
    }
    catch (error) {
        console.error('Erro ao cadastrar veículo:', error);
        res.status(500).json({ mensagem: "Erro ao cadastrar veículo" });
    }
});
app.get('/veiculo', (req, res) => {
    try {
        const listaDeVeiculos = (0, bancoDeDados_1.listarVeiculos)();
        console.log(`Retornando a lista de veículos cadastrados`);
        res.json(listaDeVeiculos);
    }
    catch (error) {
        console.error('Erro ao listar veículos:', error);
        res.status(500).json({ mensagem: "Erro ao obter a lista de veículos" });
    }
});
app.listen(port, () => {
    console.log(`Servidor express ouvindo no endereço http://localhost:${port}/`);
});
//# sourceMappingURL=app.js.map