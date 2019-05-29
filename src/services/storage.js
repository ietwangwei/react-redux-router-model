export default class Storage {
  static setItem (dataName, data) {
    localStorage.setItem(dataName, data)
  }
  static getItem (dataName) {
    const result = localStorage.getItem(dataName)
    return result
  }
  static removeItem (dataName) {
    localStorage.removeItem(dataName)
  }
  static clear () {
    for (let key in localStorage) {
      this.removeItem(key)
    }
  }
}
