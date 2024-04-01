import React from "react";
// import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container'

const AddModal = ({show, handleClose, selected, handleSubmit, onChange,  doctorName}) => {


  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{doctorName?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Patient Name:</Form.Label>
              <Form.Control type="text"  onChange={onChange} name="patient"
              placeholder="Enter your full name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" name="date" onChange={onChange} placeholder="Password" />
            </Form.Group>
            <Container className="d-flex gap-3 justify-content-center">
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
              <Button variant="success" onClick={handleSubmit}>
                Save
              </Button>
            </Container>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default AddModal;
