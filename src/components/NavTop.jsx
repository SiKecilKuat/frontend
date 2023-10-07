import back from "../assets/back.png";

export default function NavTop({title}) {
    return (
        <nav className="nav-top">
            <div>
            <img className="back" src={back} alt="back" />
            </div>
            <h3 className="title-nav">{title}</h3>
        </nav>
    )
}