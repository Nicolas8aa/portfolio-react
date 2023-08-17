import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

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
  const headerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      // ? scroll to element plus 70px to account for the fixed header only if scrolling up

      const y =
        scrollY > element.offsetTop
          ? element.offsetTop - 70
          : element.offsetTop;

      window.scrollTo({ top: y, behavior: "smooth" });

      // ? alternative method does not account for the fixed header

      // element.scrollIntoView({
      //   behavior: "smooth",
      //   block: "start",
      // });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = headerRef.current;
      setScrollY((prevScrollY) => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > prevScrollY) {
          // ? scrolling down
          header.style.transform = "translateY(-100%)";
          return currentScrollY;
        }
        // ? scrolling up
        header.style.transform = "translateY(0)";
        return currentScrollY;
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      zIndex={1}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={4}>
              {socials.map((social) => (
                <a href={social.url} key={social.url} target="_blank">
                  <FontAwesomeIcon icon={social.icon} size="lg" />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="#home" onClick={handleClick("home")}>
                Me
              </a>
              <a href="#projects" onClick={handleClick("projects")}>
                Projects
              </a>
              <a href="#contact-me" onClick={handleClick("contactme")}>
                Contact
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
