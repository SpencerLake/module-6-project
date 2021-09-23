import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
});

test('Should place an X in the top right square', async () => {
    await driver.sleep(1000)
    await driver.findElement(By.id('cell-2')).click();
    await driver.sleep(1000)
});

test('should see if the computer places an O in the topleft box', async () => {
    expect(await driver.findElement(By.id('cell-0'))).toEqual('O')
})

/* Wasn't quite able to figure this out.*/
test('Should place an X in the very middle square', async () => {
    await driver.findElement(By.id('cell-4')).click();
    await driver.sleep(1000)
});


/*This one is expected to fail, but I wasn't quite able to figure it out as well.
I will look forward to our 1 on 1 and see if you can point me in the right direction */
test('Should see if the final messages displays the proper winner', async () => {
    await driver.findElement(By.id('cell-6')).click();
    await driver.sleep(1000)
    expect(await driver.findElement(By.id('title'))).toEqual('X lost')
});