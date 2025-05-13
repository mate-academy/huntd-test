import { Page } from "@playwright/test";
import { CandidateEditProfilePage } from "@/ui/pages/candidatePages/CandidateEditProfilePage";
import { PrivatePages } from "@/ui/composite/PrivatePages";

export class CandidatePages extends PrivatePages {
  public editProfilePage: CandidateEditProfilePage;
  constructor(page: Page) {
    super(page);
    this.editProfilePage = new CandidateEditProfilePage(page);
  }
}
