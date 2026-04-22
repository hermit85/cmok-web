import { redirect } from "next/navigation";
import { headers } from "next/headers";

const APP_STORE = "https://apps.apple.com/pl/app/cmok/id6762090888?l=pl";
const PLAY_STORE = "https://play.google.com/store/apps/details?id=com.hermit85.cmok";

export default async function Join() {
  const headersList = await headers();
  const ua = headersList.get("user-agent") || "";
  const isAndroid = /android/i.test(ua);
  redirect(isAndroid ? PLAY_STORE : APP_STORE);
}
