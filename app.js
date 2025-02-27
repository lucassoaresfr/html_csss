const express = require('express');
const mysql = require('mysql')
const app = express;
const port = 3000;

const conection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'empreda',
})

conection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conexão com o banco de dados bem-sucedida!');
});

app.post('/cadastro', (req,res) => {
    const {id_cliente, nome_cliente,cnpj_cliente, insta, email_cliente} = req.body;

    if(!id_cliente || !nome_cliente || !cnpj_cliente || !insta || !email_cliente) {
        return res.status(400).send('Faltando dados para atualizar');
    }
})

const query = `UPDATE users SET ID_CLIENTE = ?, NOME_CLIENTE = ?, CNPJ_CLIENTE = ?, INSTA = ?, EMAIL_CLIENTE = ?`;
const values = [id_cliente, nome_cliente, cnpj_cliente, insta, email_cliente]
  
  app.listen(port, () => { console.log(`Servidor rodando em http://localhost:${port}`); }); 
