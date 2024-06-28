import StartPage from "../../../pageobjects/mobile/xtb/start.page";


class main{
        async mainSuit(): Promise<void> 
        {
    describe("Mobile app testing", () => {
    it("Start panel", async () => {
      await expect((StartPage.welcomeBanner) as any).toBeDisplayed();
        
      })
      it("Move to next step", async () => {
        await StartPage.firstPage();
        })
        describe("Register demo account process", () => {
        it("Open register view", async () => {
          await StartPage.chooseDemoRegisterFlow();
          })
          it("Register demo account flow", async () => {
            await expect((StartPage.headerDemo) as any).toBeDisplayed();
            await StartPage.fullyFillRegisterFields();
            })
        })
    })
}
}
export default new main();