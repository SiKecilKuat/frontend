import { NavLink, useNavigate } from "react-router-dom"
import NavTop from "../components/NavTop"
import Input from "../components/Input"
import PhotoPicker from "../components/PhotoPicker"
import Button from "../components/Button"
import { useState,useRef, useEffect } from "react"

export default function Create(){

    let [name,setName] = useState("")
    let [gender,setGender] = useState("")
    let [dateOfBirth,setDateOfBirth] = useState("")

    let navigate = useNavigate()
    // let name = useRef(null)
    // let dateBirth = useRef(null)
    // let gender = useRef(null)

    const onChange = (e) => {
        setGender(e.target.values);
    };
    

    async function addNewChild() {
     
        const body = {
        "name": name,
        "birthDate": dateOfBirth,
        "gender": gender,

    }

    
        const response = await fetch("http://localhost:3000/child-data/1",{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body : JSON.stringify(body) 
        })

        if (!response.ok){
            alert("kesalahan pada server")
            return
        }

        const responseData = await response.json(); 
        navigate("/children")


    }

    useEffect(()=>{
        
    },[gender])
    return (
        <div>
            <NavTop title="Tambah Anak"/>

            <PhotoPicker/>
            
            <br />
            <Input  name="name" placeholder="Masukan nama anak anda" onChange={(e) => setName(e.target.value)} value={name}/>
            <Input name="anakke" placeholder="Anak ke-"/>
            <Input name="tgllahir" placeholder="Tanggal Lahir" value={dateOfBirth} onChange={(e)=>setDateOfBirth(e.target.value)}type="date"/>
            <Input  name="anakke" placeholder="Anak ke-"/>
            <Input name="tempatlahir" placeholder="Tempat Lahir" />
            <select  className="input-text" name="gender" onChange={(e) => setGender(e.target.value)} value={gender} placeholder="Jenis Kelamin">
                    <option value="L">laki-Laki</option>
                    <option value="P">Perempuan</option>
                </select>
            <Input name="bobot" placeholder="Bobot"/>
            <Button  placeholder={"+ Tambah Anak"} click={addNewChild} mode="main"/>
        </div>
    )
}
