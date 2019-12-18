import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  // root: {
  //     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  // },
  card: {
    maxWidth: 400,
  },
  media: {
    height: 500,
  },
});

function SingleMemberCard(props){
  const classes = useStyles();

  return (
    <Card className={classes.card} key={props.key}>
      <CardActionArea >
        <CardMedia 
          className={classes.media}
          image={props.avatar}
        />
        <CardContent className="cardStyle">
          <Typography gutterBottom variant="h5" component="h2">
            {props.firstName} {props.lastName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.email}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.shortBio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="cardActionsAreaButtons">
      {/* styles applied in _custom.scss */}
        <Button size="small" color="primary" href={props.gitHubLink} target="_blank">
          GitHub
        </Button>
        <Button size="small" color="primary"  href={props.linkedInLink} target="_blank">
          LinkedIn
        </Button>
      </CardActions>
    </Card>
  );
}

export default SingleMemberCard;