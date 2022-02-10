import type { WordList } from '../App'

class Session {
  store = window.localStorage;

  get words(): WordList | null {
    var wordsString: string | null = this.store.getItem("words")
    if (wordsString) {
      return JSON.parse(wordsString)
    } else {
      return null
    }
  }

  setWords(words: WordList): void {
    this.store.setItem("words", JSON.stringify(words))
  }
}

export default Session;
