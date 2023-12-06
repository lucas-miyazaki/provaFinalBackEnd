export class Veiculo {
    private tipo: string;
    private marca: string;
    private categoria: string;
    private combustivel: string;
    private placa: string;
    private cor: string;
    private quantEixos: number;
    private altura: number;
    private peso: number;

    public constructor(
        _tipo: string,
        _marca: string,
        _categoria: string,
        _combustivel: string,
        _placa: string,
        _cor: string,
        _quantEixos: number,
        _altura: number,
        _peso: number,
    ) {
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

    public getTipo(): string {
        return this.tipo;
    }

    public setMarca(_marca: string): void {
        this.marca = _marca;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setCategoria(_categoria: string): void {
        this.categoria = _categoria;
    }

    public getCategoria(): string {
        return this.categoria;
    }

    public setCombustivel(_combustivel: string): void {
        this.combustivel = _combustivel;
    }

    public getCombustivel(): string {
        return this.combustivel;
    }

    public setPlaca(_placa: string): void {
        this.placa = _placa;
    }

    public getPlaca(): string {
        return this.placa;
    }

    public setCor(_cor: string): void {
        this.cor = _cor;
    }

    public getCor(): string {
        return this.cor;
    }

    public setQuantEixos(_quantEixos: number): void {
        this.quantEixos = _quantEixos;
    }

    public getQuantEixos(): number {
        return this.quantEixos;
    }

    public setAltura(_altura: number): void {
        this.altura = _altura;
    }

    public getAltura(): number {
        return this.altura;
    }

    public setPeso(_peso: number): void {
        this.peso = _peso;
    }

    public getPeso(): number {
        return this.peso;
    }

    public mostrarVeiculo() {
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

    public acelerar(): void {
        console.log(`${this.tipo} está acelerando`);
    }

    public acelerarFrente(_acelerar: string) {
        console.log(`${this.tipo} acelera ${_acelerar} KM/H`);
    }

    public andar(): void {
        console.log(`${this.tipo} está andando`);
    }

    public andarQuilometros(_quilometros: number) {
        setTimeout(() => {
            console.log(`${this.tipo} andou ${_quilometros} quilômetros`);
        }, 3000);
    }

    public freiar(): void {
        console.log(`${this.tipo} está freiando`);
    }

    public freiarParar(_parando: string) {
        console.log(`${this.tipo} está freiando a ${_parando} KM/H`);
    }

    cadastroVeiculo(veiculo: Veiculo) {
        console.log(`${veiculo.tipo} cadastrado(a) com sucesso`);
    }
}
