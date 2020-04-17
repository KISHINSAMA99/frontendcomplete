import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import NavP from './NavP';

const BModel = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <React.Fragment>
      <Button color="danger" onClick={toggle}>{buttonLabel} Add </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Ingrese Gasto/Ingresos</ModalHeader>
        <ModalBody>
        <NavP />
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
}

export default BModel;