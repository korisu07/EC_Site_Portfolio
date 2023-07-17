export interface LoginIface {
  email: string;
  password: string;
}

export interface AccountIface extends LoginIface {
  name: string;
}
