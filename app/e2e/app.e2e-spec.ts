import { MelemAppPage } from './app.po';

describe('melem-app App', function() {
  let page: MelemAppPage;

  beforeEach(() => {
    page = new MelemAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
