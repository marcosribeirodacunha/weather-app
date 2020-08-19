import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      card: string;
      textPrimary: string;
      textSecondary: string;
      textCompletary: string;
      textLight: string;
      accent: string;
      accentActive: string;
      white: string;
      black: string;
    };
  }
}
