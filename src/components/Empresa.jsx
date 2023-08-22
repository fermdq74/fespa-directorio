import Card from "react-bootstrap/Card";
import "./Empresa.css";

export default function Empresa({ empresa }) {
  return (
    <Card id="empresa" style={{ maxWidth: "540px" }}>
      <Card.Img src={empresa.Logo} alt="..." />
      <Card.Body className="card-body">
        <Card.Title className="card-title">{empresa.Name}</Card.Title>
        <Card.Text className="card-text">
          <img className="contacto" src="/icon/ubicacion.png" alt="contacto" />
          {empresa.Region}. {empresa.Provincia}
        </Card.Text>
        <Card.Text className="card-text">
          <img className="contacto" src="/icon/contacto.png" alt="contacto" />
          {empresa.Telefono}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
