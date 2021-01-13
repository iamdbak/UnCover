//import React from 'react';
import React,{ useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import cardImg from '../src/img/virgin-logo.png';

const useStyles = makeStyles({
  root: {
    maxWidth: 260,
    borderRadius: 20, 
    margin : "auto",
  },
  // media: {
  //   height: 100,
  // },
  italic: {
    fontStyle : "italic",
  }
});

let MediaCard = () => 
{ 
  // state = {
  //   img : {cardImg},
  //   companyRepName: '',
  //   companyMsg: ''
  // }
  const classes = useStyles();
  const [img, setImg] = useState(cardImg);
  const [companyRepName, setCompanyRepName] = useState('Testing Rep Name');
  const [companyMsg, setCompanyMsg] = useState('Company description');

  return (
    <Card className={classes.root}>
      <CardActionArea>
      <CardMedia
          component= "img" 
          alt="Virgin Logo"
          height="140"
          image= {img}
          title="Virgin Logo"
        />
        <CardContent>
          <Typography className={classes.italic} gutterBottom variant="h5" component="h2">
            {companyRepName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {companyMsg}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="tiny" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
  );
 }

export default MediaCard;