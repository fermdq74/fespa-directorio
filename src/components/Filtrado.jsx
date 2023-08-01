import * as React from 'react';
import './Filtrado.css';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const producción = [
  "Publicidad exterior vallas y autobuses",
  "Lonas recubrimiento fachadas",
  "PLV en cartón",
  "PLV otros materiales",
  "Eventos",
  "Rótulos luminosos y letras cajeadas",
  "Productos gráficos de pequeños ",
  "Formato",
  "Serigrafía artística",
  "Banderas",
  "Textil decoración",
  "Camisetas",
  "Sublimación textil",
  "Otros textiles",
  "Impresión sobre soportes rígidos",
  "Trabajos sobre cerámica",
  "Trabajos sobre metal",
  "Señalética",
  "Producción 3D",
  "Reclamo publicitario",
  "Formación",
];

const tecnologíaDeImpresión = [
  'Serigrafía',
   'Tampografía',
   'Digital sobre soportes flexibles',
   'Digital sobre rígidos',
   'Digital para aplicaciones especiales',
   'Rótulos luminosos y letras cajeadas',
   'Transfer',
   'Diseño'
];

const especialidad = [
  "Impresión",
  "Instalación de producción propia",
  "Instalación para terceros",
  "Producción artística",
  "Decoración de flotas",
  "Especialista en carwrapping",
  "Trabajos en altura",
  "Proyectos espectaculares",
  "Diseño gráfico",
  "Diseño 3D",
  "Animación",
  "Consultoría",
];

const distribuidor = [
  'Maquinaria de corte',
   'Maquinaria de impresión digital gran formato',
   'Maquinaria de impresión digital pequeño formato',
   'Maquinaria impresión digital textil',
   'Maquinaria impresión serigráfica',
   'Maquinaria impresión serigrafía industrial',
   'Materiales para etiquetas y envases',
   'Producto Textil',
   'Banderas',
   'Formación',
   'Preimpresión',
   'Prensas de impresión digitales y convencionales',
   'Lonas',
   'Software, RIP',
   'Web-to-print',
   'Materiales de impresión digital',
   'Materiales de rotulación',
   'Materiales de wrapping',
   'Consumibles para impresión',
   'Contenidos de vídeo',
   'Creación y Diseño',
   'Decoración textil',
   'Diseño Retail',
   'Maquinaria de impresión de etiquetas',
   'Maquinaria de escaners',
   'Maquinaria Impresión 3D',
   'Software ERP',
   'Laminadoras, barnices, recubrimiento',
   'Tintas para impresión digital',
   'Tintas para serigrafía',
];

const fabricante = [
  'Maquinaria de corte',
  'Maquinaria de impresión digital gran formato',
  'Maquinaria de impresión digital pequeño formato',
  'Maquinaria impresión digital textil',
  'Maquinaria impresión serigráfica',
  'Maquinaria impresión serigrafía industrial',
  'Materiales para etiquetas y envases',
  'Producto Textil',
  'Banderas',
  'Formación',
  'Preimpresión',
  'Prensas de impresión digitales y convencionales',
  'Lonas',
  'Software, RIP',
  'Web-to-print',
  'Materiales de impresión digital',
  'Materiales de rotulación',
  'Materiales de wrapping',
  'Consumibles para impresión',
  'Contenidos de vídeo',
  'Creación y Diseño',
  'Decoración textil',
  'Diseño Retail',
  'Maquinaria de impresión de etiquetas',
  'Maquinaria de escaners',
  'Maquinaria Impresión 3D',
  'Software ERP',
  'Laminadoras, barnices, recubrimiento',
  'Tintas para impresión digital',
  'Tintas para serigrafía',
]

const tecnologíaDeImpresiónColab = [
  'Serigrafía',
   'Tampografía',
   'Digital sobre soportes flexibles',
   'Digital sobre rígidos',
   'Digital para aplicaciones especiales',
   'Rótulos luminosos y letras cajeadas',
   'Transfer',
   'Diseño'
];

const region = [
  "Andalucía",
  "Aragón",
  "Asturias",
  "Baleares",
  "Canarias",
  "Cantabria",
  "Castilla-La Mancha",
  "Castilla y León",
  "Cataluña",
  "Comunidad Valenciana",
  "Extremadura",
  "Galicia",
  "Madrid",
  "Murcia",
  "Navarra",
  "País Vasco",
  "La Rioja",
];

