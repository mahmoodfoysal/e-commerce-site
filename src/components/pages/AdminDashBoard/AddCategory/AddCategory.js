import React from 'react';
import { useForm } from "react-hook-form";

const AddCategory = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/category', {
            method:'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
                alert('Successfully Category added');
                reset();
            }
        })
        console.log(data)};

    
    return (
        <div>
            <h2>Please add a category</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("categoryName", { required: true})} />
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddCategory;