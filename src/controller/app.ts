import express from "express";
import cors from 'cors';
import { Veiculo } from "../model/Veiculo";
import { inicializarVeiculo, listarVeiculos, persistirVeiculo } from "./bancoDeDados";

inicializarVeiculo();

const app = express();
const port: number = 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    console.log('Recebi uma requisição GET');
    res.send({ mensagem: "Estou devolvendo a resposta para sua requisição" });
});

app.post('/cadastro', (req, res) => {
    try {
        const { tipo, marca, categoria, combustivel, placa, cor, quantEixos, altura, peso } = req.body;
        const veiculo = new Veiculo(tipo, marca, categoria, combustivel, placa, cor, quantEixos, altura, peso);

        console.log('Veículo cadastrado:', veiculo);
        persistirVeiculo(veiculo);

        res.json({ mensagem: "Veículo cadastrado com sucesso" });
    } catch (error) {
        console.error('Erro ao cadastrar veículo:', error);
        res.status(500).json({ mensagem: "Erro ao cadastrar veículo" });
    }
});

app.get('/veiculo', (req, res) => {
    try {
        const listaDeVeiculos = listarVeiculos();
        console.log(`Retornando a lista de veículos cadastrados`);
        res.json(listaDeVeiculos);
    } catch (error) {
        console.error('Erro ao listar veículos:', error);
        res.status(500).json({ mensagem: "Erro ao obter a lista de veículos" });
    }
});

app.listen(port, () => {
    console.log(`Servidor express ouvindo no endereço http://localhost:${port}/`);
});
