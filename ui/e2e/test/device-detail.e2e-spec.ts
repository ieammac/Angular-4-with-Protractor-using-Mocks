import {PageUtil} from './app.po';
import {browser, element, by} from 'protractor';

describe('ng-apimock-test App', () => {
  let page: PageUtil;
  let ngApimock: any = browser['ngApimock'];

  beforeEach(() => {
    page = new PageUtil();
  });

  it('should display item detail', () => {
      ngApimock.selectScenario('detailOfItem', 'detail');
      ngApimock.selectScenario('itemList', 'list-2');

      page.navigateTo('/');
      page.getElementById('list').click();
      //browser.sleep(10000);
      page.getElementByLinkText('2222222222222').click();
  });
});
