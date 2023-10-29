import { NavLink } from "react-router-dom"
import NavTop from "../components/NavTop"
import ChildCard from "../components/ChildCard"

export default function AllChild(){
    return (
        <div>
            <NavTop title="Semua Anak"/>

            <ChildCard mode="son" photo="dummy.png" name="firman" date="2003-12-01" />
            
        </div>
    )
}
