import { Injectable } from "@angular/core";
import { STORAGE_KEYS } from "../config/storage.keys.config";
import { Cart } from "../models/cart";
import { LocalUser } from "../models/local.user";

@Injectable()
export class StorageService {

    getLocalUser() : LocalUser {
        let usr = localStorage.getItem(STORAGE_KEYS.localUser);
        if (usr == null){
            return null;
        }
        else {
            return JSON.parse(usr);
        }
    }

    setLocalUser( obj: LocalUser) {
        if (obj == null) {
            localStorage.removeItem(STORAGE_KEYS.localUser);
        }
        else {
            localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
        }
    }

    getCart() : Cart {
        let crt = localStorage.getItem(STORAGE_KEYS.cart);
        if (crt == null){
            return null;
        }
        else {
            return JSON.parse(crt);
        }
    }

    setCart( obj: Cart) {
        if (obj == null) {
            localStorage.removeItem(STORAGE_KEYS.cart);
        }
        else {
            localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(obj));
        }
    }
}