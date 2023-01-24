import { ACCESS_TOKEN_KEY } from '../utils/keys';

export class AuthService {
  static getToken(): string {
    return sessionStorage.getItem(ACCESS_TOKEN_KEY) || '';
  }

  static isAuthenticated(): boolean {
    return sessionStorage.getItem(ACCESS_TOKEN_KEY) != null;
  }

  static async login(
    token: string,
  ) {
    sessionStorage.setItem(ACCESS_TOKEN_KEY, token);
  }

}
