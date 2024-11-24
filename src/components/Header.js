import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faMedium, faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link, VStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const prevScrollY = useRef(0);
  const [headerVisible, setHeaderVisible] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > prevScrollY.current) {
      setHeaderVisible(false); // Hide
    } else {
      setHeaderVisible(true); // Show 
    }
    prevScrollY.current = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={headerVisible ? "translateY(0)" : "translateY(-200px)"}
      transition="transform 0.6s ease-in-out"
      backgroundColor="#18181b"
      zIndex={10}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={4}
          py={4}
          justifyContent="space-between"
          alignItems="center"
          direction={{ base: "column", md: "row" }}
        >
          {/* Socials */}
          <nav>
            <HStack spacing={4} justify="center" wrap="wrap">
              {socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{ color: "blue.400", transform: "scale(1.1)" }}
                  style={{ transition: "color 0.2s, transform 0.2s" }}
                >
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </Link>
              ))}
            </HStack>
          </nav>

          {/* Navigation Links */}
          <nav>
            <HStack spacing={8} display={{ base: "none", md: "flex" }}>
              <Link
                href="#projects-section"
                onClick={handleClick("projects")}
                _hover={{ color: "blue.400" }}
                cursor="pointer"
              >
                Projects
              </Link>
              <Link
                href="#contactme-section"
                onClick={handleClick("contactme")}
                _hover={{ color: "blue.400" }}
                cursor="pointer"
              >
                Contact Me
              </Link>
            </HStack>
            {/* Mobile Navbar Toggle */}
            <VStack display={{ base: "flex", md: "none" }} align="center" mt={4}>
              <Link
                href="#projects-section"
                onClick={handleClick("projects")}
                _hover={{ color: "blue.400" }}
                cursor="pointer"
              >
                Projects
              </Link>
              <Link
                href="#contactme-section"
                onClick={handleClick("contactme")}
                _hover={{ color: "blue.400" }}
                cursor="pointer"
              >
                Contact Me
              </Link>
            </VStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
