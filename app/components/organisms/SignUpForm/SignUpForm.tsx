'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

import Button from '../../atoms/Button/Button';
import Error from '../../atoms/Error/Error';

interface FormInput {
  name: string;
  password: string;
  checkPassword: string;
}

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data);

  return (
    <section className="flex h-screen items-center justify-center bg-gray-200">
      <form
        className="flex w-4/5 flex-col gap-y-2 rounded-md bg-white p-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-center text-xl">Регистрация</h2>
        <input
          className="mt-2 rounded-md border-2 border-gray-400 bg-gray-300 px-2 py-1 text-black outline-none transition-all duration-300 ease-linear focus:bg-gray-100"
          placeholder="Введите имя"
          {...register('name', { required: true, maxLength: 20 })}
        />
        {errors.name && errors.name.type === 'required' && (
          <Error>Поле обязательно для заполнения</Error>
        )}
        {errors.name && errors.name.type === 'maxLength' && (
          <Error>Максимальная длина 20 символов</Error>
        )}
        <input
          className="rounded-md border-2 border-gray-400 bg-gray-300 px-2 py-1 text-black outline-none transition-all duration-300 ease-linear focus:bg-gray-100"
          placeholder="Пароль"
          type="password"
          {...register('password', {
            required: true,
            minLength: 6,
            pattern: /^(?=.*[a-zA-Z])(?=.*[0-9]).*$/i,
          })}
        />
        {errors.password && errors.password.type === 'required' && (
          <Error>Поле обязательно для заполнения</Error>
        )}
        {errors.password && errors.password.type === 'pattern' && (
          <Error>Пароль должен содержать как минимум одну латинскую букву, одну цифру</Error>
        )}
        {errors.password && errors.password.type === 'minLength' && (
          <Error>Пароль должен состоять минимум из 6 символов</Error>
        )}
        <input
          className="rounded-md border-2 border-gray-400 bg-gray-300 px-2 py-1 text-black outline-none transition-all duration-300 ease-linear focus:bg-gray-100"
          placeholder="Повторите пароль"
          type="password"
          {...register('checkPassword', {
            required: true,
            validate: (value) => value === watch('password') || 'Passwords do not match',
            pattern: /^(?=.*[a-zA-Z])(?=.*[0-9]).*$/i,
            minLength: 6,
          })}
        />
        {errors.checkPassword && errors.checkPassword.type === 'required' && (
          <Error>Поле обязательно для заполнения</Error>
        )}
        {errors.checkPassword && errors.checkPassword.type === 'pattern' && (
          <Error>Пароль должен содержать как минимум одну латинскую букву, одну цифру</Error>
        )}
        {errors.checkPassword && errors.checkPassword.type === 'minLength' && (
          <Error>Пароль должен состоять минимум из 6 символов</Error>
        )}
        {errors.checkPassword && errors.checkPassword.type === 'validate' && (
          <Error>Пароли не совпадают</Error>
        )}
        <Button onClick={() => console.log(123)} mt="mt-2" type="submit">
          Зарегистрироваться
        </Button>
      </form>
    </section>
  );
}
