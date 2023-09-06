import Card from "react-bootstrap/Card";
import "./Empresa.css";
import { useState } from 'react';
import { Modal } from 'react-bootstrap'; 

export default function Empresa({ empresa }) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
<Card id="empresa" style={{ maxWidth: '540px'}} onClick={handleOpenModal} >
  <Card.Img src={empresa.Logo} alt="..." />
  <Card.Body className="card-body">
    <Card.Title className="card-title">{empresa.Name}</Card.Title>
    {empresa.Region && empresa.Provincia && (
      <Card.Text className="card-text">
        <img className="ubicacion" src="/icon/ubicacion.png" alt="ubicacion" />
        {empresa.Region}. {empresa.Provincia}
      </Card.Text>
    )}
    {empresa.Telefono && (
      <Card.Text className="card-text">
        <img className="contacto" src="/icon/contacto.png" alt="contacto" />
        {empresa.Telefono}
      </Card.Text>
    )}
  </Card.Body>
</Card>


      <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={showModal} onHide={handleCloseModal} dialogClassName="custom-modal">
  <Modal.Body>
    <Modal.Header closeButton></Modal.Header>
    <div id="modal">
      <div id="modal-img">
        <Card.Img src={empresa.Logo} alt="..." />
      </div>
      <div id="modal-info">
        <h4>{empresa.Name}</h4>
        {empresa.Region && empresa.Provincia && (
          <div style={{ display: 'flex' }} id="ubicacion">
            <img className="ubicacion" src="/icon/ubicacion.png" alt="ubicacion" />
            <p>{empresa.Region}. {empresa.Provincia}</p>
          </div>
        )}
        {empresa.Telefono && (
          <div style={{ display: 'flex' }} id="contacto">
            <img className="contacto" src="/icon/contacto.png" alt="contacto" />
            <p>{empresa.Telefono}</p>
          </div>
        )}
        <div style={{ display: 'flex' }} id="correo">
          <img className="correo" id="correo" src="/icon/correo.png" alt="contacto" />
          <p>{empresa.Email}</p>
        </div>
        {empresa.Produccion && <p>Producción: {empresa.Produccion}</p>}
        {empresa.Tecnologia && <p>Tecnología: {empresa.Tecnologia}</p>}
        {empresa.Especialidad && <p>Especialidad: {empresa.Especialidad}</p>}
      </div>
    </div>
  </Modal.Body>
</Modal>

    </>
  );
}
