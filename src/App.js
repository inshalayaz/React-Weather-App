import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//import Search from './components/Search'
import HeroContent from './components/HeroContent'
import Header from './components/Header'
import WeatherCard from './components/WeatherCard'
import { Button, TextField } from '@material-ui/core'
import { useState } from 'react'
import Axios from 'axios'
import {WeatherContext} from './context/WeatherContext'
const KEY =  'b733434efc3b4f5b840112510212304'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  WeatherCard: {
    paddingLeft: 100
  }

}));

export default function CenteredGrid() {
  const classes = useStyles();
  const [city, setCity] = useState('')
  const [data, setData] = useState([])


 

    const getData = async ()=>{
      await Axios.get(`http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}`)
      .then(
        res =>{
          const weatherData = res.data
         setData(weatherData)
        }
      )
    }
    const checkWeather = ()=>{
      getData()
    }
    

  

  return (
    <div className={classes.root}>
      <WeatherContext.Provider value={{data}} >
      <Grid container 
      
      justify="center"
      alignItems="center" 
  >
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Header />
          </Paper>
        </Grid>
        <Grid item xs={12}>
            <HeroContent />
        </Grid>
        <Grid item xs={12}>
        <TextField label="Search Weather" margin="normal" variant="outlined" fullWidth value={city} onChange={
            (e) => setCity(e.target.value)
          } />
          <Button onClick={ checkWeather } color='primary' variant='contained' fullWidth > Check Weather </Button>
        </Grid>
        
        <Grid item xs={12} className='weatherCard'  >
          <WeatherCard />
        </Grid>
      </Grid>
      </WeatherContext.Provider>
    </div>
  );
}
