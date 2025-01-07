import { Outfit } from "next/font/google";

export const outfit = Outfit({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["sans-serif", "Outfit Placeholder"],
});
