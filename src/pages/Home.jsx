import NavTop from "../components/NavTop"
import Input from "../components/Input"
import Button from "../components/Button"
import { useNavigate } from "react-router-dom";
import React from "react";

export default function Home(){
    let navigate = useNavigate()

    function handleClick() {
        navigate("/log");
    }

    return (
        <div>
            <NavTop title="Login"/>
            <img src="./assets/illustration.png" alt="illustration" width="400px" className="ilt_home"/>
            <Input name="name" placeholder="Masukan Email Anda"/>
            <Input name="password" placeholder="Masukan Passowrd Anda" type="password"/>
            <Button  placeholder={"Login"} mode="main" click={handleClick}/>
        </div>
    )
}

