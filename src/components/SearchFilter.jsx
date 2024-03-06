import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, FormControl, FormLabel, Input, Select } from "@chakra-ui/react";

const SearchFilter = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Search and Filter</ModalHeader>
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
            <FormLabel>Finish</FormLabel>
            <Select placeholder="Select finish">
              <option>SS</option>
              <option>Gray</option>
              <option>PVD</option>
              <option>PVD Gold</option>
              <option>Rose Gold</option>
              <option>AB</option>
              {}
            </Select>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Date Range</FormLabel>
            <Input type="date" />
            <FormLabel mt={2}>to</FormLabel>
            <Input mt={1} type="date" />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3}>
            Search
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SearchFilter;
