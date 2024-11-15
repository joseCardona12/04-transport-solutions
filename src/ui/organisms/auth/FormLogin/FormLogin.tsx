"use client";

import { ILoginRequest } from "@/app/core/application/dto/auth";
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


  const handleLogin = async({ email, password }: ILoginRequest): Promise<void> => {
    console.log(email, password);
    const response = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    
    if(!response?.ok){
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
    /*const getNameSeparate = Util.separateName(email);
    inputAlert(`Bienvenido ${getNameSeparate}`, "success");
    router.push("/dashboard"); */

  };
  return (
    <div className="content-form">
      <form className="form" onSubmit={handleSubmit(handleLogin)}>
        <div className="form-title">
            <h2 className="form-login-title">Iniciar sesión</h2>
            <p>Ingresa tus credenciales para acceder a tu cuenta</p>
        </div>
        <FormField<ILoginRequest>
          control={control}
          label="Email"
          name="email"
          type="email"
          placeholder="tu@gmail.com"
          id="email"
          error={errors.email}
        />
        <FormField<ILoginRequest>
          control={control}
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password"
          id="password"
          error={errors.password}
        />
        <Button className="button-login">Iniciar sesión</Button>
        <div className="form-separator">
            <Link className="separator-password" href="/forgot-password">¿Olvidaste tu contraseña</Link>
            <p>¿No tienes una cuenta? <Link className="separator-register" href="/register">Registrate aquí</Link></p>
        </div>
      </form>
    </div>
  );
}