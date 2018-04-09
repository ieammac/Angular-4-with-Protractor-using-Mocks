import {PageUtil} from './app.po';
import {browser, element, by} from 'protractor';

describe('ng-apimock-test App', () => {
  let page: PageUtil;
  let ngApimock: any = browser['ngApimock'];

  beforeEach(() => {
    page = new PageUtil();
  });

  it('should display home page', () => {
    page.navigateTo('/');
    expect(browser.getTitle()).toEqual('Demo');
  });
});
