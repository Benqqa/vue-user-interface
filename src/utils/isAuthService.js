import { LocalStorageService } from './LocalStorageService'
export const STORAGE_KEY = 'auth'
export const isAuthService = {
    Auth(login, password){
        //код осуществляющий авторизацию.
        if(login === 'admin' && password === 'admin'){
            LocalStorageService.clearAllItems();
            LocalStorageService.setItem(STORAGE_KEY, {'login': login, 'password': password})
            return true
        } 
        return false
    },
    isAuth() {
        //какой-то код проверяющий авторизацию.
        const auth = LocalStorageService.getItem(STORAGE_KEY, []);
        if(typeof auth === 'undefined')
            return false;
        const login = auth.login;
        const password = auth.password;
        return login === 'admin' && password === 'admin';
    },
    removeAuth(){
        LocalStorageService.clearAllItems()
    }
}