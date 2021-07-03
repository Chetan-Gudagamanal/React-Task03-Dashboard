import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom"




export default function UserList({users,setCurrentUser}){
    const useStyles = makeStyles((theme) => ({
        large: {
          width: theme.spacing(8),
          height: theme.spacing(8),
        },
      }));
      const classes = useStyles();
      
    return(
        <>
        {users.map((user)=>{
            return(
                <Container>
                <Card>
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe" src={user.avatar} className={classes.large}>
                            R
                        </Avatar>
                        }
                        title={user.name}
                        //  subheader={(new Date(user.createdAt)).toString()}
                        subheader={new Date(user.createdAt).toDateString()}
                    />
                     <Link to={`/profile/${user.id}`}><Button variant="contained">View Profile</Button></Link>
                    <Link to={`/edit-user/${user.id}`}><Button variant="contained">Edit Profile</Button></Link>
                    <Button variant="contained" color="primary" onClick={()=>{setCurrentUser(user)}}>Set as current User</Button>
                    {/* <Link to={`/profile/${user.id}`}><button>view profile</button></Link>
                    <Link to={`/edit-user/${user.id}`}><button>edit profile</button></Link>
                    <button onClick={()=>{setCurrentUser(user)}}>Set as current User</button> */}
                </Card>
                <br/>
                </Container>
            )
        })}
        </>
    )
}