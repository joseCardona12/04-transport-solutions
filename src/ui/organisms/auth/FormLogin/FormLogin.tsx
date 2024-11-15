"use client";

import { FormField } from "@/ui/molecules";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, inputAlert } from "@/ui/atoms";
import Link from "next/link";
import "./formLoginStyles.scss";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ILoginRequest } from "@/app/core/application/dtos/auth/loginRequestDto";
import Identify from "@/ui/atoms/Identify/Identify";
import { IconEye, IconLock } from "@/assets/icons";
import { UtilApplication } from "@/app/core/application/utils";

const loginSchema = yup.object().shape({
  email: yup.string().email("Email is Incorrect").required("Email is Required"),
  password: yup
    .string()
    .required("Password is Required")
    .max(12, "Password must be less than 12 characters")
    .min(3, "Password must be more than 3 characters"),
});

export default function FormLogin(): React.ReactNode {

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


  const handleLogin = async ({ email, password }: ILoginRequest): Promise<void> => {
    const response = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (!response?.ok) {
      setError("email", {
        type: "manual",
        message: "Credenciales incorrectas",
      });
      setError("password", {
        type: "manual",
        message: "Credenciales incorrectas",
      });
      inputAlert("Credenciales incorrectas", "error");
      return;
    }
    const getNameSeparate = UtilApplication.separateName(email);
    inputAlert(`Bienvenido ${getNameSeparate}`, "success");
    router.push("/dashboard"); 

  };
  return (
    <div className="content-form">
      <form className="form" onSubmit={handleSubmit(handleLogin)}>
        <Identify
          icon={<img src="/icons/cartIcon.svg" alt="cartIcon" />}
          logoText="Transport Solutions S.A"
        />
        <div className="content-info">
          <h5 className="info">Inicia sesiòn en tu cuenta y gestiona tu flota de vehìculos</h5>
        </div>
        <FormField<ILoginRequest>
          control={control}
          label="Correo electrònico"
          name="email"
          type="email"
          placeholder="tuempresa@dominio.com"
          id="email"
          error={errors.email}
        />
        <FormField<ILoginRequest>
          control={control}
          label="Contraseña"
          name="password"
          type="password"
          placeholder="Enter your password"
          id="password"
          error={errors.password}
        />
        <Button className="button-login">
          <IconLock />
          Iniciar sesiòn
        </Button>
        <div className="content-problems">
            <p className="problems">¿Problemas para iniciar sesiòn? Contacta al administrador del sistema</p>
        </div>
      </form>
    </div>
  );
}