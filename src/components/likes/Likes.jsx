import { useState } from "react";
import { Button } from "../Button/Button"

export const Likes =() => {
   
   const [likes, setLikes] = useState (0)
   

    return (
        <>
        <Button onClick={() => {
            setLikes(likes + 1)
            
        }}>{likes} me gusta</Button>
        </>
    )
}