import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Item} from '../model/Item';
import {Observable} from 'rxjs/Observable';
import {AppSettings} from '../app.settings';

@Injectable()
export class ItemListService {

  // Should Initialized whenever itemList is loaded and used by ItemDetails page
  private cachedItemList: Array<Item> = null;

  constructor(private _httpClient: HttpClient) {
  }

  getAllItems(): Observable<Object> {
    const url = AppSettings.apiBaseUri + '/api/items/list';
    return this._httpClient.get(url);
  }

  public getItem(itemNumber: String): Observable<Object> {
    const url = AppSettings.apiBaseUri + '/api/items/' + itemNumber;
    return this._httpClient.get(url);
  }

  public setCachedItemList(itemList: Array<Item>) {
    this.cachedItemList = itemList;
  }

  public getCachedItemList(): Array<Item> {
    return this.cachedItemList;
  }
}
