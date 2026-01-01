"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";

// Schema && SchemaType
import { loginSchema, LoginSchema } from "./signin-schema";

// Components
import Label from "@/components/ui/label";
import SectionAuthTitle from "../components/section-title";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import FieldError from "@/components/field-error-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "./use-signin";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({ resolver: zodResolver(loginSchema) });
  const { onSubmit } = useLogin();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col px-[1.25rem]"
    >
      <SectionAuthTitle
        title="Entrar"
        description="Acesse sua conta e gerencie seu Rencard"
      />
      <fieldset className="self-center  max-w-[34.8125rem] w-full">
        <legend className="sr-only">Login</legend>
        {/* Email field */}
        <div className="flex flex-col ">
          <Label htmlFor="email" variant="auth" error={!!errors.email}>
            Email
          </Label>
          <Input
            id="email"
            type="email"
            variant="default"
            sizeH="xl"
            error={!!errors.email}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            required
            {...register("email")}
            placeholder="Digite seu e-mail"
          />
          {errors.email && (
            <FieldError id="email-error" message={errors.email.message} />
          )}
        </div>

        {/*  Password field */}
        <div className="flex flex-col mt-[2rem] mb-[1rem]">
          <Label htmlFor="password" variant="auth" error={!!errors.password}>
            Senha
          </Label>
          <Input
            id="password"
            type="password"
            variant="default"
            sizeH="xl"
            error={!!errors.password}
            aria-invalid={!!errors.password}
            aria-describedby={errors.password ? "email-error" : undefined}
            required
            {...register("password")}
            placeholder="Digite sua senha"
          />

          {errors.password && (
            <FieldError id="email-error" message={errors.password.message} />
          )}
        </div>

        {/* Forgot password && Action button && Dont have account  */}
        <div className="flex flex-col space-y-[1.25rem]">
          <Link
            href="/auth/forgot-password"
            className="self-end font-urbanist font-semibold text-[1.25rem] text-neutral-strong hover:underline hover:text-neutral-soft transition-colors duration-300 "
          >
            Esqueci a senha
          </Link>

          <Button variant="default" sizeH="xl">
            Entrar
          </Button>
        </div>

        <p className="text-center mt-[3.125rem] font-manrope text-neutral-strong">
          Não tem uma conta?{" "}
          <Link
            href="/auth/signup"
            className="text-black underline font-semibold hover:text-neutral-strong transition-colors duration-300"
          >
            Criar conta
          </Link>
        </p>
      </fieldset>
    </form>
  );
}
