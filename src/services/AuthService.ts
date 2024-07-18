import { ACCESS_TOKEN_KEY } from 'src/utils/keys';

export const AuthService = {
  getToken(): string {
    return sessionStorage.getItem(ACCESS_TOKEN_KEY) || '';
  },

  isAuthenticated(): boolean {
    return sessionStorage.getItem(ACCESS_TOKEN_KEY) != null;
  },

  async login(
    token: string
  ) {
    sessionStorage.setItem(ACCESS_TOKEN_KEY, token);
  }

};
