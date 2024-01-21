import React, { useEffect } from "react";
import { useRoutes } from "react-router";
import Router from "./routes/Router";
import axios from 'axios';
import "./index.css";

function App() {
  const routing = useRoutes(Router);

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get('https://dhermesback.onrender.com/api/medicamentos')
        .then(response => console.log(response))
        .catch(error => console.log(error));
    }, 25 * 60 * 1000); // Cada 25 minutos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <React.Fragment>
      {routing}
    </React.Fragment>
  );
}
export default App;