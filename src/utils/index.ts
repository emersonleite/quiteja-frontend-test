import { StringObject } from "@/types/shared";

export function mapTitle(title: string) {
  const titles: StringObject = {
    mr: "Senhor",
    mrs: "Senhora",
    miss: "Senhorita",
    ms: "Senhora",
  };
  return titles[title] || "";
}
