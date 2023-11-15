import { useState } from 'react'
import DailyLog from './DailyLog'

export default function CardLog({date,logs}){
    
    const [status,setStatus] = useState(false)

    function formatDateStringWithoutTime(dateString) {
        const dateWithoutTime = new Date(dateString);
        dateWithoutTime.setHours(0, 0, 0, 0); // Set time to midnight
        return dateWithoutTime.toISOString().split('T')[0];
    }

    function formatDate(inputDate) {
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  const date = new Date(inputDate);
  const dayName = days[date.getUTCDay()];
  const day = date.getUTCDate();
  const monthName = months[date.getUTCMonth()];
  const year = date.getUTCFullYear();

  return `${dayName} - ${day} ${monthName} ${year}`;
}

    return(
        <div>
            <div className="card-log">
            <div className='header-log'>

            <span>{formatDate(date)}</span> 
            <button className={status ? "btn-arrow-log " : "btn-arrow-log up"} onClick={() => setStatus(!status)}><img src="/assets/arrow.png" alt="arrow" />
            </button>
            
            </div>
            
            <div className={status ? "body-log" : "body-log deactivate"} >
                {
                 
                    logs.map((log,index) => {
                        // if(formatDateStringWithoutTime(log.dtcreated) === date){
                            return <DailyLog key={index} mode="eat" title={log.food_item}/>
                        // }
                    })
                }
            </div>
            </div>


        </div>
    )
}