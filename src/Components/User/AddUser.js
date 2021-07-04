import "./AddUser.css";
import { useForm } from "react-hook-form";
import { Container } from "@material-ui/core";
import { useContext } from "react"
import {userContext} from '../../App'

export default function AddUser(){
  const {getUsers}=useContext(userContext)
    const {
        register,
        formState: { errors },
        handleSubmit
      } = useForm();
    
      const onSubmit = (data) => {
        fetch("https://609e2b8c33eed80017957ee5.mockapi.io/dashboard-users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ ...data, createdAt: new Date().toISOString() })
        })
          .then((res) => res.json())
          .then((res) => {
            if(res.id){
              alert("User is added successfully, Kindly verify in 'Users list' from left menu bar")
            }
            getUsers()
          });
      }
    
      return (
        <Container className="centeredContainer">
          <div className="MyForm">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1>Create New User</h1>
              <CustomNameInput
                label="name"
                register={register}
                errors={errors}
              />
              <CustomNameInput
                label="avatar"
                register={register}
                errors={errors}
              />
    
              <input type="submit" />
            </form>
          </div>
        </Container>
      );
}
function CustomNameInput({ label, register, errors }) {
    return (
      <>
        <label>{label}</label>
        <input
          placeholder={label}
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
  async function addUserFun(data){
        
    let userData = {
      name: data.name,
      avatar: data.avatar,
      createdAt: Date.now()
    };
    await fetch("https://609e2b8c33eed80017957ee5.mockapi.io/users", {
      method: "POST",
      body: JSON.stringify(userData)
    });
  
}