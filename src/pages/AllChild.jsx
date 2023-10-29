import { NavLink } from "react-router-dom"
import NavTop from "../components/NavTop"
import ChildCard from "../components/ChildCard"
import FloatingActionButton from "../components/FloatingActionButton"

export default function AllChild(){
    return (
        <div>
            <NavTop title="Semua Anak"/>

            <ChildCard mode="son" photo="dummy.png" name="Alifah Indy M" date="12 Bulan 10 hari" />
            <ChildCard mode="son" photo="dummy.png" name="Alifah Indy M" date="12 Bulan 10 hari" />
            
            <FloatingActionButton/>
        </div>
    )
}
