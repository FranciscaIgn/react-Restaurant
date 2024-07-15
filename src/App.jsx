import { UserState } from "./context/UserState"
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