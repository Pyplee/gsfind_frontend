"use client";
import React from "react";
import { useForm, FieldValues, UseFormReturn, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Define the form schema using Zod
const schema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

type FormInputs = z.infer<typeof schema>;

function MainComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    // Handle form submission
    console.log("Form submitted:", data);
  };

  return (
    <div className="min-h-screen flex">
      <div className="flex-1 bg-[#2e3138] flex flex-col items-start p-4">
        {/* <img
          src="/path-to-logo.png"
          alt="GSfind logo"
          className="h-[40px] mb-4"
        />
        <img
          src="/path-to-your-image.jpg"
          alt="abstract background"
          className="flex-grow object-cover"
        /> */}
      </div>
      <div className="flex-1 bg-[#383b42] p-8 flex flex-col items-center justify-center">
        <h2 className="text-white font-bold text-2xl mb-6">Вход в аккаунт</h2>
        <p className="text-white mb-4">
          Нет аккаунта?{" "}
          <a href="#" className="text-[#ff8300]">
            Регистрация
          </a>
        </p>
        <form className="w-1/2 space-y-4">
          <div>
            <label className="block text-white mb-1" htmlFor="email">
              Почта
            </label>
            <input
              type="email"
              id="email"
              className={`w-full px-4 py-2 rounded-md bg-[#ffffff] border-2 border-gray-200 focus:ring ${
                errors.email? "border-red-500" : ""
              }`}
              {...register("email")}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email.message}</span>
            )}
          </div>
          <div>
            <label className="block text-white mb-1" htmlFor="password">
              Пароль
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                className={`w-full px-4 py-2 rounded-md bg-[#ffffff] border-2 border-gray-200 focus:ring ${
                  errors.password? "border-red-500" : ""
                }`}
                {...register("password")}
              />
              {errors.password && (
                <span className="text-red-500 text-sm">{errors.password.message}</span>
              )}
              <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                <img
                  className="fas fa-eye"
                  src="/eye_show.svg"
                  alt="Show/hide password btn"
                  width="25px"
                  height="25px"
                />
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#ff8300] text-white py-2 rounded-md"
            onClick={handleSubmit(onSubmit)}
          >
            Войти
          </button>
        </form>
        <div className="w-1/2 my-4 flex items-center justify-center text-white">
          или
        </div>
        <div className="w-1/2 space-y-4">
          <button className="w-full bg-white text-black flex items-center justify-center py-2 rounded-md">
            <img
              className="fab fa-github mr-2"
              src="/github_logo.svg"
              alt="Github logo"
              width="25px"
              height="25px"
            />
            Войти через github
          </button>
          <button className="w-full bg-gray-400 text-white py-2 rounded-md">
            Зарегистрироваться
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;