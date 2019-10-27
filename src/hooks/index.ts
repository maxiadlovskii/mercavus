import React, { useState } from 'react'

export const useErrorList = () => {
    const [errors, setErrors] = useState([]);
    function addErrors(errors: any) {
        setErrors(errors)
    }
    function clearErrors() {
        setErrors([])
    }
    return {errors, addErrors, clearErrors}
}