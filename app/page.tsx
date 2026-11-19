import { Hero } from "./components/hero";
import { TrustBar } from "./components/trust-bar";
import { Services } from "./components/services";
import { HowItWorks } from "./components/how-it-works";
import { ForHelpers } from "./components/for-helpers";
import { Safety } from "./components/safety";
import { DownloadCta } from "./components/download-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <HowItWorks />
      <ForHelpers />
      <Safety />
      <DownloadCta />
    </>
  );
}
