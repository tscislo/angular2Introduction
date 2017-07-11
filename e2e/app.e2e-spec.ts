import { AngularTrainingAppPage } from './app.po';

describe('angular-training-app App', () => {
  let page: AngularTrainingAppPage;

  beforeEach(() => {
    page = new AngularTrainingAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
