import { redirect } from "next/navigation";

export { metadata } from "../fight-social/page";

export default function FightClubRedirect() {
  redirect("/fight-social");
}
