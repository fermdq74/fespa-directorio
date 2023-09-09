import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Empresa from "./Empresa";
import Paginado from "./Paginado";
import Buscador from "./Buscador";
import "./Empresas.css";
//import { data } from '../data/api';
import { Route, Routes } from "react-router-dom";
import Asociados from "./Asociados";
import SocioColaboradores from "./SocioColaboradores";
import Cargando from "./Cargando";
import { useLocation } from "react-router-dom";

export default function Empresas() {
  const [empresas, setEmpresas] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [filtro, setFiltro] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const empresasPorPagina = 20;

  useEffect(() => {
    if (location.pathname === "/socio-colaboradores") {
      fetch(
        `https://us-central1-fespa-directorio.cloudfunctions.net/getColaboradores`
      )
        .then((response) => response.json())
        .then((result) => {
          if (Array.isArray(result)) {
            setEmpresas(result);
          }
        })
        .finally(() => setIsLoading(false));
    } else if (location.pathname === "/asociados" || location.pathname === "/") {
      fetch(
        `https://us-central1-fespa-directorio.cloudfunctions.net/getAsociados`
      )
        .then((response) => response.json())
        .then((result) => {
          if (result && result.results && Array.isArray(result.results)) {
            setEmpresas(result.results);
          }
        })
        .finally(() => setIsLoading(false));
    }
  }, [location.pathname]);

  const filtrarEmpresas = (listaEmpresas) => {
    return listaEmpresas.filter(
      (empresa) =>
      (empresa.Name && empresa.Name.toLowerCase().includes(filtro.toLowerCase())) ||
      (empresa.Region && empresa.Region.toLowerCase().includes(filtro.toLowerCase())) ||
      (empresa.Produccion && empresa.Produccion.some((produccion) => produccion.toLowerCase().includes(filtro.toLowerCase()))) ||
      (empresa.Tecnologia && empresa.Tecnologia.some((tecnologia) => tecnologia.toLowerCase().includes(filtro.toLowerCase()))) ||
      (empresa.Especialidad && empresa.Especialidad.some((especialidad) => especialidad.toLowerCase().includes(filtro.toLowerCase()))) ||
      (empresa.Distribuidor && empresa.Distribuidor.some((distribuidor) => distribuidor.toLowerCase().includes(filtro.toLowerCase()))) ||
      (empresa.Fabricante && empresa.Fabricante.some((fabricante) => fabricante.toLowerCase().includes(filtro.toLowerCase())))
    )
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
  const indiceFinal = Math.min(
    indiceInicial + empresasPorPagina,
    totalEmpresas
  );
  const empresasPaginadas = empresasFiltradas.slice(indiceInicial, indiceFinal);

  if (isLoading) {
    return <Cargando />;
  }

  return (
    <Container className="contenedor">
      <Buscador filtro={filtro} setFiltro={setFiltro} />

      <div className="main">
        <div className="filtrado">
          <Routes>
            <Route path="/" element={<Asociados />} />
            <Route path="/asociados" element={<Asociados />} />
            <Route
              path="/socio-colaboradores"
              element={<SocioColaboradores />}
            />
          </Routes>
        </div>
        <div className="cont-empresas">
          {empresasPaginadas.length > 0 ? (
            <div className="row">
              {empresasPaginadas.map((empresa) => (
                <div className="col-md-6" key={empresa.Name}>
                  <Empresa empresa={empresa} />
                </div>
              ))}
            </div>
          ) : (
            <p className="no-encontrado">No se han encontrado resultados.</p>
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
