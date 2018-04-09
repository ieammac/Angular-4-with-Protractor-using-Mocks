import {Component, OnInit} from '@angular/core';
import {ItemListService} from '../service/item-list.service';
import {Item} from '../model/Item';

@Component({
    selector: 'item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.scss']
})
export class ItemListComponent implements OnInit {
    itemList = [];

    constructor(private itemListService: ItemListService) {
    }

    ngOnInit() {
        this.getAllItems();
    }

    getAllItems() {
        this.itemListService.getAllItems().subscribe(result => {
            this.itemList = result as Array<Item>;
            this.itemListService.setCachedItemList(this.itemList);
        });
    }
}
