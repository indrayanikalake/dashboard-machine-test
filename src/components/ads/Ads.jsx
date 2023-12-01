import {  Button, Grid, Paper, Typography } from '@mui/material'
import React, {useState} from 'react'
import AdsContent from './adContent/AdsContent'
import { content } from '../../data/data'
import { useNavigate } from 'react-router-dom'

const Ads = () => {
    const [checked, setChecked] = useState(false)
    const navigate = useNavigate();

    const handleCheckBox = (isChecked) =>{
            setChecked(isChecked);
    }
 
    const handleNextPage = () =>{
        if(checked === true)navigate('/userInfo')
      
 
    }

  return (

    <Paper elevation={10}  style={styles}>
       
        <Typography variant='h4'>Create Ads</Typography>
   <Grid  container justifyContent='center' spacing={2} >
    
     {content.map((c,idx)=>(
    <Grid key={idx} item xs={12} sm={4} md={4} lg={4}  >
      <AdsContent  data={c} onChangeCheckBox={handleCheckBox} />
    </Grid>
     ))}
   
   </Grid>
   <div />
    <Typography  variant='h4' textAlign='center' >Please Select Ad</Typography>
    <div className='button_style'>
   <Button  variant="contained" onClick={handleNextPage}>Next</Button>
   </div>
   </Paper>
  )
}

export default Ads




const styles = {
    width:'90%',
    margin:'2rem 2rem ',
    borderRadius:'2px', 
}


