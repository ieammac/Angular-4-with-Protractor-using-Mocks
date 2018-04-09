import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Item} from '../model/Item';
import {ItemListService} from '../service/item-list.service';

@Component({
    selector: 'demo-itemdetails',
    templateUrl: './item-details.component.html',
    styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit, AfterViewInit, OnDestroy {
    item = new Item('', '');

    constructor(private route: ActivatedRoute,
                private itemListService: ItemListService) {
    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
        let itemNumber = '';
        const request = this.route.paramMap;

        request.subscribe(params => { // URL parameters
                itemNumber = params.get('number');
                this.initItem(itemNumber);
            }
        );
    }

    ngOnDestroy(): void {
    }


    initItem(itemNumber: string) {
        this.initItemViaHttp(itemNumber);
    }

    private initItemViaHttp(itemNumber: String) {
        const request = this.itemListService.getItem(itemNumber);

        const subscription = request.subscribe(
            result => {
                this.item = result as Item;
            },
            err => {
                alert('Failed to get Item detail!');
                console.log('HttpError when loading Item Usages: ' + err);
            }
        );
    }
}
