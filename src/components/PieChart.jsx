import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ chartData }) {
  return (
    <div className="chart-container">
      <h2 className="title-pie">Rerata Gizi Bayi</h2>
      <Pie
        data={chartData}
        options={{
          plugins: {
            legend:{
              display:true,
              labels:{
                color:"white",
                font:{
                  size:16,
                  color:'white',
                }
              }
            },
            title: {
              display: false,
              text: "Gizi Bayi"
            }
          }
        }}
      />
    </div>
  );
}
export default PieChart;
