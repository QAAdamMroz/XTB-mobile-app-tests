import StartPage from "../../../pageobjects/mobile/xtb/start.page";


class main{
        async mainSuit(): Promise<void> 
        {
    it("Start panel", async () => {
      await expect(StartPage.welcomeBanner).toBeDisplayed();
        await StartPage.firstPage();
      })
}
}
export default new main();