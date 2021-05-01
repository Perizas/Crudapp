import React from 'react';
import { useForm } from "react-hook-form";


const EditUserForm = (props) => {

    console.log(props.newuser)
    const { register, handleSubmit, setValue, formState: { errors }} = useForm({ defaultValues: props.newuser});

    setValue('name', props.newuser.name);
    setValue('username', props.newuser.username);
    setValue('sex', props.newuser.sex);

    const onSubmit = (data,e) => {
        console.log(data)
        data.id = props.newuser.id
        props.updatedUser(props.newuser.id, data)

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
        <button>Editar Usuarios</button>
      </form>
    )
}

export default EditUserForm;