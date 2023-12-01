
import { Card, CardActionArea, CardContent, CardMedia, Checkbox, Typography } from '@mui/material';
import * as React from 'react';

const styles={
    
    borderRadius:'5px',
    boxShadow: '1px 5px 10px rgb(250,248, 251)'
}



const AdsContent = ({data, onChangeCheckBox}) => {
    const [isChecked, setIsChecked] = React.useState(false);

    const hancdleChange = () =>{
        setIsChecked(!isChecked);
        onChangeCheckBox(!isChecked);
    }
    
  return (
       <Card  sx={{ maxWidth: 345 }} style={styles} onClick={hancdleChange}>
      <CardActionArea>
        <Checkbox checked={isChecked}  />
        <CardMedia
          component="img"
          height="480"
          image={data.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography justifyContent='center' gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default AdsContent
