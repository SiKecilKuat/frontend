import { NavLink } from "react-router-dom"
import NavTop from "../components/NavTop"
import InputText from "../components/InputText"
export default function Create(){
    return (
        <div>
            <NavTop title="Tambah Anak"/>

            <InputText name="name" placeholder="Masukan nama anak anda"/>
        </div>
    )
}