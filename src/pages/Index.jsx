import { Box, Button, Heading, VStack, HStack, Divider, useDisclosure } from "@chakra-ui/react";
import { FaPlus, FaPencilAlt, FaTrash, FaPrint } from "react-icons/fa";
import ModalForm from "../components/ModalForm";

const ActionButtons = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HStack spacing={3}>
        <Button leftIcon={<FaPlus />} colorScheme="green" onClick={onOpen}>
          Add New
        </Button>
        <Button leftIcon={<FaPencilAlt />} colorScheme="blue">
          Update
        </Button>
        <Button leftIcon={<FaTrash />} colorScheme="red">
          Delete
        </Button>
        <Button leftIcon={<FaPrint />} colorScheme="purple">
          Print
        </Button>
      </HStack>
      <ModalForm isOpen={isOpen} onClose={onClose} />
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
