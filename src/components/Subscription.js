import { useState, useEffect } from "react";

export default function Form (props) {

    const [email, setEmail] = useState("");


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
            if (inputField.validity.typeMismatch) {
                button.disabled = true;
            } else {
            button.disabled = false;
            }
        }

      }, [email])

    const sendInfo = () => {
  
    }

    return (
      <div className="form">
        
        <label htmlFor="email">Enter your email:</label>
        <input
        id="email"
         type="email"
         value={email}
         placeholder="Email..."
         onChange={e => setEmail(e.target.value)}
       />


        <button id="button" onChange={() => sendInfo()} disabled>Send</button>
        



      </div>
    )
}