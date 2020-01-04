'use strict';

const {Before, After, Status, setDefaultTimeout} = cucumber;

Before(() => setDefaultTimeout(180000));

After(scenario => {

    const world = this;
    return (scenario.result.status === Status.FAILED)
        ? browser.takeScreenshot().then(screenShot => world.attach(screenShot, 'image/png'))
        : this;
});
