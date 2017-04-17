import { NewNg2HighchartsAppPage } from './app.po';

describe('new-ng2-highcharts-app App', function() {
  let page: NewNg2HighchartsAppPage;

  beforeEach(() => {
    page = new NewNg2HighchartsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
