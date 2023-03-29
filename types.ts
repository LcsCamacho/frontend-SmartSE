interface MenuAsideItemProps {
    className: string;
}

interface Veiculo {
    placa: string;
    marca: string;
    modelo: string;
    ano: string;
    cor: string;
    potencia: string;
    renavam: string;
    id?: number
}

interface Abastecimento {
    valor: string;
    litros: string;
    tipo: string;
    placa: string;
    id?: number

}

export type { MenuAsideItemProps, Veiculo, Abastecimento };