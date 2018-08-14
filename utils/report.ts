import * as reporter from 'cucumber-html-reporter';

const reporterOptions = {
  theme: 'bootstrap',
  jsonFile: 'report/cucumber_report.json',
  output: 'report/cucumber_report.html',
  reportSuiteAsScenarios: true,
  launchReport: false,
  name: "My Project",
  brandTitle: "My App",
  columnLayout: 1
};

reporter.generate(reporterOptions);