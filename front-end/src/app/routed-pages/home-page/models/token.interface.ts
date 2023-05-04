export interface IToken {
  value: string;
  expiry: string;
}

export class Token implements IToken {
  value: string;
  expiry: string;

  constructor(value: string, expiry: string) {
    this.value = value;
    this.expiry = expiry;
  }
}
