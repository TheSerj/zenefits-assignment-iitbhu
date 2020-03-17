import React from "react";
import Chart from "react-google-charts";

const HirarchyChart = ({hirarchy})=>{

    return (
      <div className="App">
        <Chart
          chartType="OrgChart"
          data={hirarchy}
          options={{
            allowHtml: true
          }}
          width="100%"
          height="400px"
        />
      </div>
    );
  
}


export default HirarchyChart;