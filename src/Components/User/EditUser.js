
import "./AddUser.css";
import { useForm } from "react-hook-form";
import { Container } from "@material-ui/core";
import { useContext } from "react"
import {userContext} from '../../App'

export default function EditUser(){
    const {useParams,users,getUsers,currentUser} = useContext(userContext)
    const {id}=useParams()
    const editUser= users.filter((user)=>{
        return user.id==id;
    })
    //to  check if user is current user
    let currentUserFlag=currentUser.id==editUser[0].id;
    const {
        register,
        formState: { errors },
        handleSubmit
      } = useForm();
    
      const url=`https://609e2b8c33eed80017957ee5.mockapi.io/dashboard-users/${editUser[0].id}`
      const onSubmit = (data) => {
        fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ ...data })
        })
          .then((res) => res.json())
          .then((res) => {
            if(res.id==editUser[0].id){
              alert("User has been updated successfully, Kindly verify in 'Users list' from left menu bar")
            }
            getUsers({updateCurrentUser:currentUserFlag,id:editUser[0].id})
        });
      }
    
      return (
        <Container className="centeredContainer">
          <div className="MyForm">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1>Edit User</h1>
              <CustomNameInput
                label="name"
                register={register}
                errors={errors}
                defaultValue={editUser[0].name}
              />
              <CustomNameInput
                label="avatar"
                register={register}
                errors={errors}
                defaultValue={editUser[0].avatar}
              />
    
              <input type="submit" value="update user"/>
            </form>
          </div>
        </Container>
      );
}
function CustomNameInput({ label, register, errors,defaultValue }) {
    return (
      <>
        <label>{label}</label>
        <input
          placeholder={label}
          defaultValue={defaultValue}
          {...register(label, {
            required: true,
            minLength: 3
          })}
        />
        {errors[label] && errors[label].type === "required" && (
          <p style={{ color: "red" }}>This input is required</p>
        )}
  
        {errors[label] && errors[label].type === "minLength" && (
          <p style={{ color: "red" }}>Min Length should be 3</p>
        )}
      </>
    );
  }
  