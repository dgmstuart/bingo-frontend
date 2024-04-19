export default class JsonDataImporter<T> {
  #defaultData: T;

  constructor({ defaultData }: { defaultData: T }) {
    this.#defaultData = defaultData;
  }

  async import(listName: string): Promise<T> {
    let data = this.#defaultData;

    try {
      data = (await import(`../data/${listName}.json`)).default;
    } catch (error) {
      console.error("Failed to load the data", error);
    }

    return data;
  }
}
