import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <Grid
      templateAreas={{ base: `"nav" "aside"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>
      <GridItem area={"aside"} bg={"gold"}>
        Aside
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
