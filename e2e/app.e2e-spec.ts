import { BGPage } from './app.po';

describe('bg App', function() {
  let page: BGPage;

  beforeEach(() => {
    page = new BGPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
