import type { Theme } from '@react-navigation/native';
import {
  DarkTheme as _DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { useColorScheme } from 'nativewind';

import { colors } from '@/ui/theme';

const DarkTheme: Theme = {
  ..._DarkTheme,
  colors: {
    ..._DarkTheme.colors,
    primary: colors.emerald[200],
    background: colors.slate[950],
    text: colors.emerald[50],
    border: colors.slate[500],
    card: colors.slate[850],
  },
};

const LightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.emerald[400],
    background: colors.slate[100],
  },
};

export function useThemeConfig() {
  const { colorScheme } = useColorScheme();
  if (colorScheme === 'dark') return DarkTheme;
  return LightTheme;
}
