import { headers } from "next/headers";

export async function isMobile() {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
}
