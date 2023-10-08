import { NavLink } from "react-router-dom"
import NavTop from "../components/NavTop"
import InputText from "../components/InputText"
import PhotoPicker from "../components/PhotoPicker"
export default function Create(){
    return (
        <div>
            <NavTop title="Tambah Anak"/>


            <PhotoPicker/>
            <InputText name="name" placeholder="Masukan nama anak anda"/>
        </div>
    )
}