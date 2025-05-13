import { BasePage } from "@/ui/pages/BasePage";
import { Page } from "@playwright/test";
import { ROUTES } from "@/ui/constants";

export class CandidateEditProfilePage extends BasePage {
  url: string;

  constructor(page: Page) {
    super(page);
    this.url = ROUTES.candidateEditProfile;
  }

}
