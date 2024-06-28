class StartPage {
  get welcomeBanner() {
    return $('//android.view.View[@resource-id="WelcomePagerImage"]');
  }
  get startButton() {
    return $('//android.widget.Button');
  }

  async firstPage(): Promise<void> {
    await expect(this.welcomeBanner).toBeDisplayed();
    await this.startButton.click();
  }

}
export default new StartPage();
