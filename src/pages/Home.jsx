import NavTop from "../components/NavTop"
import Input from "../components/Input"
import Button from "../components/Button"
import { useNavigate } from "react-router-dom";
import React from "react";

export default function Home(){
    let navigate = useNavigate()

    function handleClick() {
        console.log("clicked");
        navigate("/log",{replace: true});
    }

    return (
        <div>
            <NavTop title="Login"/>
            <Input name="name" placeholder="Masukan Email Anda"/>
            <Input name="password" placeholder="Masukan Passowrd Anda" type="password"/>
            <Button  placeholder={"Login"} mode="main" click={handleClick}/>
        </div>
    )
}

