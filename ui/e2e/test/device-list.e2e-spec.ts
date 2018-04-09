import {PageUtil} from './app.po';
import {browser, element, by} from 'protractor';

describe('ng-apimock-test App', () => {
  let page: PageUtil;
  let ngApimock: any = browser['ngApimock'];

  beforeEach(() => {
    page = new PageUtil();
  });

  it('show list of items', () => {
      ngApimock.selectScenario('itemList', 'list');

      page.navigateTo('/');
      expect(browser.getTitle()).toEqual('Demo');
      page.getElementById('list').click();

      let tr = element(by.id('item-list')).element(by.tagName('tbody')).all(by.tagName('tr'));
      console.log('First row: ' + tr.get(0));
      console.log('Count: ' + tr.count());
      //browser.sleep(10000);
  });
});
