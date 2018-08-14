import * as puppeteer from 'puppeteer';

class WorldScope{
  driver;
  browser;
  page: puppeteer.Page;
  attach;
}
export default new WorldScope();
