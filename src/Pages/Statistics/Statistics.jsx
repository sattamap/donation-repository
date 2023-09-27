import { Legend } from "chart.js";
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";


const COLORS = ["#FF444A","#00C49F"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Statistics = () =>  {

    const [totalData, setTotalData] = useState(0);
    const [totalDonations, setTotalDonations] = useState(0);
  
    useEffect(() => {
      // Fetch data from local storage
      const donatedItems = JSON.parse(localStorage.getItem("donations")) || [];
      const totalDonationsCount = donatedItems.length;
  
      // Fetch data from JSON file in the public folder
      fetch("/donationInfos.json")
        .then((response) => response.json())
        .then((data) => {
          const totalCardsCount = data.length;
          setTotalData(totalCardsCount);
          setTotalDonations(totalDonationsCount);
        })
        .catch((error) => {
          console.error("Error fetching JSON data: ", error);
        });
    }, []);
  
    const data = [
      { name: "Total Data", value: totalData - totalDonations },
      { name: "Total Donations", value: totalDonations },
    ];
  return (
    <div className="max-w-[1300px] flex flex-col justify-center items-center mx-auto">
    <div className="mr-80">
    <PieChart width={800} height={800}>
      <Pie
        data={data}
        cx={600}
        cy={300}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={180}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend
        align="center"
        verticalAlign="bottom"
        iconSize={20}
        iconType="square"
      />
    </PieChart>
    </div>
    <div className="flex items-center justify-center gap-16 -mt-48">
        <div className="flex items-center justify-center gap-3">
            <p> Your donation </p>
            <div className="bg-[#00C49F] h-3 w-24"></div>
        </div>
    
   <div className=" flex items-center justify-center gap-3">
   <p> Total donation</p>
    <div className="bg-[#FF444A] h-3 w-24"></div>
   </div>
    </div>
   
  </div>
);
};

export default Statistics;

