import { renderAppIcon } from "@/lib/appIcon";

export const contentType = "image/png";

export function GET() {
  return renderAppIcon(512);
}
