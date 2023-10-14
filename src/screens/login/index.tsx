import React from 'react';
import { showMessage, hideMessage } from "react-native-flash-message";

import { useAuth } from '@/core';
import { useSoftKeyboardEffect } from '@/core/keyboard';
import { FocusAwareStatusBar } from '@/ui';

import type { LoginFormProps } from './login-form';
import { LoginForm } from './login-form';

export const Login = () => {
  const {signIn} = useAuth();
  useSoftKeyboardEffect();

  const onSubmit: LoginFormProps['onSubmit'] = (data) => {
    signIn(data);
  };

  return (
    <>
      <FocusAwareStatusBar />
      <LoginForm onSubmit={onSubmit} />
    </>
  );
};
