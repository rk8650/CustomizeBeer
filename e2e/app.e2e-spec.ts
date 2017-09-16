import { CustomizeBeerPage } from './app.po';

describe('customize-beer App', function() {
  let page: CustomizeBeerPage;

  beforeEach(() => {
    page = new CustomizeBeerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
