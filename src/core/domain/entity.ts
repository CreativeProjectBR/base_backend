import { v4 as uuidv4 } from 'uuid';

export abstract class Entity<T> {
  protected readonly _id: string;
  public readonly props: T;

  get id() {
    return this._id;
  }

  constructor(props: T, id?: string) {
    this._id = id || uuidv4();
    this.props = props;
  }

  public equals(object?: Entity<T>): boolean {
    if (object === null || object === undefined) {
      return false;
    }

    if (this === object) {
      return true;
    }

    if (!(object instanceof Entity)) {
      return false;
    }

    return this._id === object._id;
  }
}