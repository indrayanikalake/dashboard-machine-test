import React, { useState } from 'react'
import {useForm, FormProvider} from 'react-hook-form';
import FormInput from './CustomTextField';
import { Button, Grid, Paper, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';


const UserInfo = () => {
    const navigate = useNavigate()
     const methods = useForm();
     const [openSnackbar, setOpenSnackbar] = useState(false);

     const handleSubmit = () =>{
      setOpenSnackbar(true);

      setTimeout(() => {
      setOpenSnackbar(false);
      navigate('/Ads')
      }, 600); 

     }

  return (
    <>
      <Typography variant='h3' gutterBottom>Create Text & Media</Typography>
    <FormProvider {...methods}>
       <form className='form'>
         <Grid container spacing={3}>
            <FormInput required name='Heading 01' label='Heading 01' />
            <FormInput  name='Heading 02' label='Heading 02' />
            <FormInput required name='Description' label='Description 01'/>
            <FormInput required name='Landscape Marketing Image(1.9:1)' label='Landscape Marketing Image(1.9:1)'/>
            <FormInput required name='Portrait Marketing Image(4:5)' label='Portrait Marketing Image(4:5)'/>
            <FormInput required name='Square Marketing Image(1:1)' label='Square Marketing Image(1:1)'/>
            <FormInput required name='Video URL' label='Video URL'/>
            <FormInput required name='Business Name' label='Business name' />
            <FormInput  name='Button Label' label='Button Label' />
            <FormInput required name='Website URL' label='Website Url' />
           
         </Grid>
         <br />
         <div className='button_style'>
            <Button component={Link} to='/Ads' variant='outlined'>Back</Button>
             <Button variant='contained' onClick={handleSubmit}>Submit</Button>
             
       </div>
       
      {openSnackbar && (
      <Paper style={paperStyle} justifyContent='center' elevation={5}>
        <CIcon icon={icon.cilCheckAlt} style={styles} size="sm"/>
      <Typography variant='h6'>Submitted !</Typography>
        </Paper>)}
       </form>
    </FormProvider>
    </>
  )
}

export default UserInfo


const paperStyle={
    position:'absolute',
    top:'30%',
    left:'30%',
   width:'30%',
   height:'50%',
   display:'flex',
   flexDirection:'column',
   justifyContent:'center',
   alignItems:'center',
   zIndex:'1',
}

const styles={
    width:'4%',
    heght:'4%'
}
