import { useState, useEffect } from "react";
import Subscribtion from "./Subscription";

export default function Hotel (props) {

    const [visible, setVisible] = useState(false);
    const [formVisible, setFormVisible] = useState(false);
  
    return (
      <div className="hotel">
        
        <h1>{props.name}</h1>
	
  
        
        { visible && <div><p>{props.city}</p><p>{props.stars}</p></div> }

        { visible ? <button onClick={()=>setVisible(false)}>Show less</button> : <button onClick={()=>setVisible(true)}>Show more</button> }
       
        
        { visible && <div><br /><button onClick={()=>setFormVisible(true)}>Request more info</button></div>}

        { formVisible && <Subscribtion hotelName={props.name}/> }
        
   
      </div>
    )
}