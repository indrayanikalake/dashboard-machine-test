import React, { useState } from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, } from 'chart.js';
import {  MenuItem, Paper, Select, Typography } from '@mui/material'; 
Chart.register(ArcElement)


const GraphSample = () => {
    const [data, setData] = useState();
     const config = {
        data:{
        datasets: [
          {
            label: ['Male', 'Female', 'Unknown'],
            data: [40, 35, 25],
            backgroundColor: [
              'blue',
              'red',
              'green',
              
            ],
            hoverOffset: 5,
            borderRadius:10,
            spacing:10,
          
          },
        ],
    },
    options:{
        cutout:115,
    }
    };

    const handleChange = (e) =>{
        setData(e.target.value)
    }

  return (
    <div>
    <Paper   elevation={10}>
    Ad Insights
    <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={0}
    label="Age"
    onChange={handleChange}
  >
    <MenuItem value={40}>Male</MenuItem>
    <MenuItem value={35}>Female</MenuItem>
    <MenuItem value={30}>Unknown</MenuItem>
  </Select>
    </Paper>
    <Paper elevation={0} style={paperStyle} >
      <div style={{position:'relative', top:200, left:230}}>
      {data && <Typography  >{data}%</Typography>}
      </div>
       <Doughnut 
        {...config} style={options} >

        </Doughnut>
          
        <Paper elevation={0}>
            <span>
            <input  style={{borderRadius:'50px',background:'blue',width:'20%' }}/>40% Fmeale
            </span><br />
            <span>
            <input  style={{borderRadius:'50px',background:'red',width:'20%' }}/>35% Male
            </span><br />
            <span>
            <input  style={{borderRadius:'50px',background:'green',width:'20%' }}/>25% Unknown
            </span>
        </Paper>
    </Paper>
    </div>
  )
}

export default GraphSample



  const paperStyle = {
    marginTop: '1rem',
    width:'60%',
    height:'60%',
    display: 'flex',
    justifyContent: 'space-between',
 
  };

  const options = {
    width:'25%',
    height:'38%',
  }

  
