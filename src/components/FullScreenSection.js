import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
    backgroundColor={boxProps.backgroundColor}
    color={isDarkBackground ? "white" : "black"}
  >
    <VStack
      maxWidth={{ base: "100%", md: "1280px" }} 
      width="100vw" 
      minHeight="100vh" 
      {...boxProps}
    >
      {children}
    </VStack>
  </VStack>
  );
};

export default FullScreenSection;
