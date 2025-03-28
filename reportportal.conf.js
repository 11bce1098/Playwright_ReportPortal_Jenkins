const config = {
    token: 'Playwright-poc_4iPclQH1T42ffCFgSkb9f8nDGf8sZ11WDHWspYc-8P4LRzmZUoRN8eQOtlXLoTs-',
    endpoint: 'https://demo.reportportal.io/api/v1',
    launch: 'Playwright Test Run',
    project: '11bce1098_personal',
    description: 'Automated tests execution',
    attributes: [{ key: 'framework', value: 'playwright' }],
    debug: false,
    restClientConfig: { timeout: 30000 },
  };
  
  export default config;  