import { redirect } from "next/navigation";

export { metadata } from "../../fight-social/terms/page";

export default function FightClubTermsRedirect() {
  redirect("/fight-social/terms");
}
