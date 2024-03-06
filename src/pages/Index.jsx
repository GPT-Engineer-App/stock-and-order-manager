import { Box, Button, Heading, VStack, HStack, Divider, useDisclosure } from "@chakra-ui/react";
import { FaPlus, FaPencilAlt, FaTrash, FaPrint } from "react-icons/fa";
import ModalForm from "../components/ModalForm";

import SearchFilter from "../components/SearchFilter";

const ActionButtons = () => {
  const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure();
  const { isOpen: isSearchOpen, onOpen: onSearchOpen, onClose: onSearchClose } = useDisclosure();

  return (
    <>
      <HStack spacing={3}>
        <Button leftIcon={<FaPlus />} colorScheme="green" onClick={onModalOpen}>
          Add New
        </Button>
        <Button leftIcon={<FaPencilAlt />} colorScheme="blue" onClick={onSearchOpen}>
          Update
        </Button>
        <Button leftIcon={<FaTrash />} colorScheme="red" onClick={onSearchOpen}>
          Delete
        </Button>
        <Button leftIcon={<FaPrint />} colorScheme="purple" onClick={onSearchOpen}>
          Print
        </Button>
      </HStack>
      <ModalForm isOpen={isModalOpen} onClose={onModalClose} />
      <SearchFilter isOpen={isSearchOpen} onClose={onSearchClose} />
    </>
  );
};

const PageLayout = ({ title, children }) => (
  <Box p={5}>
    <Heading mb={4}>{title}</Heading>
    <Divider mb={4} />
    {children}
  </Box>
);

// The duplicated ActionButtons declaration has been removed correctly.

const Orders = () => (
  <PageLayout title="Orders">
    <ActionButtons />
    {/* Orders content */}
  </PageLayout>
);

const Stock = () => (
  <PageLayout title="Stock">
    <ActionButtons />
    {/* Stock content */}
  </PageLayout>
);

const Production = () => (
  <PageLayout title="Production">
    <ActionButtons />
    {/* Production content */}
  </PageLayout>
);

const Dispatch = () => (
  <PageLayout title="Dispatch">
    <ActionButtons />
    {/* Dispatch content */}
  </PageLayout>
);

const Index = () => {
  return (
    <VStack spacing={5}>
      <Orders />
      <Stock />
      <Production />
      <Dispatch />
    </VStack>
  );
};

export default Index;
