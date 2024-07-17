
import { UserState } from "./context/userContext/UserState"
import { RourterApp } from "./Router/RouterApp"



export const App = () => {
  return (
    <>
   <UserState>
     <RourterApp />
   </UserState>
   
   
      
    </>
  )
}