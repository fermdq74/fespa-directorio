import Form from 'react-bootstrap/Form';
import './Buscador.css';

export default function Buscador({ filtro, setFiltro }) {
    return (
      <div className='buscador'>
      <Form>
         <Form.Group id='buscador' className="mb-3">
         <img className='lupa' src="/icon/buscador.png"/>
            <Form.Control
              id="empresa"
              type="text"
              placeholder="Buscar"
              required
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
            />
        </Form.Group> 
      </Form>
    </div>
    );
  }