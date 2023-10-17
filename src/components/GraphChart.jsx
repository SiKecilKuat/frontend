import React from "react";
import { Line } from "react-chartjs-2";

function GraphChart({ chartData }) {
  return (
    <div className="chart-container">
      <h2 className="title-pie">Pertumbuhan Bayi</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            legend:{
              display:true,
              labels:{
                color:"white",
                font:{
                  size:16,
                }
              }
            },
            title: {
              display: false,
              text: "Gizi Bayi"
            },
            scales:{
               y:{
                title:{display:true,text:"a"}
               }
            }
          }
        }}
      />
    </div>
  );
}
export default GraphChart;
