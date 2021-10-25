import { Button } from "@chakra-ui/button";
import { Heading } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import React, { useContext, useEffect, useRef } from "react";
import useWindowSize from "../../CustomHooks/UseWindows";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import NavBarButtons from "./NavBarButtons";
import DrawerButton from "./DrawerButton";
import LoadingBar from "react-top-loading-bar";
import Colors from "../../Constants/Colors";
import NavLoaderContext from "../../Context/NavLoaderContext";
import NavLoginButtonContext from "../../Context/NavLogInButtonContext";
import MenuButton from "./MenuButton"
export default function NavigationBar() {
  const getWindowSize = useWindowSize();
  const navLoginButtonContext = useContext(NavLoginButtonContext);
  return (
    <>
      <Flex backgroundColor= {Colors.black} {...styleProps.navBarContainer}>
        <Flex flex={1}>
          <Link href={navLoginButtonContext.isLoggedIn ? "/dashboard" : "/"}>
            <Heading cursor="pointer" color={Colors.white} fontSize= "50">
              TYTO
            </Heading>
          </Link>
        </Flex>
        {getWindowSize.width < 1500 ? <DrawerButton /> : <MenuButton />}
      </Flex>
    </>
  );
}

const styleProps = {
  navBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: "2vh",
  },
};
