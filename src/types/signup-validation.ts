export interface Errors {
  email: string | null;
  password: string | null;
  nickname: string | null;
}

export interface PasswordValidation {
  length: boolean;
  alphabet: boolean;
  uppercase: boolean;
  lowercase: boolean;
  number: boolean;
  special: boolean;
  combination: boolean;
  noIdMatch: boolean;
  consecutive: boolean;
}
