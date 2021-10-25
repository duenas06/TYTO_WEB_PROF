import { Center, Flex, Heading, Text, VStack } from "@chakra-ui/layout";
import React, { useContext, useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Spinner,
  Button,
  useDisclosure,
  Wrap,
  Box,
} from "@chakra-ui/react";
import axios from "axios";
import UserDataContext from "../../Context/UserDataContext";
import useWindowSize from "../../CustomHooks/UseWindows";
import Colors from "../../Constants/Colors";
import Router from "next/router";
export default function Schdulebox() {
  const getWindowSize = useWindowSize();
  const [dataList, setDataList] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const userDataContext = useContext(UserDataContext);

    async function getuserData(props) {
    setIsDataLoading(true);
    if (userDataContext.data.type == 1) {
        var getUser = await axios
        .get(
            "https://tyto.vercel.app/api/teacher/schedule/" +props.id
        )
        .then((response) => {
            return setDataList(response.data);
        })
        .then((res) => {
            setIsDataLoading(false);
        });
    }
    }
    useEffect(() => {
    getuserData(userDataContext.data);
    }), [];

    return (
        <Flex>
             <Wrap direction= {["column","column","row"]}{...styleProps.stackContainer} justifyContent= 'space-between'
                    w= {getWindowSize.width * 0.9}>
            {dataList.map((val) => {
                if(userDataContext.data.type == 1)
                {
                    return (
                   
                     <Box {...styleProps.buttonBoxes}
                     w={getWindowSize.width * 0.20}>              
                         <Heading {...styleProps.text} key={val.id}>{val.id.SectionName}</Heading>
                         <Heading {...styleProps.text} key={val.id}>{val.id.Time}</Heading>
                         <Button
                         {...styleProps.buttons}
                         w= {getWindowSize.width * 0.20}
                         onClick={() => {
                         Router.push("/videoConference");}}> ENTER ROOM </Button>
                     </Box>   
                 )
                }
            })}
            </Wrap> 
        </Flex>
    )
}

const styleProps = {
      text: {
        textAlign: "center",
        fontSize: "2xl",
        mt:"3vh",
        mb: "5vh",
      },
      buttonBoxes: {
        backgroundColor: Colors.grey,
        color: Colors.white,
        shadow:"xl",
        alignItems: "center",
        borderRadius: "lg",
        colorScheme: "cyan",
        flexDirection: "column",
        variant:"solid",
        h: "30vh",
        mt:"5vh"
      },
      buttons: {
        variant:"solid",
        shadow:"xl",
        backgroundColor: Colors.cyan,
        color: Colors.white,
        fontSize: "30px",
        h: "7vh",
        mt: "4vh",
      },

      stackContainer: {
        borderRadius: "lg",
        backgroundColor: Colors.black,
        h:"87.8",
        spacing: "24px",
        padding: "5vh"
    },
}