import { setWorldConstructor, setDefaultTimeout } from 'cucumber';
import * as puppeteer from 'puppeteer';
import scope from './common/scope';

const World = function ({attach}) {

  scope.driver = puppeteer;
  scope.page = {} as puppeteer.Page;
  scope.attach = attach;

};

setWorldConstructor(World);
setDefaultTimeout(30000);