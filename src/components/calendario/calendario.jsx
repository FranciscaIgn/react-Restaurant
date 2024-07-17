import { useState } from "react"
import Calendar from "react-calendar"




export const  Calendario = () => {
    
const ValuePiece = Date | null;

const Value = ValuePiece | [ValuePiece, ValuePiece];
  
const [value, onChange] = useState (new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}