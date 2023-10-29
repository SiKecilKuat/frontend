import NavTop from "../components/NavTop"
import Input from "../components/Input"
import CardLog from "../components/CardLog"
import FloatingActionButton from "../components/FloatingActionButton"

export default function Log(){
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
            <FloatingActionButton/>
        </div>
    )
}