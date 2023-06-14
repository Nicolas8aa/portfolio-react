import React from "react";
import { render } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import { AlertProvider } from "./context/alertContext";

const AllTheProviders = ({ children }) => {
  return (
    <ChakraProvider>
      <AlertProvider>{children}</AlertProvider>
    </ChakraProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
