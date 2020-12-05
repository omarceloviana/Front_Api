import axios from 'axios';
//import {getInitialProps} from 'next';
import {useEffect, useState} from 'react';

const Index = (dados) => {
    const [clientes, setClientes] = useState([]);
    console.log(clientes);

    useEffect(async ()=>{
        const response = await axios.get(
            'http://localhost:8080/'
        );
        setClientes(response.data);
        
    },[]);
    return (
        <div>
              <form>
                    <input id="nome" name="nome" type="text" placeholder="Nome"></input>
                    <input id="endereço" name="endereço" type="text" placeholder="Endereço"></input>
                    <input id="cep" name="cep" type="text" placeholder="Cep"></input>
                    <input id="nascimento" name="nascimento" type="text" placeholder="Nascimento"></input>
                    <input id="telefone" name="telefone" type="text" placeholder="Telefone"></input>
                    <input type="submit" value="INSCREVA-SE"/>
                </form>
        </div>
    );
};
    
export default Index;