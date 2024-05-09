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
  Icon,
  Text,
  IconButton,
  Heading,
  Box,
} from "@chakra-ui/react";
import { HiMenu } from "react-icons/hi";
import { useUserStore } from "../../store/userStore";
import { useNavigate } from "react-router-dom";
import { routes } from "../../router/routes";
import ColorModeSwitch from "../ColorModeSwitch";

const NavDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const currentUser = useUserStore((state) => state.currentUser);
  const setCurrentUser = useUserStore((state) => state.setCurrentUser);
  const btnRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("X-Auth-Token");
    setCurrentUser(null);
    onClose();
    navigate(routes.login);
  };

  return (
    <>
      <IconButton
        ref={btnRef}
        onClick={onOpen}
        variant={"outline"}
        border={"1px solid"}
        padding={0}
        width={"40px"}
        height={"40px"}
        aria-label={"Menu"}
      >
        <Icon as={HiMenu} height={"25px"} width={"20px"} />
      </IconButton>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        initialFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Heading as={"h2"} fontSize={"1.5rem"}>
              {currentUser?.username}
            </Heading>
            <Box mt={2}>
              <Text fontSize={"0.8rem"} color={"gray.400"}>
                Email: {currentUser?.email}
              </Text>
              <Text fontSize={"0.8rem"} color={"gray.400"}>
                ID: {currentUser?._id}
              </Text>
            </Box>
          </DrawerHeader>

          <DrawerBody></DrawerBody>

          <DrawerFooter justifyContent={"space-between"}>
            <ColorModeSwitch />
            <Box>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button
                variant="outline"
                colorScheme="red"
                onClick={handleLogout}
              >
                Log out
              </Button>
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavDrawer;
