import { createContext } from 'react';

interface UserContextInterface {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuth: boolean) => void;
}

export const UserContext = createContext<UserContextInterface>({
  isAuthenticated: false,
  setIsAuthenticated: (isAuth) => { },
});

interface AppContextInterface {
  menuOption: string;
  setMenuOption: (option: string) => void;
}

export const AppContext = createContext<AppContextInterface>({
  menuOption: 'datasets',
  setMenuOption: (option) => { }
});
