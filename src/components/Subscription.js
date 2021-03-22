import { useState, useEffect } from "react";
import LoadingMask from "./LoadingMask";


export default function Form (props) {

    const [email, setEmail] = useState("");
    const [stillLoading, setStillLoading] = useState(false);


/*     useEffect(() => {
        
        const sendData = async () => {

            let formData = new FormData();
            formData.append("email", "email");
            formData.append("hotel", `${props.hotelName}`);
          
            const resp = await fetch('api/hotels/subscribe', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .catch((error) => {
                console.error('Error:', error);
            });
    
            console.log(`---`, resp);
        }
        sendData();      
    }, []) */

    useEffect(()=> {
        if (email !== "") {
            console.log(email);
            let inputField = document.getElementById("email");
            let button = document.getElementById("button");
            if (inputField.validity.valid) {
                button.disabled = false;
            } else {
            button.disabled = true;
            }
        }

      }, [email])


      useEffect(()=> {
        console.log("loading");
      }, [stillLoading])  

    const sendInfo = () => {
  
    }

    return (
      <div className="form">
        
        { stillLoading ? <LoadingMask /> : ""}


        <label htmlFor="email">Enter your email:</label>
        <input
        id="email"
         type="email"
         value={email}
         placeholder="Email..."
         onChange={e => setEmail(e.target.value)}
       />


        <button id="button" onClick={() => setStillLoading(true)} disabled>Send</button>
        



      </div>
    )
}