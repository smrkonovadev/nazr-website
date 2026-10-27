import { redirect } from "next/navigation";

export { metadata } from "../../fight-social/privacy-policy/page";

export default function FightClubPrivacyRedirect() {
  redirect("/fight-social/privacy-policy");
}
