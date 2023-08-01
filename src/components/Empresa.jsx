import Card from "react-bootstrap/Card";
import "./Empresa.css";

export default function Empresa({ empresa }) {
  return (
    <Card id="empresa" style={{ maxWidth: "540px" }}>
      <Card.Img src={empresa.img} alt="..." />
      <Card.Body className="card-body">
        <Card.Title className="card-title">{empresa.title}</Card.Title>
        <Card.Text className="card-text">
          <img className="contacto" src="/icon/ubicacion.png" alt="contacto" />
          {empresa.ubicacion}
        </Card.Text>
        <Card.Text className="card-text">
          <img className="contacto" src="/icon/contacto.png" alt="contacto" />
          {empresa.tel}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
