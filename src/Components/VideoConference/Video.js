import { AgoraVideoPlayer } from "agora-rtc-react";
import { Grid, Wrap } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Colors from "../../Constants/Colors";
import useWindowSize from "../../CustomHooks/UseWindows"

export default function Video(props) {
  const { users, tracks } = props;
  const [gridSpacing, setGridSpacing] = useState(12);
  const getWindowSize = useWindowSize();

  useEffect(() => {
    setGridSpacing(Math.max(Math.floor(12 / (users.length + 1)), 4));
  }, [users, tracks]);

  return (
    <Wrap {...styleProps.buttonBoxes}  
    w={
      getWindowSize.width < 960
        ? getWindowSize.width * 0.7
        : getWindowSize.width * 0.967
    }
    h={getWindowSize.height < 960
      ? getWindowSize.height * 0.693
      : getWindowSize.height * 0.695}
    {...styleProps.vidCardContainer}>
      <Wrap >
        <AgoraVideoPlayer
          videoTrack={tracks[1]}
          style={{ height: "24vh", width: "24vh", padding: "4px"}} 
        />
      </Wrap >
      {users.length &&
        users.map((user) => {
          if (user.videoTrack) {
            return (
              <Wrap>
                <AgoraVideoPlayer
                  videoTrack={user.videoTrack}
                  key={user.uid}
                  style={{ height: "24vh", width: "24vh", padding: "4px"}}
                />
              </Wrap>
            );
          } else return null;
        })}
    </Wrap>
  );
}

const styleProps = {
  buttonBoxes: {
    backgroundColor: Colors.black,
    color: Colors.white,
    alignItems: "center",
    borderRadius: "lg",
    colorScheme: "cyan",
    variant:"solid",
    mt:"5vh"
  },
  boxes: {
    variant:"solid",
    shadow:"xl",
    backgroundColor: Colors.grey,
    color: Colors.white,
    colorScheme: "cyan",
    marginBottom: "1vh",
    w: "20vh",
    h: "20vh",
  }
}
