/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
describe('HeyCar Challenge', () => {
    it('should let users continually vote', async () => {
        let notDone = true;

        while (notDone) {
            try {
                await expect(element(by.text('Congratulations!'))).toBeVisible();

                notDone = false;
            } catch (error) {
                await element(by.id('choice-1')).tap();
            }
        }
    });
});
