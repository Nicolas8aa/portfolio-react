import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <VStack
      borderRadius="lg"
      w="100%"
      maxW="sm"
      textAlign="left"
      alignItems="flex-start"
      bg="white"
      _hover={{
        boxShadow: "lg",
      }}
    >
      <Image
        src={imageSrc}
        alt={title}
        w="100%"
        maxW="sm"
        h="auto"
        borderRadius="lg"
      />
      <Box p={4} color="black">
        <Heading as="h3" size="lg">
          {title}
        </Heading>
        <Text>{description}</Text>
        <HStack spacing={2} mt={2}>
          <Text fontWeight="bold">Learn more</Text>
          <FontAwesomeIcon size="1x" icon={faArrowRight} />
        </HStack>
      </Box>
    </VStack>
  );
};

export default Card;
