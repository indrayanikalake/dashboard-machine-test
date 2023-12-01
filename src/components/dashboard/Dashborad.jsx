import { Grid, Paper } from '@mui/material'
import React, { useState } from 'react'
import TableSample from './tableSample/TableSample'
import { rows, rows2 } from '../../data/data'
import GraphSample from './graphSample/GraphSample'
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';

const Dashborad = () => {
    const [toggle, setToggle] =  useState(true);
  return (
    <div style={{margin:'2rem 2rem'}}>
      <Grid container justifyContent='center' spacing={2}>
         <Grid item xs={12} sm={6} md={6} lg={6}>
           <TableSample rows={rows} />
         </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
           {toggle ?<GraphSample  /> : <TableSample rows={rows2} />}
           <Paper elevation={0} style={iconStyle}>
             <CIcon icon={icon.cibAnaconda} style={{height:'2.5vh'}} size="sm" onClick={()=>setToggle(true)} /> 
             <CIcon icon={icon.cibAmericanExpress} style={{height:'2.5vh'}} size="sm" onClick={()=>setToggle(false)}/>
           </Paper>
         </Grid>
      </Grid>
    </div>
  )
}

export default Dashborad




const iconStyle = {
    cursor:'pointer',
    margin:'0.5rem 0',
    height:'2.5vh',
    width:'100%', 
    display:'flex', 
    justifyContent:'flex-end',
    alignItems:'flex-end'
}
