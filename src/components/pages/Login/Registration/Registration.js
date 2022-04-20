import React, { useState } from 'react';
import './Registration.css';
import register from '../../../../images/register.jpg';
import useFirebase from '../../../hooks/useFirebase';

const Registration = () => {
    const {users, createUser} = useFirebase();
    const [createData, setCreateData] = useState([]);
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newUserData = {...createData}
        newUserData[field] = value;
        setCreateData(newUserData);
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        createUser(createData.displayName, createData.email, createData.password)
    }


    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <img width="100%" src={register} alt="" />
                </div>
                <div className="col-md-6 registration-form-style">
                    <h1 className='text-center mt-5 mb-5'>Please Registration</h1>
                    <form onSubmit={handleOnSubmit}>
                        <label htmlFor="text">Enter Full Name</label>
                        <input onBlur={handleOnBlur} type="text" name="displayName" id="" placeholder='John' />
                        <label htmlFor="email">Enter Your Email</label>
                        <input onBlur={handleOnBlur} type="email" name="email" id="" placeholder='john@user.com'/>
                        <label htmlFor="password">Enter Your Password</label>
                        <input onBlur={handleOnBlur} type="password" name="password" id="" placeholder='Enter Your secret code' />
                        <div>
                        <input type="submit" value="Register" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;