import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button, ControlledInput, Text, View } from '@/ui';
import {Link} from '@react-navigation/native';

const schema = z.object({
  name: z.string({
    required_error: "Name is required"
  }),
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Invalid email format'),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(8, 'Password must be at least 6 characters'),
});

export type FormType = z.infer<typeof schema>;

export type RegisterFormProps = {
  onSubmit?: SubmitHandler<FormType>;
  errors?: Record<keyof FormType , string>; 
};

export const RegisterForm = ({ onSubmit = () => {} }: RegisterFormProps) => {
  const { handleSubmit, control } = useForm<FormType>({
    resolver: zodResolver(schema),
  });
  return (
    <View className="flex-1 justify-center p-4 dark:bg-slate-950">
      <Text testID="form-title" variant="h1" className="pb-6 font-bold text-center">
        SignUp
      </Text>

      <ControlledInput
        testID="name"
        control={control}
        name="name"
        label="Name"
      />

      <ControlledInput
        testID="email-input"
        control={control}
        name="email"
        label="Email"
      />
      <ControlledInput
        testID="password-input"
        control={control}
        name="password"
        label="Password"
        placeholder="***"
        secureTextEntry={true}
      />
      <Button
        testID="register-button"
        label="Register"
        onPress={handleSubmit(onSubmit)}
        variant="primary"
      />
      <View>
        <Link to={{screen: 'Login' }} className='w-full text-center'>Already have an account</Link>
      </View>
    </View>
  );
};
