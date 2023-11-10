import NavTop from "../components/NavTop"
import Input from "../components/Input"
import Button from "../components/Button"
import { useRef } from 'react';
import { useNavigate } from "react-router-dom";

export default function Register(){
    let navigate = useNavigate()

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

   async function register() {
    let url = "https://api.mockfly.dev/mocks/ed0c1a70-b430-4236-95fe-56f119144980/register";
    const data = {
        email: email.value,
        name: name.value,
        password: password.value,
    };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
        alert("error")
        return
    }

    const responseData = await response.json();
    navigate('/children'); 
  } catch (error) {
     alert("error: " + error.message)
  }
}

    return (
        <div>
            <NavTop title="Register"/>
            <Input ref={name} name="name" placeholder="Masukan Nama Anda"/>
            <Input ref={email} name="email" placeholder="Masukan Email Anda"/>
            <Input ref={password} name="password" placeholder="Masukan Passowrd Anda" type="password"/>
            <Button  placeholder={"Register"} click={register} mode="main"/>
        </div>
    )
}