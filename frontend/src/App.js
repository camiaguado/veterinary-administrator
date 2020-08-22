import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import clienteAxios from './config/axios'

// Components:
import Pacientes from './components/Pacientes'
import NuevaCita from './components/NuevaCita'
import Cita from './components/Cita'

function App() {

  // State of the app
  const [ citas, guardarCitas ] = useState([]);

  useEffect(() => {
    // Se ejecuta cuando empieza la api o cuando cambio algo
    const consultarAPI = () => {
      clienteAxios.get('/pacientes')
        .then(respuesta => {
          // Colocar en el state el resultado
          guardarCitas(respuesta.data);
        })
        .catch(error => {
          console.log(error)
        })
    }
    consultarAPI();
  }, []);

  return (
   <Router>
     <Switch>
       <Route exact path="/" component={() => <Pacientes citas={citas}/>} />
       <Route exact path="/nueva" component={NuevaCita} />
       <Route exact path="/cita/:id" component={Cita} />
     </Switch>
   </Router>
  
  );
}

export default App;
