import { MercadoAngular2Page } from './app.po';

describe('mercado-angular2 App', function() {
  let page: MercadoAngular2Page;

  beforeEach(() => {
    page = new MercadoAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
