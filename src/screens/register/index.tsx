import React from 'react';

import { useAuth } from '@/core';
import { useSoftKeyboardEffect } from '@/core/keyboard';
import { FocusAwareStatusBar } from '@/ui';

import type { RegisterFormProps } from './register-form';
import { RegisterForm } from './register-form';

export const Register = () => {
  const {signUp} = useAuth();
  useSoftKeyboardEffect();

  const onSubmit: RegisterFormProps['onSubmit'] = (data) => {
    signUp(data);
  };
  return (
    <>
      <FocusAwareStatusBar />
      <RegisterForm onSubmit={onSubmit} />
    </>
  );
};
