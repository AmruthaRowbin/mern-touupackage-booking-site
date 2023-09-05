import React, { useState, useEffect } from 'react'
import { MDBCard, MDBCardBody, MDBInput, MDBCardFooter, MDBValidation, MDBBtn, MDBIcon, MDBSpinner, MDBValidationItem } from "mdb-react-ui-kit"
import { Link, useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { login } from '../../redux/features/authSlice'



const initialState = {
    email: "",
    password: ""
}

const AgentLogin = () => {
    const [formValue, setFormValue] = useState(initialState)
    const { loading, error } = useSelector((state) => ({ ...state.auth }))
    const { agent } = useSelector((state) => ({ ...state.auth.agent }))
    const { email, password } = formValue
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        console.log("Agent state:", agent)
        error && toast.error(error);
    }, [error]);


    const handleSubmit = (e) => {
        e.preventDefault()
        if (email && password) {
            dispatch(login({ formValue, navigate, toast }))
        }

    }

    // if (agent) {
    //     navigate('/agent/Home')
    // }

    const onInputChange = (e) => {
        let { name, value } = e.target
        setFormValue({ ...formValue, [name]: value })

    }
    return (
        <div style={{ margin: "auto", padding: "15px", maxWidth: "450px", alignContent: "center", marginTop: "120px" }}>

            <MDBCard alignment='center'>
                <MDBIcon fas icon='user-circle' className='fa-2x'>
                    <h5>Sign In</h5>
                </MDBIcon>
                <MDBCardBody>
                    <MDBValidation onSubmit={handleSubmit} noValidate className='row g-3'>
                        <div className='col-md-12'>
                            <MDBValidationItem feedback="please enter your email" invalid>
                                <MDBInput
                                    label="Email"
                                    type="email"
                                    value={email}
                                    name="email"
                                    onChange={onInputChange}
                                    required

                                    validation="please provide your email"

                                />
                            </MDBValidationItem>
                        </div>
                        <div className='col-md-12'>
                            <MDBValidationItem feedback="please enter your password" invalid>
                                <MDBInput
                                    label="password"
                                    type="password"
                                    value={password}
                                    name="password"
                                    onChange={onInputChange}
                                    required

                                    validation="please provide your password"

                                />
                            </MDBValidationItem>
                        </div>

                        <div className='col-12'>
                            <MDBBtn style={{ width: "100%" }} className='mt-2'>
                                {
                                    loading && (
                                        <MDBSpinner
                                            size="sm"
                                            role="status"
                                            tag="span"
                                            className="me-2"
                                        />
                                    )
                                }
                                Login


                            </MDBBtn>
                        </div>



                    </MDBValidation>
                </MDBCardBody>
                <MDBCardFooter>
                    <Link to="/agent/register">

                        <p>Don't have an account ? Sign Up</p>
                    </Link >
                </MDBCardFooter>
            </MDBCard>
        </div>
    )
}

export default AgentLogin