import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Register() {
    let { register, handleSubmit } = useForm()
    let navigate = useNavigate();
    let [err, setErr] = useState(null)
    function handleFormSubmit(formObj) {
        //console.log(formObj)
        //make HTTP Post REquest
        fetch('http://localhost:3000/users',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formObj)
            })
            .then(res => {
                if (res.status === 201) {
                    navigate('/login')
                }
                else {
                    setErr({ message: err.message })
                }
            })
            .catch(err => setErr({ message: err.message }))

    }
    return (
        <div>
            <h1 className='text-center text-warning'>Register</h1>
            {
                //user reg error msg
                err !== null && <p className='text-danger fs-1 text-center '>{err.message}</p>
            }
            <form action="" onSubmit={handleSubmit(handleFormSubmit)}>
                <label htmlFor="">UserName</label>
                <input type="text" id="text" placeholder='username' {...register('name')} required />
                <label htmlFor="">PassWord</label>
                <input type="password" {...register('password')} id="" placeholder='password' required />
                <label htmlFor="">E-mail</label>
                <input type="email" id="email" placeholder='email' {...register('email')} required /> <br />
                <button className='btn btn-success'>CLICK!!!</button>
            </form>
            <p>Already Registered!!
                <Link to='/login'>Login</Link>
            </p>
        </div>
    )
}

export default Register
