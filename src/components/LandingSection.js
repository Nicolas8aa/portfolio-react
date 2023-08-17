import React from "react";
import { Avatar, Box, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Nicolas!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.

const profileImg =
  "https://media.licdn.com/dms/image/D4E03AQGN4K5ji0l-SQ/profile-displayphoto-shrink_200_200/0/1691891661663?e=1697673600&v=beta&t=pSytsFJe9NPNhBUPTr_ixWGPj7szixIzGUQYBJs9VpU";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Heading as="h1" size="4xl" color="white" id="home-section">
      {greeting}
    </Heading>
    <VStack spacing={4} mt={8}>
      <Avatar size="2xl" name="Nicolas" src={profileImg} alt="Nicolas" />
      <Heading as="h2" size="xl" color="white">
        {bio1}
      </Heading>
      <Heading as="h2" size="xl" color="white">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
