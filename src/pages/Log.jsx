import NavTop from "../components/NavTop"
import Input from "../components/Input"
import CardLog from "../components/CardLog"
import FloatingActionButton from "../components/FloatingActionButton"
import CustomPopup from "../components/CustomPopup"
import { useState } from "react"

export default function Log(){
    const [visibility, setVisibility] = useState(false);

    const popupCloseHandler = (e) => {
        console.log("hi");
        setVisibility(e);
    };
    
    return (
        <div>
            <NavTop title="Log Harian"/>

            <div className="subheader-log">
                <img src="./assets/dummy.png" width="55px" height="55px" alt="" />

                <div className="subheader-content">
                    <h3 className="subheader-title">Alifah indy m</h3>
                    <p className="subheader-subtitle">12 bulan 10 hari</p>
                </div>
            </div>
            
            <CardLog/>

            
            <CustomPopup
                onClose={popupCloseHandler}
                show={visibility}
                title="Makanan"
            >
                <input className="input" placeholder="nama makanan" type="text" name="jenis_makanan" id="jenis_makanan" />

                <br />
                <input className="input" type="text" placeholder="jumlah" name="porsi" id="porsi" />
                
                <br />
                <input className="input" type="date" name="porsi" id="porsi" />

                <br />
                <select className="input" id="input"    >
                    <option value="">Pagi</option>
                    <option value="">Siang</option>
                    <option value="">Malam</option>
                </select>
            </CustomPopup> 
            <FloatingActionButton click={() => setVisibility(true)}/>
        </div>
    )
}
