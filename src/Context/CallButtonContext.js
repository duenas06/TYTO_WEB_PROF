import { createContext, useRef, useState } from "react";

const CallButtonContext = createContext({
  isInCall: Boolean,
  handleInCallState: () => {},
});

export function CallButtonContextProvider(props) {
  const [isInCall, setisInCall] = useState(false);
  function handleInCallState() {
    setisInCall(!isInCall);
  }

  const context = {
    isInCall: setisInCall,
    handleInCallState: handleInCallState,
  };

  return (
    <CallButtonContext.Provider value={context}>
      {props.children}
    </CallButtonContext.Provider>
  );
}

export default CallButtonContext;
