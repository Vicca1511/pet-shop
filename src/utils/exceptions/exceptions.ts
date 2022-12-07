import { Exceptions } from './exceptionsHelper';

export class Exception {
  constructor(readonly exception: Exceptions, readonly massage: string) {}
}
