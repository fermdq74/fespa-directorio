import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Empresa from './Empresa';
import Paginado from './Paginado';
import Buscador from './Buscador';
import './Empresas.css';
import { data } from '../data/api';
import { Route, Routes } from 'react-router-dom';
import Asociados from './Asociados';
import SocioColaboradores from './SocioColaboradores';


export default function Empresas() {
  const [empresas, setEmpresas] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [filtro, setFiltro] = useState('');
  const empresasPorPagina = 8; 
  
  
  useEffect(() => {
    setEmpresas(data.results);
  }, []);

  const filtrarEmpresas = (listaEmpresas) => {
    return listaEmpresas.filter((empresa) =>
      empresa.Name.toLowerCase().includes(filtro.toLowerCase()) ||
      empresa.Region.toLowerCase().includes(filtro.toLowerCase())
    );
  };

  const handlePaginaChange = (pageNumber) => {
    setPagina(pageNumber);
  };

  useEffect(() => {
    setPagina(1);
  }, [filtro]);

  const empresasFiltradas = filtrarEmpresas(empresas);
  const totalEmpresas = empresasFiltradas.length;
  const totalPaginas = Math.ceil(totalEmpresas / empresasPorPagina);
  const indiceInicial = (pagina - 1) * empresasPorPagina;
  const indiceFinal = Math.min(indiceInicial + empresasPorPagina, totalEmpresas);
  const empresasPaginadas = empresasFiltradas.slice(indiceInicial, indiceFinal);


  return (
    <Container className='contenedor'>
      <Buscador filtro={filtro} setFiltro={setFiltro} />

    <div className='main'>

 
        
    <div className='filtrado'>
    <Routes>
        <Route path='/' element={<Asociados/>} />
        <Route path='/asociados' element={<Asociados/>} />
        <Route path='/socio-colaboradores' element={<SocioColaboradores/>} />
       </Routes>
      </div>
      <div className='cont-empresas'>
      {empresasPaginadas.length > 0 ? (
        <div className="row">
          {empresasPaginadas.map((empresa) => (
            <div className="col-md-6" key={empresa.Name}>
              <Empresa empresa={empresa} />
            </div>
          ))}
        </div>
      ) : (
        <p className='no-encontrado'>No se han encontrado resultados.</p>
      )}
      {totalEmpresas > 0 && (
        <Paginado
          pagina={pagina}
          totalPaginas={totalPaginas}
          onPageChange={handlePaginaChange}
        />
      )}
      </div>

    </div>
      
    </Container>
  );
}

