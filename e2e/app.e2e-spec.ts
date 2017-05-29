import { AngularSeedPage } from './app.po';

describe('angular-seed App', () => {
  let page: AngularSeedPage;

  beforeEach(() => {
    page = new AngularSeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
