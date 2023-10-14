import { create } from 'zustand';

import { createSelectors } from '../utils';
import { getToken, removeToken, setToken } from './utils';
import {client} from '@/api';
import {User} from '@/types';
import {AxiosError, AxiosResponse} from 'axios';
import {showError} from '@/ui';
import {hydrate} from '@tanstack/react-query';
import {get} from 'react-hook-form';
import {set} from 'zod';

type RegisterData = Pick<User, 'name'|'email'> & {password: string};
type LoginData = Omit<RegisterData, 'name'>;

interface AuthState {
  status: 'idle' | 'signOut' | 'signIn';
  user?: User | null;
  errors?: any | null;
  signIn: (data: LoginData) => void;
  signUp: (data: RegisterData) => void;
  me: () => void;
  signOut: () => void;
  hydrate: () => void;
}

const _useAuth = create<AuthState>((set, get) => ({
  status: 'idle',
  user: null,
  errors: null,
  signIn: (data) => {
    client.post('/login', data)
    .then((res: AxiosResponse<{ token: string, user: User }>) => {
        setToken({ access: res.data.token  })
        console.log(res.data)
        set({ status: 'signIn', user: res.data.user  });
      })
    .catch((e: AxiosError<any>) => {
          showError(e)
    })
  },
  signUp: (data) => {
    client.post('/register', data)
    .then(() => {
        get().signOut();
      })
    .catch((e: AxiosError<any>) => {
        showError(e);
    })
  },
  signOut: () => {
    // client.post('/logout')
    // .then((res) => {
      removeToken();
      //   })
      // .catch((e) => {
        //     console.warn(e.response.data.message);
        //     // console.warn(e.response.data.errors);
        // })
    set({ status: 'signOut' });
  },
  me: () => {

  },
  hydrate: () => {
    try {
      const userToken = getToken();
      if (userToken !== null) {
        // Get user data from the backend
        // get().me();
          set({ status: 'signIn' });

      } else {
        get().signOut();
      }
    } catch (e) {
      // catch error here
      // Maybe sign_out user!
    }
  },
}));

export const useAuth = createSelectors(_useAuth);

export const signOut = () => _useAuth.getState().signOut();
export const signIn = (data: LoginData) => _useAuth.getState().signIn(data);
export const signUp = (data: RegisterData) => _useAuth.getState().signUp(data);

export const hydrateAuth = () => _useAuth.getState().hydrate();
