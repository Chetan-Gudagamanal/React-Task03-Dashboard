
import React from 'react';
import {Link} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import EditIcon from '@material-ui/icons/Edit';
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function UserProfile({useParams, users}) {
    const {id}=useParams()
    const selectedUser=users.filter((user)=>{
        return user.id==id
    })
  const classes = useStyles();

  return (
    <Container className="centeredContainer">
        <h1>{console.log(selectedUser[0])}</h1>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
            <Link to={`/edit-user/${id}`}>
          <IconButton aria-label="settings">
            <EditIcon/> <span style={{fontSize:"0.6em"}}>Edit Profile</span>
          </IconButton>
          </Link>
        }
        title={selectedUser[0]["name"]}
        subheader={new Date(selectedUser[0]["createdAt"]).toDateString()}
      />
      <CardMedia
        className={classes.media}
        image={selectedUser[0]["avatar"]}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Avatar Link:
        </Typography>
      </CardContent>
      
    </Card>
    </Container>
  );
}