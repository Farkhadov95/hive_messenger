import { useRef } from "react";
import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Input,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import { HiMenu } from "react-icons/hi";

const NavDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      <IconButton
        ref={btnRef}
        onClick={onOpen}
        variant={"ghost"}
        padding={1}
        width={"30px"}
        height={"30px"}
        aria-label={"Menu"}
      >
        <Icon as={HiMenu} />
      </IconButton>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        initialFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavDrawer;
