"use client"

import { USER_LOGIN_FORM } from "@/costants/forms";
import React from "react";
import { FieldErrors, FieldValues, useFormContext, UseFormRegister } from "react-hook-form";
import FormGenerator from "../form-generator";

type Props = {
  // register: UseFormRegister<FieldValues>;
  // errors: FieldErrors<FieldValues>;
};
const LoginForm = (props: Props) => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <h2 className="text-gravel md:text-4xl font-bold"> Login </h2>
      <p className="text-iridium md:text-sm">Enter your email and password</p>
      {USER_LOGIN_FORM.map((filed) => (
        <FormGenerator
          key={filed.id}
          errors={errors}
          register={register}
          {...filed}
          name={filed.name}
        />
      ))}
    </>
  );
};

export default LoginForm;
