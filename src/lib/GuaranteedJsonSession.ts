import JsonSession from "./JsonSession";

// Always guaranteed to return data:
// either retrieved from the JsonSession,
// or created using the init function
class GuaranteedJsonSession<T> {
  #session: JsonSession<T>;
  #initFunction: () => T;

  constructor({
    keyName,
    initFunction,
  }: {
    keyName: string;
    initFunction: () => T;
  }) {
    this.#session = new JsonSession<T>(keyName);
    this.#initFunction = initFunction;
  }

  get sessionData(): T {
    return this.#session.sessionData || this.#initSessionData();
  }

  set sessionData(list: T) {
    this.#session.sessionData = list;
  }

  #initSessionData(): T {
    const data = this.#initFunction();
    this.#session.sessionData = data;

    return data;
  }
}

export default GuaranteedJsonSession;
