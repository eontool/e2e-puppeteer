import { After, Before, BeforeAll, AfterAll, Status } from 'cucumber';
import scope from '../common/scope';
import * as dotenv from 'dotenv';

BeforeAll(async () => {
  dotenv.config();
});

Before(async () => {
  if (!scope.browser) {
    scope.browser = await scope.driver.launch({ headless: (process.env.HEADLESS === 'true') });
  }
  scope.page = await scope.browser.newPage();
  await scope.page.setViewport({ width: Number(process.env.VIEWPORT_WIDTH), height: Number(process.env.VIEWPORT_HEIGHT) });
});

After(async (testCase) => {
  if (testCase.result.status === Status.PASSED || testCase.result.status === Status.FAILED) {
    const image = await scope.page.screenshot();
    scope.attach(image, 'image/png');
  }
  if (scope.page) await scope.page.close();
});

AfterAll(async () => {
  if (scope.browser) await scope.browser.close();
});

