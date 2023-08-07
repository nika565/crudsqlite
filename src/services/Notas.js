import tabelas from '../database';

export function criaTabela(){

    terafas.transaction((tx) => {
        tx.executeSql(

            `
            CREATE TABLE IF NOT EXISTS Notas(
                id INTEGER, PRIMARY KEY AUTO_INCREMENT,
                titulo TEXT, 
                categoria TEXT,
                texto TEXT
            );
            `, 

            [],
            (_error) => {
                console.log(error);
            }
            
        )
    })

}

export async function adicionaNota(nota){

}

export async function buscaNotas(categoria = '*'){

}

export async function atualizaNotas(nota){

}

export async function removeNota(id){
    
}