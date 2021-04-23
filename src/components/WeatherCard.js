import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import { useContext } from 'react'
import { WeatherContext } from '../context/WeatherContext'
import AcUnitIcon from '@material-ui/icons/AcUnit';



const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
 
});



export default function Weather() {
  const classes = useStyles();

  function formatDate(date){
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString([],options);
  }

  const {data} = useContext(WeatherContext)
  

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography color="textSecondary" gutterBottom variant='h4' align='center'>
        { data.location.name },{data.location.country}
        </Typography>
        <Typography color="textSecondary" gutterBottom variant='h6' align='center' > 
          {formatDate(data.current.last_updated)}
        </Typography>

{  data.current.feelslike_c > 26? <Brightness5Icon style={{ fontSize: 50,marginLeft: 640, color:'orange' }} align='center' /> :
    <AcUnitIcon style={{ fontSize: 50,marginLeft: 640, color: 'blue' }} align='center' />

        }
        <Typography color="textSecondary" gutterBottom variant='h6' align='center' > 
        {data.current.feelslike_c}°C
        </Typography>
        <Typography color="textSecondary" gutterBottom variant='h6' align='center' > 
        {data.current.condition.text}
        </Typography>
        
      </CardContent>
    </Card>
  );
}
