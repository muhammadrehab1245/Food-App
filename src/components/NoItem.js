import { Box, Grid, Image, Text } from "@chakra-ui/react";
import Nofoodimg from "../images/nofood.jpg";
import React from "react";

export const NoItem = () => {
  return (
    <Grid gap={5} justifyContent="center" w="93vw" m="auto" alignItems="center">
      <Box pt={15} boxSize="100%">
        <Image src={Nofoodimg} alt="Dan Abramov" />
      </Box>
      <Text fontSize="xl" textAlign="center">
        No Food Items Available
      </Text>
    </Grid>
  );
};