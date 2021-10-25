import { ChakraProvider } from "@chakra-ui/react";
import NavigationBar from "../src/Components/dashboard/NavigationBar";
import { NavLoginButtonContextProvider } from "../src/Context/NavLogInButtonContext";
import { UserDataContextProvider } from "../src/Context/UserDataContext";
import { ClientProvider } from "../src/Context/ClientContext"
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ClientProvider>
      <NavLoginButtonContextProvider>
        <UserDataContextProvider>
          <Component {...pageProps} />
        </UserDataContextProvider>
      </NavLoginButtonContextProvider>
      </ClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
