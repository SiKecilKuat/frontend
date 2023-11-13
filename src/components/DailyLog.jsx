export default function DailyLog({mode,title}){
    let modeClass = `card-dailylog ${mode}`
    
    if (mode == 'sleep') {
    return(
        <div>
            <div className={modeClass}>
                <div>
                
                <img src="/assets/sleep.png" alt="eat" />
                </div>
                <h3>{title}</h3>
            </div>
        </div>
    )
    } else {
     return(
        <div>
            <div className={modeClass}>
                <div>
                
                <img src="/assets/eat.png" alt="eat" />
                </div>
                <h3>{title}</h3>
            </div>
        </div>
    )   
    }
}