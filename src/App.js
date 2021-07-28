import './App.css';
import React, { useState, useEffect } from 'react';
import Tarjeta from './tarjeta';
import service from './services/service';
import Alerta from './alerta';

function App() {

  const [nombres, setNombres] = useState([]);
  const [alerta, setAlerta] = useState({});
  
  useEffect(() => {
    fetchData();
  },[]);
  
  async function fetchData() {
    const respuesta = await service.buscarTodos();
    if(respuesta.ok)
      setNombres(respuesta.mensaje);
    else
      setAlerta(respuesta);
  }

  return (
    <>
      {
        alerta.ok===false && <Alerta mensaje = {'Error: '+ alerta.mensaje}/>
      }
      {
        nombres.length > 3 &&
        <div>
          <div className="container">
          <h1>Los nombres</h1>
            <div className="row">
              {nombres.map((nombre, index) => <Tarjeta key={index} nombre={nombre} />)}
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default App;