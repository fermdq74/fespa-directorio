import Form from 'react-bootstrap/Form';
import './Buscador.css';

export default function Buscador({ filtro, setFiltro }) {
  return (
    <div className='buscador'>
      <Form>
        <Form.Group id='buscador' className="mb-3">
          <img className='lupa' src="/icon/buscador.png" alt="Icono de búsqueda"/>
          <Form.Control
            id="empresa"
            type="text"
            placeholder="Escriba aquí nombre de empresa, ciudad o servicio de comunicación visual que necesita"
            required
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            title="Escriba aquí nombre de empresa, ciudad o servicio de comunicación visual que necesita"
          />
        </Form.Group>
      </Form>
    </div>
  );
}
