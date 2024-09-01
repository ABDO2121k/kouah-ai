import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

type Props={
    register:UseFormRegister<FieldValues>
    errors:FieldErrors<FieldValues>
}


const AccountDetails = () => {
  return (
    <div>AccountDetails</div>
  )
}

export default AccountDetails