import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, FormControl, FormLabel, Input, Select } from "@chakra-ui/react";

const ModalForm = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add New Entry</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Brand</FormLabel>
            <Input placeholder="Brand Name" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Type</FormLabel>
            <Select placeholder="Select type">
              <option>Cupboard Lock</option>
              <option>Drawer Lock</option>
            </Select>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Size</FormLabel>
            <Select placeholder="Select size">
              <option>20mm</option>
              <option>25mm</option>
              <option>30mm</option>
              <option>35mm</option>
              <option>40mm</option>
              <option>45mm</option>
            </Select>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Quantity</FormLabel>
            <Input placeholder="Quantity" type="number" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Color Finish</FormLabel>
            <Input placeholder="Color Finish" />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalForm;
