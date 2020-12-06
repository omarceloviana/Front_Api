import axios from "axios";
//import {getInitialProps} from 'next';

import { useEffect, useState } from "react";

import classes from "../styles/style.module.css";

const Index = (dados) => {
  const [clientes, setClientes] = useState([]);

  useEffect(async () => {
    const response = await axios.get("http://localhost:8080/");
    setClientes(response.data);
  }, []);

  //Função POST para inserir dados no arquivo json.
  async function enviarFormulario(e) {
    e.preventDefault();

    var nome = document.getElementById("nome");
    var endereço = document.getElementById("endereço");
    var cep = document.getElementById("cep");
    var nascimento = document.getElementById("nascimento");
    var telefone = document.getElementById("telefone");

    const formulario = {
      nome: nome.value,
      endereço: endereço.value,
      cep: cep.value,
      nascimento: nascimento.value,
      telefone: telefone.value,
    };

    const response = await axios.post("http://localhost:8080/", formulario);
    console.log(response);
  }

    //HTML do formulário
  return (
    <section className={classes.container}>
      <div style={{ textAlign: "center" }}>
        <h1>Formulário de cadastro</h1>
      </div>
      <div className={classes.formContainer}>
        <form onSubmit={enviarFormulario}>
          <input id="nome" name="nome" type="text" placeholder="Nome"></input>
          <input
            id="endereço"
            name="endereço"
            type="text"
            placeholder="Endereço"
          ></input>
          <input id="cep" name="cep" type="text" placeholder="Cep"></input>
          <input id="nascimento" type="text" placeholder="Nascimento"></input>
          <input
            id="telefone"
            name="telefone"
            type="text"
            placeholder="Telefone"
          ></input>{" "}
          <br />
          <input type="submit" value="INSCREVA-SE" />
        </form>
      </div>
    </section>
  );
};

export default Index;
