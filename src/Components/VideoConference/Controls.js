import { useState } from "react";
import { useClient } from "./settings";
import { Grid, Button, Flex } from "@chakra-ui/react";
import { BsMic, BsMicMute, BsCameraVideo, BsCameraVideoOff, BsTelephonePlus } from "react-icons/bs";
import Colors from "../../Constants/Colors"

export default function Controls(props) {
  const client = useClient();
  const { tracks, setStart, setInCall } = props;
  const [trackState, setTrackState] = useState({ video: true, audio: true });

  const mute = async (type) => {
    if (type === "audio") {
      await tracks[0].setEnabled(!trackState.audio);
      setTrackState((ps) => {
        return { ...ps, audio: !ps.audio };
      });
    } else if (type === "video") {
      await tracks[1].setEnabled(!trackState.video);
      setTrackState((ps) => {
        return { ...ps, video: !ps.video };
      });
    }
  };

  const leaveChannel = async () => {
    await client.leave();
    client.removeAllListeners();
    tracks[0].close();
    tracks[1].close();
    setStart(false);
    setInCall(false);
  };

  return (
    <Flex  alignSelf = "center" backgroundColor = {Colors.black} {...styleProps.indexWrapper}>
      <Flex >
        <Button {...styleProps.buttons}
          colorScheme= "cyan"
          onClick={() => mute("audio")}>
          {trackState.audio ? <BsMic /> : <BsMicMute />}
        </Button>
      </Flex>
      <Flex ml="5vh">
        <Button {...styleProps.buttons}
          colorScheme= "cyan"   
          onClick={() => mute("video")}>
          {trackState.video ? <BsCameraVideo /> : <BsCameraVideoOff />}
        </Button>
      </Flex>
      <Flex  ml="5vh">
        <Button {...styleProps.buttons}
          colorScheme= "red"
          onClick={() => leaveChannel()}>
          <BsTelephonePlus />
        </Button>
      </Flex>
    </Flex>
  );
}

const styleProps = {
  indexWrapper: {
    padding:"5px",
    justifyContent: "center",
    bgColor: Colors.grey,
    borderRadius: "xl",
    width:"30%",
    height:"5%",
  },
  buttons: {
    variant:"solid",
    shadow:"xl",
    backgroundColor: Colors.black,
    color: Colors.white,
    w: "7vh",
    h: "7vh",
   
  }
}