import NavTop from "../components/NavTop"
import Chart from "chart.js/auto"
import { CategoryScale } from "chart.js"
import { useEffect, useState } from "react";
import { Data } from "../utils/Data";

import PhotoPicker from "../components/PhotoPicker"
import PieChart from "../components/PieChart"
import Button from "../components/Button"
import GraphChart from "../components/GraphChart"
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

Chart.register(CategoryScale);


export default function Home(){
  let navigate = useNavigate()
   const { id } = useParams();
    let [name,setName] = useState("")
    let [gender,setGender] = useState("")
    let [dateOfBirth,setDateOfBirth] = useState("2002/09/2")

     function formatDateStringWithoutTime(dateString) {
        const dateWithoutTime = new Date(dateString);
        dateWithoutTime.setHours(0, 0, 0, 0); // Set time to midnight
        return dateWithoutTime.toISOString().split('T')[0];
    }

    function calculateAge(dateOfBirth) {
        const birthDate = new Date(dateOfBirth);
        const currentDate = new Date();

        const differenceInMilliseconds = currentDate - birthDate;

        const years = Math.floor(differenceInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));

        const remainingMilliseconds = differenceInMilliseconds - years * (365.25 * 24 * 60 * 60 * 1000);

        const months = Math.floor(remainingMilliseconds / (30.44 * 24 * 60 * 60 * 1000));

        const remainingMillisecondsAfterMonths = remainingMilliseconds - months * (30.44 * 24 * 60 * 60 * 1000);

        const days = Math.floor(remainingMillisecondsAfterMonths / (24 * 60 * 60 * 1000));

        const ageString = `${years} Tahun ${months} Bulan ${days} Hari`;

        return ageString;
        }

        function toLog() {
          navigate("/log/"+id)
        }
    async function getChild() {
    const response = await fetch("http://localhost:3000/child-data/"+id)

    if(!response.ok){
      alert("kesalahan server")
      return
    }

     const { data } = await response.json()
          
     setName(data.name)
     setDateOfBirth(data.birth_date)
     console.log(data.birth_date);
     setGender(data.gender)

   
    }

   


    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.title), 
        datasets: [
      {
        label: "Gizi Bayi ",
        data: Data.map((data) => data.value),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        color:"white",
        borderColor: "black",
        borderWidth: 2
      }
    ]
    });

    

    useEffect(()=>{
      getChild()
    },[])
    return (
        <div>
            
            <NavTop title="Detail"/>

            <PhotoPicker/>

            <h2 className="title-detail">{name}</h2>
            <span className="subtitle-detail">{(gender == "L" ? "Laki-Laki" : "Perempuan")}</span>
            <span className="subtitle-detail">{calculateAge(formatDateStringWithoutTime(dateOfBirth))}</span>

            <PieChart chartData={chartData} />
            <GraphChart chartData={chartData} />

            <Button placeholder="Log Harian" mode="main" click={() => toLog()}/>
        </div>
    )
}