// import back from "../assets/back.png";
import { useNavigate } from "react-router-dom"

export default function NavTop({title}) {
    let navigate = useNavigate()
    function back() {
        navigate(-1)
    }
    return (
        <nav className="nav-top">
            <div>
            <img className="back" src="/assets/back.png" alt="back"  onClick={back}/>
            </div>
            <h3 className="title-nav">{title}</h3>
        </nav>
    )
}