import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import * as React from "react";

const region = [
  "Andalucía",
  "Aragón",
  "Asturias",
  "Baleares",
  "Biskaia",
  "Canarias",
  "Cantabria",
  "Castilla-La Mancha",
  "Castilla y León",
  "Cataluña",
  "Comunidad Valenciana",
  "Extremadura",
  "Galicia",
  "Gipuzkoa",
  "Madrid",
  "Murcia",
  "Navarra",
  "País Vasco",
  "Salamanca",
  "La Rioja",
  "Lugo"
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

export default function Localidad() {
  const [provinciaSelection, setProvinciaSelection] = React.useState([]);
  const [regionSelection, setRegionSelection] = React.useState([]);

  const handleProvinciaChange = (event) => {
    setProvinciaSelection(event.target.value);
  };

  const handleRegionChange = (event) => {
    setRegionSelection(event.target.value);
  };

  return (
    <div>
      <div id="localidad">
        <h2 className="localidad">UBICACIÓN</h2>

        <div>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-checkbox-label">COMUNIDAD AUTÓNOMA</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={regionSelection}
              onChange={handleRegionChange}
              input={<OutlinedInput label="REGIÓN" />}
              renderValue={(selected) => selected.join(", ")}
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
            <InputLabel id="demo-multiple-checkbox-label">PROVINCIA</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={provinciaSelection}
              onChange={handleProvinciaChange}
              input={<OutlinedInput label="PROVINCIA" />}
              renderValue={(selected) => selected.join(", ")}
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
      </div>
    </div>
  );
}
