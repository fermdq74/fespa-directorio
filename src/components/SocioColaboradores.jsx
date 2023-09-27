// import * as React from 'react';
import './Filtrado.css';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import ListItemText from '@mui/material/ListItemText';
// import Select from '@mui/material/Select';
// import Checkbox from '@mui/material/Checkbox';
import Localidad from './Localidad';
// import FilterContext from '../context/FilterContext';
// import { useContext } from 'react';

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

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


export default function SocioColaboradores(){

  // const [distribuidorSelection, setDistribuidorSelection] = React.useState([]);
  // const [fabricanteSelection, setFabricanteSelection] = React.useState([]);
  // const [tecnologiaColabSelection, setTecnologiaColabSelection] = React.useState([]);


  // const handleDistribuidorChange = (event) => {
  //   setDistribuidorSelection(event.target.value);
  //   addFilterItem(event.target.value);
  // };

  // const handleFabricanteChange = (event) => {
  //   setFabricanteSelection(event.target.value);
  //   addFilterItem(event.target.value);
  // };

  // const handleTecnologiaColabChange = (event) => {
  //   setTecnologiaColabSelection(event.target.value);
  //   addFilterItem(event.target.value);
  // };

  // const { addFilterItem } = useContext(FilterContext);

  return (
    <>
      <div id="socio-colab">
        <h2 className="sector-actividad">SOCIO COLABORADORES</h2>
        <div>
        <div>
          <form>
            <div className="multiselect">
              <div className="selectBox">
                <select>
                  <option>DISTRIBUIDOR DE: </option>
                </select>
                <div className="overSelect"></div>
              </div>
              <div id="checkboxes">
                {distribuidor.map((name) => (
                  <label key={name} value={name} data-filter={name}>
                    <input type="checkbox" /> {name}
                  </label>
                ))}
              </div>
            </div>
          </form>
          <p id="filter-display"></p>
          <div id="container"></div>
        </div>
        </div>

        <div>
        <div>
          <form>
            <div className="multiselect">
              <div className="selectBox">
                <select>
                  <option>FABRICANTE DE: </option>
                </select>
                <div className="overSelect"></div>
              </div>
              <div id="checkboxes">
                {fabricante.map((name) => (
                  <label key={name} value={name}  data-filter={name}>
                    <input type="checkbox" /> {name}
                  </label>
                ))}
              </div>
            </div>
          </form>
          <p id="filter-display"></p>
          <div id="container"></div>
        </div>
        </div>

        <div>
        <div>
          <form>
            <div className="multiselect">
              <div className="selectBox">
                <select>
                  <option>TECNOLOGÍA DE IMPRESIÓN</option>
                </select>
                <div className="overSelect"></div>
              </div>
              <div id="checkboxes">
                {tecnologíaDeImpresiónColab.map((name) => (
                  <label key={name} value={name} data-filter={name} >
                    <input type="checkbox" /> {name}
                  </label>
                ))}
              </div>
            </div>
          </form>
          <p id="filter-display"></p>
          <div id="container"></div>
        </div>
        </div>
      </div>

      <div id="localidad">
        <Localidad />
      </div>
    </>
  );



}

