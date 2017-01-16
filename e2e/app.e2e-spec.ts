import { StereographAppPage } from './app.po';

describe('stereograph-app App', function() {
  let page: StereographAppPage;

  beforeEach(() => {
    page = new StereographAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
