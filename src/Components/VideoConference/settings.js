import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "cd305ea814d54bdf87aa48ffe4af8363";
const token =
  "006cd305ea814d54bdf87aa48ffe4af8363IABNp+ndP59n73J14dg8cISNJFHE4aETJ6Ffct7T0NJSOIeW8j4AAAAAEACHtvL/bet3YQEAAQBr63dh";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "TYTO";
