import { createContext } from 'react';
import { Option } from '../components/common/layout';
import { User } from '../src/models/user';

interface UserContextInterface {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuth: boolean) => void;
  user: User | null;
  setUser: (user: User) => void;
}

export const UserContext = createContext<UserContextInterface>({
  isAuthenticated: false,
  setIsAuthenticated: (isAuth) => { },
  user: null,
  setUser: (user) => { }
});

interface AppContextInterface {
  menuOption: Option;
  setMenuOption: (option: Option) => void;
}

export const AppContext = createContext<AppContextInterface>({
  menuOption: 'datasets',
  setMenuOption: (option) => { }
});
