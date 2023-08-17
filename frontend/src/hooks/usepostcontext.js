// import { postscontext } from "../contexts/postcontext";
// import * as React from 'react';

// export const usepostcontext = ()=>{
//     const context = React.useContext(postscontext);
//     if(!context){
//         throw Error("useworkoutcontext must be inside workoutcontextprovider")
//     }
//     return context;
// }
import { PostsContext } from "../contexts/postcontext"
import { useContext } from "react"

export const UsepostsContext = () => {
  const context = useContext(PostsContext)

  if(!context) {
    throw Error('useWorkoutsContext must be used inside an WorkoutsContextProvider')
  }

  return context
}