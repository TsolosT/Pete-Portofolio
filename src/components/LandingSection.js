import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack align="center" spacing={4} px={4}>
      <Avatar
        size="xl"
        src="https://i.pravatar.cc/150?img=7"
        className="scale-in"
        style={{ animationDelay: "0.2s" }}
      />
      <Heading
        as="h2"
        size={{ base: "md", md: "lg" }}
        className="fade-in-up"
        style={{ animationDelay: "0.4s" }}
      >
        Hello, I am Pete!
      </Heading>
      <Heading
        as="h1"
        size={{ base: "xl", md: "4xl" }}
        className="fade-in-up"
        style={{ animationDelay: "0.9s" }}
      >
        A frontend developer
      </Heading>
      <Heading
        as="h1"
        size={{ base: "xl", md: "4xl" }}
        className="fade-in-up"
        style={{ animationDelay: "1.1s" }}
      >
        specialised in React
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