const provincia = [
  "Almería",
  "Cádiz",
  "Córdoba",
  "Granada",
  "Huelva",
  "Jaén",
  "Málaga",
  "Sevilla",
  "Huesca",
  "Teruel",
  "Zaragoza",
  "Oviedo",
  "Palma de Mallorca",
  "Santa Cruz de Tenerife",
  "Las Palmas de Gran Canaria",
  "Santander",
  "Albacete",
  "Ciudad Real",
  "Cuenca",
  "Guadalajara",
  "Toledo",
  "Ávila",
  "Burgos",
  "León",
  "Salamanca",
  "Segovia",
  "Soria",
  "Valladolid",
  "Zamora",
  "Barcelona",
  "Gerona",
  "Lérida",
  "Tarragona",
  "Alicante",
  "Castellón de la Plana",
  "Valencia",
  "La Coruña",
  "Lugo Orense",
  "Pontevedra",
  "Pamplona",
  "Bilbao",
  "San Sebastián",
  "Vitoria",
  "Logroño",
];



export default function Filtrado() {
  const [produccionSelection, setProduccionSelection] = React.useState([]);
  const [tecnologiaSelection, setTecnologiaSelection] = React.useState([]);
  const [especialidadSelection, setEspecialidadSelection] = React.useState([]);
  const [provinciaSelection, setProvinciaSelection] = React.useState([]);
  const [regionSelection, setRegionSelection] = React.useState([]);
  const [distribuidorSelection, setDistribuidorSelection] = React.useState([]);
  const [fabricanteSelection, setFabricanteSelection] = React.useState([]);
  const [tecnologiaColabSelection, setTecnologiaColabSelection] = React.useState([]);


  const handleProduccionChange = (event) => {
    setProduccionSelection(event.target.value);
  };

  const handleTecnologiaChange = (event) => {
    setTecnologiaSelection(event.target.value);
  };

  const handleEspecialidadChange = (event) => {
    setEspecialidadSelection(event.target.value);
  };

  const handleProvinciaChange = (event) => {
    setProvinciaSelection(event.target.value);
  };

  const handleRegionChange = (event) => {
    setRegionSelection(event.target.value);
  };

  const handleDistribuidorChange = (event) => {
    setDistribuidorSelection(event.target.value);
  };

  const handleFabricanteChange = (event) => {
    setFabricanteSelection(event.target.value);
  };

  const handleTecnologiaColabChange = (event) => {
    setTecnologiaColabSelection(event.target.value);
  };





  return (
    <>
    <h2 className='sector-actividad'>ASOCIADOS</h2>
      <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-checkbox-label" >PRODUCCIÓN</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={produccionSelection}
            onChange={handleProduccionChange}
            input={<OutlinedInput label="PRODUCCIÓN" />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {producción.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={produccionSelection.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-checkbox-label">TECNOLOGÍA DE IMPRESIÓN</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={tecnologiaSelection}
            onChange={handleTecnologiaChange}
            input={<OutlinedInput label="TECNOLOGÍA DE IMPRESIÓN" />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {tecnologíaDeImpresión.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={tecnologiaSelection.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-checkbox-label">ESPECIALIDAD</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={especialidadSelection}
            onChange={handleEspecialidadChange}
            input={<OutlinedInput label="ESPECIALIDAD" />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {especialidad.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={especialidadSelection.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <h2 className='sector-actividad'>SOCIO COLABORADORES</h2>
      <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-checkbox-label" >DISTRIBUIDOR DE: </InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={distribuidorSelection}
            onChange={handleDistribuidorChange}
            input={<OutlinedInput label="  const handleRegionChange = (event) => {
              setRegionSelection(event.target.value);
            };
          " />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {distribuidor.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={distribuidorSelection.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-checkbox-label">FABRICANTE DE: </InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={fabricanteSelection}
            onChange={handleFabricanteChange}
            input={<OutlinedInput label="FABRICANTE DE:" />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {fabricante.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={fabricanteSelection.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-checkbox-label">TECNOLOGÍA DE IMPRESIÓN</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={tecnologiaColabSelection}
            onChange={handleTecnologiaColabChange}
            input={<OutlinedInput label="TECNOLOGÍA DE IMPRESIÓN" />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {tecnologíaDeImpresiónColab.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={tecnologiaColabSelection.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <h2 className='localidad'>LOCALIDAD</h2>
   
      <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-checkbox-label">REGIÓN</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={regionSelection}
            onChange={handleRegionChange}
            input={<OutlinedInput label="REGIÓN" />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {region.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={regionSelection.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-checkbox-label" >PROVINCIA</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={provinciaSelection}
            onChange={handleProvinciaChange}
            input={<OutlinedInput label="PROVINCIA" />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {provincia.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={provinciaSelection.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      
    </>
  );
}
