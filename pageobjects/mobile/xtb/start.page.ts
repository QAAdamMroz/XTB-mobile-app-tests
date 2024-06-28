import {email,password} from "../../../tests/helpers/dynamicVariable"
import Gestures from "../../../tests/helpers/Gestures"
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
  get passwordField() {
    return $('//android.widget.EditText[@resource-id="com.xtb.xmobile2:id/passwordEdit"]');
  }
  get firstCheckbox() {
    return $('(//android.widget.CheckBox[@resource-id="com.xtb.xmobile2:id/agreement_chk"])[1]');
  }
  get secondCheckbox() {
    return $('(//android.widget.CheckBox[@resource-id="com.xtb.xmobile2:id/agreement_chk"])[2]');
  }
  get finishRegistartion() {
    return $('//android.widget.TextView[@resource-id="com.xtb.xmobile2:id/registerAccountBtn"]]');
  }
  async firstPage(): Promise<void> {
    await this.startButton.click();
  }
  async chooseDemoRegisterFlow(): Promise<void> {
    await this.registerDemoAccountButton.click();
  }
  async fullyFillRegisterFields(): Promise<void> {
    await this.emailField.click();
    await ((this.emailField) as any).addValue(email);
    await this.passwordField.click();
    await ((this.passwordField) as any).addValue(password);
    await this.firstCheckbox.click();
    await (Gestures.checkIfDisplayedWithSwipeUp as any)(this.secondCheckbox,1)
    await this.secondCheckbox.click();
    await (Gestures.checkIfDisplayedWithSwipeUp as any)(this.finishRegistartion,1)
    await this.finishRegistartion.click();
  }
}
export default new StartPage();
