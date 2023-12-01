import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography } from '@mui/material';
import React, {useState} from 'react';
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';

const TableSample = ({rows}) => {
    const [data, setData] = useState(rows);
     const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    
    const total ={
    name:"Total", 
    clicks:rows.reduce((a,e)=> e.clicks+a,0), 
    costs:rows.reduce((a,e)=>a+Number(e.costs.split(' ')[1]),0), 
    conversions:rows.reduce((a,e)=>a+e.conversions,0), 
    revenue: rows.reduce((a,e)=>a+Number(e.revenue.split(' ')[1]),0)  
  }

    //sorting low to high
    const sortAscData = () =>{
     const sortedData = [...data].sort((a, b) => a.costs.split(' ')[1] - b.costs.split(' ')[1]);
      console.log(sortedData)
       setData(sortedData);
    }

    //sorting high to low
    const sortDscData =  () =>{
      console.log('>>>')
      const updatedData =  [...data].sort((a,b)=>b.costs.split(' ')[1] - a.costs.split(' ')[1]);
      console.log(updatedData);
        setData(updatedData)
    }

  return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
        
            <TableRow
             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell  className='display_row'>
              <Typography variant='h6'>Ad Insights</Typography> 
              <div className='display'>
              <CIcon icon={icon.cilChevronTop} style={styles} size="sm"
                onClick={sortAscData}
                onMouseEnter={()=>setIsHovered1(true)}
                onMouseLeave={()=>setIsHovered1(false)} />
            
               <Tooltip title="Low to High" open={isHovered1} placement="left"></Tooltip>
              
              <CIcon icon={icon.cilChevronBottom} style={styles} size="sm"
               onClick={sortDscData}
               onMouseEnter={()=>setIsHovered2(true)}
               onMouseLeave={()=>setIsHovered2(false)} />
              
              <Tooltip title="High to Low" open={isHovered2} placement="left"></Tooltip>
              </div>
               </TableCell>
            </TableRow>
        
        </TableBody>
      </Table>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Campaigns </TableCell>
            <TableCell align="right">Clicks</TableCell>
            <TableCell align="right">Cost</TableCell>
            <TableCell align="right">Conversions</TableCell>
            <TableCell align="right">Revenue</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.clicks}</TableCell>
              <TableCell align="right">{row.costs}</TableCell>
              <TableCell align="right">{row.conversions}</TableCell>
              <TableCell align="right">{row.revenue}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> 
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
        
            <TableRow
              key={total.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {total.name}
              </TableCell>
              <TableCell align="right">{total.clicks}</TableCell>
              <TableCell align="right">USD {total.costs}</TableCell>
              <TableCell align="right">{total.conversions}</TableCell>
              <TableCell align="right">USD {total.revenue}</TableCell>
            </TableRow>
        
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableSample



const styles = {
  cursor:'pointer',
  width:'2%',
  height:'1%'
}

