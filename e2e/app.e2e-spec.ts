import { MusicAppNgPage } from './app.po';

describe('music-app-ng App', () => {
  let page: MusicAppNgPage;

  beforeEach(() => {
    page = new MusicAppNgPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
