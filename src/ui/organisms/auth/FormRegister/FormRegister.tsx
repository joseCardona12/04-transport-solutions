"use client";

import { FormField } from "@/ui/molecules";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, inputAlert } from "@/ui/atoms";
import "../FormLogin/formLoginStyles.scss";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ILoginRequest } from "@/app/core/application/dtos/auth/loginRequestDto";
import Identify from "@/ui/atoms/Identify/Identify";
import { IconLock } from "@/assets/icons";
import { IRegisterRequest } from "@/app/core/application/dtos/auth";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email is Incorrect")
    .required("Email is Required"),
  password: yup
    .string()
    .required("Password is Required")
    .max(12, "Password must be less than 12 characters")
    .min(3, "Password must be more than 3 characters"),
  name: yup 
    .string()
    .max(12, "The name must be less than 12 characters")
    .min(3, "The name must be more than 3 characters")
});

export default function FormRegister(): React.ReactNode {

  const router = useRouter();

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(loginSchema),
  });


  const handleRegister = async ( data: IRegisterRequest): Promise<void> => {
    console.log(data);
  };
  return (
    <div className="content-form">
      <form className="form" onSubmit={handleSubmit(handleRegister)}>
        <Identify
          icon={<img src="/icons/cartIcon.svg" alt="cartIcon" />}
          logoText="Transport Solutions S.A"
        />
        <div className="content-info">
          <h5 className="info">Crear una cuenta y gestionar tu flota de vehículos</h5>
        </div>
        <FormField<IRegisterRequest>
          control={control}
          label="Correo electrònico"
          name="email"
          type="email"
          placeholder="tuempresa@dominio.com"
          id="email"
          error={errors.email}
        />
        <FormField<IRegisterRequest>
          control={control}
          label="Contraseña"
          name="password"
          type="password"
          placeholder="Enter your password"
          id="password"
          error={errors.password}
        />
        <FormField<IRegisterRequest>
          control={control}
          label="Name"
          name="name"
          type="text"
          placeholder="Enter your name"
          id="name"
          error={errors.name}
        />
        <Button className="button-login">
          <IconLock />
          Crear cuenta
        </Button>
        <div className="content-problems">
            <p className="problems">¿Problemas para crear una cuenta? Contacta al administrador del sistema</p>
        </div>
      </form>
    </div>
  );
}