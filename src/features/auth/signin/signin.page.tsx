"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

// Schema && SchemaType
import { loginSchema, LoginSchema } from "./signin-schema";

// Components
import Label from "@/components/ui/label";
import SectionAuthTitle from "../components/section-title";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import FieldError from "@/components/field-error-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignin } from "./use-signin";
import { useEffect } from "react";
import { useToast } from "@/providers/toast-provider";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({ resolver: zodResolver(loginSchema) });

  const { onSubmit } = useSignin();
  const { showToast } = useToast();

  useEffect(() => {
    if (searchParams.get("redirected")) {
      showToast({
        type: "error",
        title: "Acesso necessário",
        duration: 4000,
        message:
          "Você precisa estar logado para acessar esta página. Faça login para continuar.",
      });

      router.replace("/auth/signin");
    }
  }, [searchParams, router, showToast]);

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col px-[1.25rem]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <SectionAuthTitle
        title="Entrar"
        description="Acesse sua conta e gerencie seu Rencard"
      />
      <fieldset className="self-center max-w-[34.8125rem] w-full">
        <legend className="sr-only">Login</legend>
        {/* Email field */}
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
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
        </motion.div>

        {/* Password field */}
        <motion.div
          className="flex flex-col mt-[2rem] mb-[1rem]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
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
        </motion.div>

        {/* Forgot password && Action button && Dont have account */}
        <motion.div
          className="flex flex-col space-y-[1.25rem]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Link
            href="/auth/forgot-password"
            className="self-end font-urbanist font-semibold text-[1.25rem] text-neutral-strong hover:underline hover:text-neutral-soft transition-colors duration-300"
          >
            Esqueci a senha
          </Link>

          <Button type="submit" variant="default" sizeH="xl">
            Entrar
          </Button>
        </motion.div>

        <motion.p
          className="text-center mt-[3.125rem] font-manrope text-neutral-strong"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Não tem uma conta?{" "}
          <Link
            href="/auth/signup"
            className="text-black underline font-semibold hover:text-neutral-strong transition-colors duration-300"
          >
            Criar conta
          </Link>
        </motion.p>
      </fieldset>
    </motion.form>
  );
}
