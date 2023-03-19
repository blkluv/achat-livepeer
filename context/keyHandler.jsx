import React,{useState,useContext} from 'react'

export const keyContext = React.createContext();

export default function keyHandlerProvider({children}) {

   const [streamKey, createStream] = useState();
   const [playbackId, setPlaybackId] = useState();
   const [name,setName] = useState();
   const [streamStatus,setStreamStatus] = useState();

  return (
    <keyContext.Provider
      value={{
        streamKey,
        createStream,
        playbackId,
        setPlaybackId,
        name,
        setName,
        streamStatus,
        setStreamStatus,
      }}
    >
      {children}
    </keyContext.Provider>
  );
}

export const useKeyContext = ()=>{
    return useContext(keyContext);
}