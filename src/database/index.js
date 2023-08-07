import * as SQLite from 'expo-sqlite';

// O nome do banco de dados
const tarefas = SQLite.openDatabase('tarefas.db');

export default tarefas;