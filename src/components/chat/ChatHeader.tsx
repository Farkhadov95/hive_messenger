import {
  Avatar,
  HStack,
  Box,
  Text,
  useMediaQuery,
  IconButton,
} from "@chakra-ui/react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useChatStore } from "../../store/chatStore";
import HeaderMenu from "./HeaderMenu";
import HeaderUsers from "./HeaderUsers";
import { useNavigate } from "react-router-dom";

const ChatHeader = () => {
  const currentChat = useChatStore((state) => state.currentChat);
  const [isMobile] = useMediaQuery("(max-width: 767px)");
  const navigate = useNavigate();

  return (
    <HStack
      padding={2}
      bgColor={"white"}
      justify={"space-between"}
      borderRadius={"0 0 10px 10px"}
    >
      {isMobile && (
        <IconButton
          aria-label={"return"}
          icon={<IoMdArrowRoundBack />}
          color={"orange"}
          fontSize={"24px"}
          onClick={() => navigate(-1)}
        />
      )}
      <HStack textColor={"black"} gap={3}>
        <Avatar />
        <Box lineHeight={"1.5em"}>
          <Text fontWeight={"bold"}>{currentChat?.chatName}</Text>
          <HeaderUsers />
        </Box>
      </HStack>
      <HeaderMenu />
    </HStack>
  );
};

export default ChatHeader;
