import { Page } from "@playwright/test";
import { ChooseProfilePage } from "@/ui/pages/ChooseProfilePage";

export class PrivatePages {
  public chooseProfilePage: ChooseProfilePage;
  constructor(page: Page) {
    this.chooseProfilePage = new ChooseProfilePage(page);
  }
}
