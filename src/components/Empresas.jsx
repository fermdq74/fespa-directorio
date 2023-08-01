import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Empresa from './Empresa';
import Paginado from './Paginado';
import Buscador from './Buscador';
import './Empresas.css';
import { data } from '../data/api';
import Filtrado from './Filtrado';

export default function Empresas() {
  const [empresas, setEmpresas] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [filtro, setFiltro] = useState('');
  const empresasPorPagina = 8; 
  useEffect(() => {
    setEmpresas(data.results);
  }, []);

  const filtrarEmpresas = (listaEmpresas) => {
    if (!filtro) {
      return listaEmpresas;
    }

    return listaEmpresas.filter((empresa) =>
      empresa.title && empresa.title.toLowerCase().startsWith(filtro.toLowerCase())
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
    <Container>
      <Buscador filtro={filtro} setFiltro={setFiltro} />

    <div className='main'>

    <div className='filtrado'>
        <Filtrado/>
      </div>
      <div className='cont-empresas'>
      {empresasPaginadas.length > 0 ? (
        <div className="row">
          {empresasPaginadas.map((empresa) => (
            <div className="col-md-6" key={empresa.id}>
              <Empresa empresa={empresa} />
            </div>
          ))}
        </div>
      ) : (
        <p className='no-encontrado'>Empresa no encontrada</p>
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

