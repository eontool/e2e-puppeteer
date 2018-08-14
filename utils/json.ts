import * as fs from 'fs';

const dir = './report';

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

fs.open('./report/cucumber_report.json', 'a+', () => { });