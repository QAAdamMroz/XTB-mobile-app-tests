class StartPage {
  get welcomeBanner() {
    return $('//android.view.View[@resource-id="WelcomePagerImage"]');
  }
  get startButton() {
    return $('//android.widget.Button');
  }

  get registerDemoAccountButton() {
    return $('//android.widget.TextView[@resource-id="ButtonNewText" and @text="Open demo account"]');
  }

  get headerDemo() {
    return $('//android.widget.TextView[@resource-id="com.xtb.xmobile2:id/title"]');
  }
  get emailField() {
    return $('//android.widget.EditText[@resource-id="com.xtb.xmobile2:id/emailEdit"]');
  }

  async firstPage(): Promise<void> {
    await this.startButton.click();
  }
  async chooseDemoRegisterFlow(): Promise<void> {
    await this.registerDemoAccountButton.click();
  }
}
export default new StartPage();
