import { USER_REGISTRATION_FORM } from "@/costants/forms";
import { UserRegistrationProps } from "@/schemas/auth-schema";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import FormGenerator from "../form-generator";

type Props = {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
};

const AccountDetailsForm = ({ errors, register }: Props) => {
  return (
    <>
      <h2 className="text-gravel md:text-4xl font-bold"> Account Details</h2>
      <p className="text-iridium md:text-sm">Enter your email and password</p>
      {USER_REGISTRATION_FORM.map((filed) => (
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

export default AccountDetailsForm;
