import React from 'react'
import { useForm } from '../../hooks/useForm'

export const LoginScreen = () => {

    const [{email, password}, handleInputChange] = useForm({
        email: '',
        password: ''
    })

    return (
        <div>
            <h1>LoginScreen</h1>
        </div>
    )
}
