import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "React Space",
    description: "Handy tool belt to create amazing AR components in a React app.",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "React Infinite Scroll",
    description: "A scrollable bottom sheet with virtualisation support.",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Photo Gallery",
    description: "A one-stop shop for photographers to share and monetize their photos.",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Event planner",
    description: "A mobile app for discovering unique events and activities.",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#F7FAFC"
      isDarkBackground
      p={{ base: 4, md: 8 }}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading
        as="h1"
        id="projects-section"
        color="#2A4365"
        className="fade-in-up"
        style={{ animationDelay: "0.2s" }}
        fontSize={{ base: "2xl", md: "4xl" }}
      >
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gridGap={8}
      >
        {projects.map((project, index) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            className="fade-in-up"
            style={{ animationDelay: `${0.4 + index * 0.2}s` }}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
