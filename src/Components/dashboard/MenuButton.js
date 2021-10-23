import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Flex } from "@chakra-ui/layout";
import {IconButton, Image} from "@chakra-ui/react"
import {SettingsIcon } from "@chakra-ui/icons"
import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@chakra-ui/modal";
import React, { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { Divider } from "@chakra-ui/layout";
import Colors from "../../Constants/Colors";
import NavLoginButtonContext from "../../Context/NavLogInButtonContext";
import Router from "next/router";
import LogOutDialog from "../dashboard/LogOutDialog";
export default function MenuButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const navLoginButtonContext = useContext(NavLoginButtonContext);

  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);
  const onLogoutDialogClose = () => setIsLogoutDialogOpen(false);
  return (
    <Flex flex={1} flexDirection="row" justifyContent="flex-end">
      <Button
        ref={btnRef}
        variant="ghost"
        color="white"
        colorScheme="blackAlpha"
        onClick={onOpen}
      >
        <GiHamburgerMenu color={Colors.white} size={30.0} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent {...styleProps.drawerBody}>
          <DrawerCloseButton color={Colors.white} />
          <DrawerHeader color={Colors.white} fontSize="50">MENU</DrawerHeader>
          <DrawerBody >
            <Flex flexDirection="column" justifyContent="stretch" {...styleProps.drawerButtons}>
            <Flex flexDirection="row" justifyContent="stretch" >
            <Button
              {...styleProps.buttons}
              {...styleProps.buttons}
              onClick={() => {
                onClose();
                Router.push("/videoConference");
              }}
              >
                <Image boxSize ="150" src="/calendar.svg"/>
              </Button>

              <Button
               {...styleProps.buttons}
                
              >
               <Image boxSize ="150" src="/quiz.svg"/>
              </Button>

              <Button {...styleProps.buttons} >
              <Image boxSize ="150" src="/addquiz.svg"/>
              </Button>

              <Button
                {...styleProps.buttons}
                > <Image boxSize ="150" src="/account.svg"/> </Button>
              </Flex>

              <Flex flexDirection="row" justifyContent="stretch" mt = "5vh">
            
              <Button
              {...styleProps.buttons}
                >
                <Image boxSize ="150" src="/settings.svg"/>
              </Button>

              <Button
              {...styleProps.buttons}
                onClick={() => {
                  onClose();
                  navLoginButtonContext.isLoggedIn
                    ? setIsLogoutDialogOpen(true)
                    : Router.push("/login");
                }}
              >         <Image boxSize ="150" src="/logout.svg"/>
                {/* {navLoginButtonContext.isLoggedIn ? "LOG OUT" : "LOG IN"} */}
              </Button>
              </Flex>  
            </Flex>
          </DrawerBody>
          <DrawerFooter>THE FOOTER</DrawerFooter>
        </DrawerContent>
      </Drawer>
      <LogOutDialog isOpen={isLogoutDialogOpen} onClose={onLogoutDialogClose} />
    </Flex>
  );
}

const styleProps = {
  drawerButtons: {
    variant: "ghost",
    color: Colors.green,
    colorScheme: "blackAlpha",
    justifyContent: "flex-start",
    marginBottom: "5",
  },
  drawerBody: {
      borderRadius: "lg",
      paddingStart: "5vh",
      bg: Colors.black,
  },
  buttons: {
    variant:"solid",
    shadow:"5g",
    backgroundColor: Colors.grey,
    color: Colors.white,
    colorScheme: "cyan",
    w: "28vh",
    h: "28vh",
    ml: "15vh"
  }
};
