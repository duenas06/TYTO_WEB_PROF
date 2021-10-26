import { Button } from "@chakra-ui/button";
import { Heading } from "@chakra-ui/layout";
import { Flex, Image, Text, Box, Stack, Wrap, WrapItem } from "@chakra-ui/react";
import React, { useContext, useEffect, useRef } from "react";
import useWindowSize from "../../CustomHooks/UseWindows";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
// import NavBarButtons from "./NavBarButtons";
import DrawerButton from "../dashboard/DrawerButton";
import LoadingBar from "react-top-loading-bar";
import Colors from "../../Constants/Colors";
import NavLoaderContext from "../../Context/NavLoaderContext";
import NavLoginButtonContext from "../../Context/NavLogInButtonContext";
import MenuButton from "../dashboard/MenuButton"
import { useDisclosure } from "@chakra-ui/hooks";
import Schdulebox from "./Schedulebox";
import UserDataContext from "../../Context/UserDataContext";
export default function ClassSchedule() {
  const getWindowSize = useWindowSize();
  const navLoginButtonContext = useContext(NavLoginButtonContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const userDataContext = useContext(UserDataContext);

  return (
    <>
      <Flex backgroundColor= {Colors.black} {...styleProps.navBarContainer}
       h={getWindowSize.height < 960
        ? getWindowSize.height * 0.812
        : getWindowSize.height * 1}
     
        alignItems = "center">
        <Flex flexDirection = "column" alignItems = "center"> 
            <Heading color={Colors.white}
            textAlign = "center"
            fontSize="70px"
            >CLASS SCHEDULE</Heading>

            <Heading color={Colors.white}
            mt = "3vh"
            textAlign = "center"
            fontSize="20px"
            >To search efficiently, use the filter boxes below</Heading>

            <Stack flexDirection = "row" alignItems = "center"justifyContent= "space-between"
             mt = "3vh" padding = "1"
             w= {getWindowSize.width * 0.4} 
             backgroundColor= {Colors.black} >

                <Heading color={Colors.white}
                textAlign = "center"
                fontSize="20px"
                mt ="1"
                >DAY: </Heading>

                <Button
                {...styleProps.dateButtons}
                onClick={() => {
                  onClose();
                  }}> MONDAY </Button>

                <Heading color={Colors.white}
                textAlign = "center"
                fontSize="20px"
                marginStart= "3vh"
                >SECTION: </Heading>
                  
                <Button
                {...styleProps.dateButtons}
                onClick={() => {
                  onClose();
                  }}> ALL </Button>

                <Heading color={Colors.white}
                textAlign = "center"
                fontSize="20px"
                marginStart= "3vh"
                >SUBJECT: </Heading>
                  
                <Button
                {...styleProps.dateButtons}
                onClick={() => {
                  onClose();
                  }}> CODE </Button>

            </Stack>
            </Flex>
            <Schdulebox/>
            </Flex>
    </>
  );
}

const styleProps = {
  navBarContainer: {
    flexDirection: "column",
    justifyContent: "stretch",
    padding: "1",
},


      dateButtons: {
        variant:"solid",
        shadow:"xl",
        w: "15vh",
        backgroundColor: Colors.grey,
        color: Colors.white,
        colorScheme: "cyan",
        
      }


};
