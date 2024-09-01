"use client";
import { useAuthContext } from "@/context/use-auth-context";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import TypeSelection from "./type-selection-form";
import dynamic from "next/dynamic";
import { Spinner } from "@/components/spinner";

type Props = {};

const DetailForm = dynamic(() => import("./account-details-form"), {
  ssr: false,
  loading: Spinner,
});

const RegistrationFormStep = (props: Props) => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();
  const { currentStep } = useAuthContext();
  const [onOTP, setOnOTP] = useState("");
  const [onUserType, setOnUserType] = useState<"owner" | "student">("owner");
  setValue("otp", onOTP);
  switch (currentStep) {
    case 1:
      return (
        <TypeSelection
          register={register}
          userType={onUserType}
          setUserType={setOnUserType}
        />
      );
    case 2:
      return <DetailForm />;
    case 3:
  }
  return <div>registration.-step</div>;
};

export default RegistrationFormStep;
