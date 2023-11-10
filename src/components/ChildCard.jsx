export default function ChildCard({onClick,photo="dummy.png",mode,name,date}){
    return(
        <div>
            <div className="card " onClick={onClick} >
                <div>
                    <img src={photo} className="img-card" alt="child" /> 
                </div>
 
                <div className="card-body">
                    <h3 className="title-card">
                        {name}
                    </h3>
                    <p className="subtitle-card">
                        {date}
                    </p>
                </div>
            </div>
        </div>
    )
}