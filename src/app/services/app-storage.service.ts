import { SelectorMatcher } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AppStorageService {
  private storage: Storage | null = null;
  _storage:any


  constructor(storage: Storage) { this.init(); }

  async init() {
    const storage = await this.storage?.create();
    this._storage = storage;

  }

  public async set(key: string, value: any) {

    let result = await this._storage?.set(key,value);
    console.log(result);
  }

  public async get(key: string) {
    let value = await this._storage?.set(key);
    console.log(value);
    return value;
  }

  public async remove(key: string) {
    let value = await this._storage?.clear();
  }

  public async keys(key:string) {
    let value = await this._storage?.keys();
    return value;
  }
}
