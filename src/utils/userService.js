import { LocalStorageService } from './LocalStorageService'
export const STORAGE_KEY = 'user_info'

export const userService = {
  //храним инфоромацию о польователях
  storeAll(items) {
    LocalStorageService.setItem(STORAGE_KEY, items)
  },
  getAll() {
    return LocalStorageService.getItem(STORAGE_KEY, [])
  },
  getItemById(id) {
    const items = LocalStorageService.getItem(STORAGE_KEY, [])
    const index = items.findIndex(i => i.id === id)
    if (index === -1) return false
    return items[index]
  },
  updateItem(id, payload) {
    let index=0;
    let items=[]
    console.log(userService.getAll().length == undefined)
    if(userService.getAll().length == undefined){
      index = -1;
    } else{
      items = userService.getAll()
      let maxIndex;
      if(payload.id == null || id == null){
        maxIndex = items.reduce((max, el) => Math.max(max, el.id), 0);
        id = maxIndex+1;
        payload.id = maxIndex+1;
      }
      index = items.findIndex(i => i.id === id)
    }
    if (index === -1) {
      items.push(payload)
    } else {
      items.splice(index, 1, payload)
    }
    userService.storeAll(items)
  },
  removeItem(id) {
    const items = userService.getAll()
    const index = items.findIndex(i => i.id === id)
    items.splice(index, 1)
    userService.storeAll(items)
  }
}