import Hero from "@/components/splash/Hero";
import { Permanent_Marker } from "next/font/google";

const marker = Permanent_Marker({
  subsets: ["latin"],
  variable: "--font-permanent-marker",
  weight: "400",
});
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center space-y-2 justify-center bg-[#FFF8E7]">
      <Hero permanentMarkerFont={marker} />
    </main>
  );
}
