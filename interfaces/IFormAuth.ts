export interface IFormAuth {
  username: string;
  email: string;
  password: string;
  confirmPassword?: string;
  uriProfileImg: string;
  isLogged: boolean;
}

export interface IFormProfile {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}
