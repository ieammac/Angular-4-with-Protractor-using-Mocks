import { protractor, browser, element, by } from 'protractor';

export class PageUtil {

  navigateTo(relativeUrl) {
    return browser.get(relativeUrl);
  }

  getInstalments() {
    return element.all(by.css('ol > li'));
  }

  getElementById(id) {
      return element(by.id(id));
  }

  getElementByCss(css) {
      return element(by.css(css));
  }

  getElementByLinkText(text) {
      return element(by.linkText(text));
  }

  getError() {
    return element(by.css('.error'));
  }

  clickTryAgainButton() {
    return element(by.css('.try-again')).click();
  }
}
