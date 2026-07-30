import React, { useEffect, useState } from "react";
import "../assets/styles/Stats.css";

import {
  FaHome,
  FaUsers,
  FaBuilding,
  FaGlobe,
  FaHandshake,
} from "react-icons/fa";


const statsData = [
  {
    icon: <FaHome />,
    number: 15000,
    suffix: "+",
    title: "Properties Available",
  },

  {
    icon: <FaUsers />,
    number: 8500,
    suffix: "+",
    title: "Happy Clients",
  },

  {
    icon: <FaBuilding />,
    number: 1200,
    suffix: "+",
    title: "Luxury Homes",
  },

  {
    icon: <FaGlobe />,
    number: 50,
    suffix: "+",
    title: "Cities Covered",
  },

  {
    icon: <FaHandshake />,
    number: 98,
    suffix: "%",
    title: "Client Satisfaction",
  },
];



function Counter({number, suffix}){

const [count,setCount] = useState(0);


useEffect(()=>{

let start = 0;

const timer = setInterval(()=>{

start += Math.ceil(number / 100);

if(start >= number){

start = number;
clearInterval(timer);

}

setCount(start);


},20);


return ()=>clearInterval(timer);


},[number]);


return(
<h2>
{count.toLocaleString()}
{suffix}
</h2>
)

}



function Stats(){

return(

<section className="stats" id="stats">


<div className="stats-title">

<p>WHY CHOOSE US</p>

<h1>
Trusted By Thousands Of Clients
</h1>

<span>
We provide premium properties with professional service.
</span>

</div>




<div className="stats-container">


{
statsData.map((item,index)=>(

<div className="stat-card" key={index}>


<div className="stat-icon">
{item.icon}
</div>


<Counter 
number={item.number}
suffix={item.suffix}
/>


<h3>
{item.title}
</h3>


</div>

))

}


</div>


</section>

)

}


export default Stats;