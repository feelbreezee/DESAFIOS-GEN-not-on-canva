export class ArraySimples<T> {
  private array: T[];

  constructor(array: T[]) {
    this.array = array;
  }

  public removeDuplicados(): T[] {
    const elementosUnicos = new Set<T>(this.array);
    return Array.from(elementosUnicos);
  }
}
