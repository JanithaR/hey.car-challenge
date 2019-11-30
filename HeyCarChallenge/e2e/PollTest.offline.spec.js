/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import TestIDs from './TestIDs';

describe('HeyCar Challenge', () => {
    beforeEach(async () => {
        await device.reloadReactNative();
    });

    it('should inform the user the poll could not be loaded', async () => {
        await expect(element(by.text('Sorry, we could not load the poll'))).toBeVisible();
    });

    it('should let users retry loading polls', async () => {
        await expect(element(by.id(TestIDs.RETRY_BUTTON))).toBeVisible();
        await element(by.id(TestIDs.RETRY_BUTTON)).tap();
        await expect(element(by.id(TestIDs.RETRY_BUTTON))).toBeNotVisible();
    });
});
