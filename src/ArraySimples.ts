export class ArraySimples<T> {
  private array: T[];

  constructor(array: T[]) {
    this.array = array;
  }

  public removeDuplicados(): T[] {
    const elementosUnicos: T[] = [];

    for (const item of this.array) {
      if (!elementosUnicos.includes(item)) {
        elementosUnicos.push(item);
      }
    }

    return elementosUnicos;
  }
}
