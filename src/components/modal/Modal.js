import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function MyVerticallyCenteredModal({ handleClose, handleClick, title, children, buttonTextOk, show }) {
  return (
    <Modal
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClick} variant='success'>{buttonTextOk}</Button>
        <Button onClick={handleClose} variant='secondary'>Annuler</Button>
      </Modal.Footer>
    </Modal>
  );
}
