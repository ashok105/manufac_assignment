import React from "react";
import ReactECharts from "echarts-for-react";
import data from "../Data/data";

function BarChart() {
  function average(array) {
    return (
      array.reduce((a, b) => {
        return a + b;
      }) / array.length
    );
  }

  const options = {
    xAxis: {
      type: "category",
      data: ["class_1", "class_2", "class_3"],
    },
    yAxis: {
      type: "value",
      // We labelled the y axis as average of malic aacid
      name: "average of Malic Acid",
      nameLocation: "middle",
      nameGap: 28,
      nameTextStyle: {
        fontSize: 16,
      },
    },
    series: [
      {
        // we get the malic acid in the data from  data.js
        data: [
          average(data.class_1.Malic_acid),
          average(data.class_2.Malic_acid),
          average(data.class_3.Malic_acid),
        ],
        type: "bar",
      },
    ],
  };

  return <ReactECharts option={options} />;
}

export default BarChart;
