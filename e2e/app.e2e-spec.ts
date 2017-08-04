import { IngAssessmentPage } from './app.po';

describe('ing-assessment App', () => {
  let page: IngAssessmentPage;

  beforeEach(() => {
    page = new IngAssessmentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
