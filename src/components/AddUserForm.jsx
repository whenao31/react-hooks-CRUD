import React from 'react'
import {useForm} from 'react-hook-form';


const AddUserForm = (props) => {

    // Variables requeridas para el manejo de react-hook-form
    const { register, handleSubmit, setError, formState: { errors } } = useForm();

    const onSubmit = (data, event) => {
        // Adicionar datos del usuario obtenidos por el formulario
        // a la funcion addUser enviada por props.
        props.addUser(data);
        // console.log(data);
        event.target.reset();
    }

    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type="text" {...register("name", {required: true})} />
            {errors.name && <span className='block'>Name is required</span>}
            <label>Username</label>
            <input type="text" {...register("username", {required: true})} />
            {errors.name && <span className='block'>Username is required</span>}
            <button>Add new user</button>
        </form>
     );
}
 
export default AddUserForm;