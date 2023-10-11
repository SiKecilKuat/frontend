import { NavLink } from "react-router-dom"
import NavTop from "../components/NavTop"
import Input from "../components/Input"
import PhotoPicker from "../components/PhotoPicker"
import Button from "../components/Button"

export default function Create(){
    return (
        <div>
            <NavTop title="Tambah Anak"/>

            <PhotoPicker/>
            
            <br />
            <Input name="name" placeholder="Masukan nama anak anda"/>
            <Input name="anakke" placeholder="Anak ke-"/>
            <Input name="tgllahir" placeholder="Tanggal Lahir" type="date"/>
            <Input name="tempatlahir" placeholder="Tempat Lahir"/>
            <Input name="gender" placeholder="Jenis Kelamin"/>
            <Input name="bobot" placeholder="Bobot"/>
            <Button  placeholder={"+ Tambah Anak"} click={clicked} mode="main"/>
        </div>
    )
}

function clicked(params) {
    alert("clicked")
}