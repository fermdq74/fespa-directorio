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
  <Card id="empresa" style={{ maxWidth: '540px' }} onClick={handleOpenModal}>
    {empresa.Logo && <Card.Img src={empresa.Logo} alt="..." />}
    <Card.Body className="card-body">
      {empresa.Name && <Card.Title className="card-title">{empresa.Name}</Card.Title>}
      <Card.Text className="card-text">
        {empresa.Region && empresa.Provincia && (
          <><img className="ubicacion" src="/icon/ubicacion.png" alt="ubicacion" />{empresa.Region}. {empresa.Provincia}</>
        )}
      </Card.Text>
      <Card.Text className="card-text">
        {empresa.Telefono && (
          <><img className="contacto" src="/icon/contacto.png" alt="contacto" />{empresa.Telefono}</>
        )}
      </Card.Text>
    </Card.Body>
  </Card>

  <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={showModal} onHide={handleCloseModal}>
    <Modal.Body>
      <Modal.Header closeButton></Modal.Header>
      <div id="modal">
        {empresa.Logo && (
          <div id="modal-img" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Card.Img src={empresa.Logo} alt="..." />
          </div>
        )}
        <div id="modal-info">
          {empresa.Name && <h4>{empresa.Name}</h4>}
          {empresa.Region && empresa.Provincia && (
            <div style={{ display: 'flex' }} id="ubicacion">
              <img className="ubicacion" src="/icon/ubicacion.png" alt="ubicacion" />
              <p> {empresa.Region}. {empresa.Provincia}</p>
            </div>
          )}
          {empresa.Telefono && (
            <div style={{ display: 'flex' }} id="contacto">
              <img className="contacto" src="/icon/contacto.png" alt="contacto" />
              <p>{empresa.Telefono}</p>
            </div>
          )}
          {empresa.Email && (
            <div style={{ display: 'flex' }} id="correo">
              <img className="correo" id="correo" src="/icon/correo.png" alt="contacto" />
              <p>{empresa.Email}</p>
            </div>
          )}
            {empresa.Produccion && (
            <p><span>Producción:</span> {empresa.Produccion}</p>
          )}
          {empresa.Tecnologia && (
            <p><span>Tecnología:</span> {empresa.Tecnologia}</p>
          )}
          {empresa.Especialidad && (
            <p><span>Especialidad:</span> {empresa.Especialidad}</p>
          )}
          {empresa.Website && (
            <p><span>Website:</span><a href={empresa.Website}> {empresa.Website}</a></p>
          )}
           {empresa.Direccion && (
            <p><span>Dirección:</span>{empresa.Direccion}</p>
          )}
           {empresa.Pais && (
        <p><span>País:</span> {empresa.Pais}</p>
          )}
        </div>
      </div>
      {empresa.Descripcion && (
        <p className="descripcion"><span>Descripción:</span> {empresa.Descripcion}</p>
      )}
    </Modal.Body>
  </Modal>
</>
  );
}
