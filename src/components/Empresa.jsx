import Card from "react-bootstrap/Card";
import "./Empresa.css";


import { useState } from 'react';
import { Modal } from 'react-bootstrap'; // Asumiendo que estás utilizando react-bootstrap

export default function Empresa({ empresa }) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Card id="empresa" style={{ maxWidth: '540px' }} onClick={handleOpenModal}>
        <Card.Img src={empresa.Logo} alt="..." />
        <Card.Body className="card-body">
          <Card.Title className="card-title">{empresa.Name}</Card.Title>
          <Card.Text className="card-text">
            <img className="ubicacion" src="/icon/ubicacion.png" alt="ubicacion" />
            {empresa.Region}. {empresa.Provincia}
          </Card.Text>
          <Card.Text className="card-text">
            <img className="contacto" src="/icon/contacto.png" alt="contacto" />
            {empresa.Telefono}
          </Card.Text>
        </Card.Body>
      </Card>

      <Modal size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered show={showModal} onHide={handleCloseModal}>

        <Modal.Body>
        <Modal.Header closeButton>
        </Modal.Header>
          <div id="modal">
            <div id="modal-img">
            <Card.Img src={empresa.Logo} alt="..." />
            </div>
            <div id="modal-info">
              <h4>{empresa.Name}</h4>
            <div style={{ display: 'flex' }}  id="ubicacion"><img className="ubicacion" src="/icon/ubicacion.png" alt="ubicacion" />          
              <p>{empresa.Region}. {empresa.Provincia}</p></div>

              <div style={{ display: 'flex' }}  id="contacto"><img className="contacto" src="/icon/contacto.png" alt="contacto" />        
            <p>{empresa.Telefono}</p></div>

            <div style={{ display: 'flex' }}  id="correo"><img className="correo" id="correo" src="/icon/correo.png" alt="contacto" />        
            <p>{empresa.Email}</p></div>
            
              <p>Tecnología: {empresa.Tecnologia}</p>
              <p>Especialidad: {empresa.Especialidad}</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
