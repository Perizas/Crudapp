import React from 'react';
import { useForm } from "react-hook-form";


const AddUserForm = (props) => {

    const { register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = (data,e) => {
        console.log(data)
        props.addUser(data);
        e.target.reset(data);
        };

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nombres</label>
        <input type="text" name="name"{...register("name", {
            required: "Requerido"
          })}/>
          <div>
          {errors.name&& errors.name.name}
          </div>
          <label>Apellidos</label>
          <input type="text" name="username"{...register("username", {
            required: "Requerido"
          })}/>
          <div>
          {errors.username && errors.username.username}
          </div>
          <label>Sexo</label>
          <input type="text" name="sex"{...register("sex", {
            required: "Requerido"
          })}/>
          <div>
          {errors.sex && errors.sex.sex}
          </div>
        <button>Add new user</button>
      </form>
    )
}

export default AddUserForm;