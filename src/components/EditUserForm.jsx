import React from 'react'
import {useForm} from 'react-hook-form';


const EditUserForm = (props) => {

    // Variables requeridas para el manejo de react-hook-form
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        defaultValues: props.currentUser
    });

    setValue('name', props.currentUser.name);
    setValue('username', props.currentUser.username);

    const onSubmit = (data, event) => {
        // Actualizar usuario de id que viene por props.currentUser
        // con los datos obtenidos por el formulario
        data.id = props.currentUser.id;
        props.updateUser(props.currentUser.id, data);
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
            <button>Edit user</button>
        </form>
     );
}
 
export default EditUserForm;