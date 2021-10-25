import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Flex } from "@chakra-ui/layout";
import {Image, Box, Text } from "@chakra-ui/react"
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
import { useUtil } from "../../Context/UserDataContext";
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
            <Flex flexDirection="column" justifyContent="stretch" >
            <Flex flexDirection="row" justifyContent="flex-start"{...styleProps.drawerButtons} >


            {/* HOME */}
            <Box {...styleProps.buttonBoxes}>
            <Button
              {...styleProps.buttons}
              onClick={() => {
                onClose();
                Router.push("/dashboard");
              }}
              >
                <Image boxSize ="150" src="/home.svg"/>
              </Button>
              <Text textAlign ="center" fontSize="2xl">HOME</Text>
              </Box>

            {/* CLASS SCHEDULE */}
            <Box {...styleProps.buttonBoxes}>
            <Button
              {...styleProps.buttons}
              onClick={() => {
                onClose();
                Router.push("/videoConference");
              }}
              >
                <Image boxSize ="150" src="/calendar.svg"/>
              </Button>
              <Text textAlign ="center" fontSize="2xl">CLASS SCHEDULE</Text>
              </Box>
              
              
              {/* QUIZZES */}
              <Box {...styleProps.buttonBoxes}>
              <Button
               {...styleProps.buttons}>
               <Image boxSize ="150" src="/quiz.svg"/>
              </Button>
              <Text textAlign ="center" fontSize="2xl">QUIZZES</Text>
              </Box>

              {/* CREATE QUIZ */}
              <Box {...styleProps.buttonBoxes}>
                <Button {...styleProps.buttons}>
                  <Image boxSize ="150" src="/addquiz.svg"/>
                </Button>
                <Text textAlign ="center" fontSize="2xl">CREATE QUIZ</Text>
              </Box>

           
              
              {/* SECOND ROW */}
              </Flex>
              <Flex flexDirection="row" justifyContent="flex-start"  {...styleProps.drawerButtons}>

                   {/* ACCOUNT */}
              <Box {...styleProps.buttonBoxes}>
                <Button {...styleProps.buttons}>
                  <Image boxSize ="150" src="/account.svg"/>
                </Button>
                <Text textAlign ="center" fontSize="2xl">ACCOUNT</Text>
              </Box>

                {/* SETTINGS */}
                <Box {...styleProps.buttonBoxes}>
                  <Button {...styleProps.buttons}>
                    <Image boxSize ="150" src="/settings.svg"/>
                  </Button>
                  <Text textAlign ="center" fontSize="2xl">SETTINGS</Text>
                </Box>

                {/* LOGOUT */}
                <Box {...styleProps.buttonBoxes}>
                  <Button
                    {...styleProps.buttons}
                    onClick={() => {
                    onClose();
                    navLoginButtonContext.isLoggedIn
                    ? setIsLogoutDialogOpen(true)
                    : Router.push("/login");}}>
                       <Image boxSize ="150" src="/logout.svg"/>
                  </Button>
                  <Text textAlign ="center" fontSize="2xl">LOGOUT</Text>
                </Box>
              
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
    variant: "solid",
    color: Colors.green,
    colorScheme: "blackAlpha",
    alignItems: "left",
    marginBottom: "8vh",
  },
  drawerBody: {
      borderRadius: "lg",
      paddingStart: "1vh",
      alignItems: "left",
      bg: Colors.black,
  },
  buttonBoxes: {
    backgroundColor: Colors.black,
    color: Colors.white,
    colorScheme: "cyan",
    variant:"solid",
    w: "20vh",
    h: "25vh",
    ml: "20vh"
  },
  buttons: {
    variant:"solid",
    shadow:"xl",
    backgroundColor: Colors.grey,
    color: Colors.white,
    colorScheme: "cyan",
    marginBottom: "1vh",
    w: "20vh",
    h: "20vh",
  }
};
