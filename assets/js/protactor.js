it('should init with 1234.56', function() {
  expect(element(by.id('currency-default')).getText()).toBe('Rp 1,234.56');
  expect(element(by.id('currency-custom')).getText()).toBe('Rp 1,234.56');
  expect(element(by.id('currency-no-fractions')).getText()).toBe('Rp 1,235');
});
it('should update', function() {
  if (browser.params.browser === 'safari') {
    // Safari does not understand the minus key. See
    // https://github.com/angular/protractor/issues/481
    return;
  }
  element(by.model('pinjaman')).clear();
  element(by.model('hasil')).clear();
  element(by.model('pinjaman')).sendKeys('-1234');
  element(by.model('hasil')).sendKeys('-1234');
  expect(element(by.id('currency-default')).getText()).toBe('-Rp 1,234.00');
  expect(element(by.id('currency-custom')).getText()).toBe('-Rp 1,234.00');
  expect(element(by.id('currency-no-fractions')).getText()).toBe('-Rp 1,234');
});

/*
Copyright 2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
