export default function ChildCard({photo="dummy.png",mode,name,date}){
    let photoWithUrl = `/assets/${photo}`
    return(
        <div>
            <div className="card " >
                <div>
                    <img src={photoWithUrl}  alt="child" /> 
                </div>
 
                <div>
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