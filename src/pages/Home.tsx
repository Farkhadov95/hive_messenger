import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "../components/navbar/Navbar";
import ChatList from "../components/chat-list/ChatList";

const Home = () => {
  return (
    <Grid
      templateAreas={{ base: `"nav" "aside"`, lg: `"nav nav" "aside main"` }}
      gridTemplateColumns={{ base: "1fr", lg: "0.5fr 1fr" }}
    >
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>
      <GridItem area={"aside"}>
        <ChatList />
      </GridItem>
      <Show above="lg">
        <GridItem area={"main"} bg={"dodgerblue"}>
          Main
        </GridItem>
      </Show>
    </Grid>
  );
};

export default Home;
