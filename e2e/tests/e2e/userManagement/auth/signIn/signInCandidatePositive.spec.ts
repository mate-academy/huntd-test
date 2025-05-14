import { test } from '@tests/_fixtures/fixtures';
import { PublicPages } from '@/ui/composite/PublicPages';
import { CandidatePages } from "@/ui/composite/CandidatePages";

let publicPages: PublicPages;
let candidatePages: CandidatePages;

test.beforeEach(async ({
  page,
  newUser,
  authGqlClientInRequestContext,
}) => {

  await authGqlClientInRequestContext.signUpUser(
    newUser.email,
    newUser.password,
    newUser.password,
  );

  publicPages = new PublicPages(page);
  candidatePages = new CandidatePages(page);
});

test.only('should allow to sign in existing user from landing and choose candidate profile', async ({
  newUser,
}) => {
  await publicPages.landing.visit();
  await publicPages.landing.header.clickSignInLink();

  await publicPages.signIn.assertOpened();

  await publicPages.signIn.fillEmailField(newUser.email);
  await publicPages.signIn.fillPasswordField(newUser.password);
  await publicPages.signIn.clickSignInButton();

  await candidatePages.chooseProfilePage.assertOpened();
  await candidatePages.chooseProfilePage.clickCandidateLink();

  await candidatePages.editProfilePage.assertOpened();
});
