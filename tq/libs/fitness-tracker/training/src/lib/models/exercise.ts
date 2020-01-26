import * as uuid from 'uuid';

export class Exercise {
  readonly id: string;
  readonly name: string;

  constructor(name: string) {
    this.id = uuid.v4();
    this.name = name;
  }
}
