import type { CellData } from '../App'

class Session {
  store = window.localStorage;

  get cellDataList(): CellData[] | null {
    var cellDataString: string | null = this.store.getItem("cellDataList")
    if (cellDataString) {
      return JSON.parse(cellDataString)
    } else {
      return null
    }
  }

  setCellDataList(cellDataList: CellData[]) {
    this.store.setItem("cellDataList", JSON.stringify(cellDataList))
  }
}

export default Session;
