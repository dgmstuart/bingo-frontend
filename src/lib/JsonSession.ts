class JsonSession<T> {
  store = window.localStorage;
  keyName = "sessionData";

  get sessionData(): T | null {
    const sessionDataString: string | null = this.store.getItem(this.keyName);
    if (sessionDataString) {
      return JSON.parse(sessionDataString);
    } else {
      return null;
    }
  }

  set sessionData(sessionData: T | null) {
    if (sessionData) {
      this.store.setItem(this.keyName, JSON.stringify(sessionData));
    } else {
      this.store.removeItem(this.keyName);
    }
  }
}

export default JsonSession;
