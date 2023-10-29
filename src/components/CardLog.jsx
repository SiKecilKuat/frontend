import { useEffect, useState } from 'react'
import DailyLog from './DailyLog'

export default function CardLog(){
    
    const [status,setStatus] = useState(false)

 

    return(
        <div>
            <div className="card-log">
            <div className='header-log'>

            <span>Senin - 18 oktober 2023</span> 
            <button className={status ? "btn-arrow-log " : "btn-arrow-log up"} onClick={() => setStatus(!status)}><img src="./assets/arrow.png" alt="arrow" />
            </button>
            
            </div>
            
            <div className={status ? "body-log" : "body-log deactivate"} >
                <DailyLog mode="eat" title="Nasi Bubur"/>
                <DailyLog mode="sleep" title="Tidur Siang"/>
            </div>
            </div>


        </div>
    )
}