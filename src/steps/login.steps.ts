import { Given, When, Then } from 'cucumber';
import { goToApp, returnPageTitle, fillLoginForm } from '../common/actions';
import { expect } from 'chai';

Given('I want to access "Login Page" in bootstrap', async () => {
  await goToApp();
});

When('I provide my user credentials via the login form', async () => {
  await fillLoginForm();
});

Then('I should successfully access "Bootstrap App"', async () => {
  expect(await returnPageTitle()).to.equal('Signin Template for Bootstrap');
});
