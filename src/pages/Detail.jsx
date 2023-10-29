import NavTop from "../components/NavTop"
import Chart from "chart.js/auto"
import { CategoryScale } from "chart.js"
import { useState } from "react";
import { Data } from "../utils/Data";

import PhotoPicker from "../components/PhotoPicker"
import PieChart from "../components/PieChart"
import Button from "../components/Button"
import GraphChart from "../components/GraphChart"

Chart.register(CategoryScale);


export default function Home(){
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
    return (
        <div>
            
            <NavTop title="Detail"/>

            <PhotoPicker/>

            <h2 className="title-detail">Alifah Sindy R</h2>
            <span className="subtitle-detail">Perempuan</span>
            <span className="subtitle-detail">12 Bulan 10 hari</span>

            <PieChart chartData={chartData} />
            <GraphChart chartData={chartData} />

            <Button  placeholder={"Log Harian"} mode="main"/>
        </div>
    )
}