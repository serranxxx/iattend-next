export const types = {
    LOGIN: '[Auth] Login',
    LOGOUT: '[Auth] Logout',
    COLOR: '[App] Color',
    PALETTE: '[App] Palette',
    THEME: '[App] theme',
    FONT: '[App] fonts',
    COVER: '[App] cover',
    DATE: '[App] onDate',
    DESIGN: '[App] onDesign',
    INVID: '[App] invitationID',
  }
  
  // Tipo del estado
  export interface AppState {
    logged: boolean
    user: any
    date: Date
    MainColor?: string
    colorPalette?: {
      primary: string
      secondary: string
      accent: string
    }
    theme?: boolean
    font?: string
    cover?: boolean
    onDesign?: boolean
    i_id?: string | null
  }
  
  // Tipo del contexto
  export interface AppStateContextType extends AppState {
    login: (user: any) => void
    logout: () => void
    setMainColor: (color: string) => void
    setColorPalette: (colors: { primary: string; secondary: string; accent: string }) => void
    setTheme: (theme: boolean) => void
    setFont: (font: string) => void
    setCover: (cover: boolean) => void
    setOnDate: (date: Date) => void
    setOnDesigning: (designing: boolean) => void
    setCurrentInvitation: (id: string | null) => void
  }

  export interface User {
    uid: string;
    name: string;
    role: string;
    enterprise?: {
      name?: string;
      logo?: string;
      discount?: number;
      color?: string;
    };
  }