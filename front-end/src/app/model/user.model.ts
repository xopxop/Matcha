export interface User {
  id?: string;
  token?: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface Account {
  emailAddress: string;
  firstName: string;
  lastName: string;
  userName: string;
  passWord: string;
}
