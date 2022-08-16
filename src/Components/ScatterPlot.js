import React from "react";
import ReactECharts from "echarts-for-react";
import data from "../Data/data";

function ScatterPlot() {
  const options = {
    xAxis: {
      // We labelled the  x axis as colour intensity
      name: "Color Intensity",
      nameLocation: "middle",
      nameGap: 30,
      nameTextStyle: {
        fontSize: 16,
      },
    },
    yAxis: {
      // We labelled the y axis as hue
      name: "Hue",
      nameLocation: "middle",
      nameGap: 30,
      nameTextStyle: {
        fontSize: 16,
      },
    },
    series: [
      {
        symbolSize: 8,
        // Wew get the colour intensity and hue in the data from data.js
        data: [
          ...data.class_1.Color_intensity_and_Hue,
          ...data.class_2.Color_intensity_and_Hue,
          ...data.class_3.Color_intensity_and_Hue,
        ],
        type: "scatter",
      },
    ],
  };

  return <ReactECharts option={options} />;
}

export default ScatterPlot;
