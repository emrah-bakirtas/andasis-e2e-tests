const {Authenticator} = require('authenticator-browser-extension');

exports.config = {
    framework: 'custom',  // set to "custom" instead of cucumber.
    frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file
    specs: [
        '../features/login.feature',
        '../features/ports.management.port.feature'
    ],

    // cucumber command line options
    cucumberOpts: {
        require: ['../step_definitions/*.js'], // require step definition files before executing features
        strict: true,                  // <boolean> fail if there are any undefined or pending steps
        format: [
            'json:./e2e-tests/reports/summary.json'
        ],                             // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        dryRun: false,                 // <boolean> invoke formatters without executing steps
        compiler: []                   // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    },

    plugins: [{
        package: 'protractor-multiple-cucumber-html-reporter-plugin',
        options: {
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true,
            removeOriginalJsonReportFile: true,
            reportPath: './e2e-tests/reports/protractor-multiple-cucumber-html-reporter',
            reportName: 'Nms e2e-test Results',
            pageTitle: 'Nms e2e-test Results',
            displayDuration: true
        }
    }],

    // Capabilities to be passed to the webdriver instance.
    capabilities: {

        browserName: 'chrome',

        chromeOptions: {
            extensions: [
                Authenticator.for('eaaadmin', 'eaaadmin').asBase64()
            ],
            args: ['--no-sandbox', '--test-type=browser', '--disable-web-security'],
            prefs: {
                'plugins.always_open_pdf_externally': true,
                'safebrowsing': {'enabled': false},
                'download': {
                    'prompt_for_download': false,
                    'directory_upgrade': true,
                }
            }
        },

        metadata: {
            browser: {
                name: 'chrome',
                version: '77.0.3865.90'
            },
            platform: {
                name: 'windows',
                version: '10 Pro'
            }
        }
    },

    onPrepare: function () {

        //browser.driver.manage().window().setPosition(0, 0);
        browser.driver.manage().window().maximize();
        //browser.driver.manage().window().setSize(1920, 1080);
        browser.waitForAngularEnabled(false);

        chai = require('chai');
        chaiAsPromised = require('chai-as-promised');
        chai.use(chaiAsPromised);
        expect = chai.expect;
        EC = protractor.ExpectedConditions;
        WAIT_TIME = 60000;

        cucumber = require('cucumber');

        global.cfgFile;
        global.baseUrl = 'http://192.168.5.1/';
    }
};
