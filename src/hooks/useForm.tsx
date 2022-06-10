import React, { useState } from "react"

export const useForm = ( initialState: any ) => {
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const reset = () => {
    setFormValues(initialState)
  }

  return {
    formValues,
    handleChange,
    reset
  }
}