export interface Pensamento {
    id?: number;
    conteudo: string;
    autoria: string;
    modelo: 'modelo1' |  'modelo2' | 'modelo3';
    favorito: boolean;
}