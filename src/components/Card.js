import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      bg="white"
      maxW="sm"
      transition="transform 0.2s, box-shadow 0.2s"
      _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
      cursor="pointer"
    >
      {/* Image Section */}
      <Image src={imageSrc} alt={title} objectFit="cover" w="100%" h="200px" />

      {/* Content Section */}
      <VStack align="start" p={4} spacing={3} >
        <Heading as="h3" size="md" noOfLines={1} color="#2A4365">
          {title}
        </Heading>
        <Text color="gray.600" noOfLines={2}>
          {description}
        </Text>
        <HStack>
          <Text fontWeight="bold" color="#FF6F61" >
            See More
          </Text >
          <FontAwesomeIcon icon={faArrowRight} size="1x" color="#FF6F61" />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;
