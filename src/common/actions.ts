import scope from './scope';

const goToApp = async () => {
  await scope.page.goto(process.env.APP_URL);
};

const returnPageTitle = async () => {
  return await scope.page.title();
}

const fillLoginForm = async () => {
  await scope.page.click('#inputEmail');
  await scope.page.keyboard.type(process.env.USER_EMAIL);
  await scope.page.click('#inputPassword');
  await scope.page.keyboard.type(process.env.USER_PASSWORD);
  await scope.page.click("button[type=submit]");
};

export {
  goToApp,
  returnPageTitle,
  fillLoginForm
}