import dynamic from "next/dynamic";
const MarcaPowerLanding = dynamic(() => import("@/components/MarcaPowerLanding"), { ssr: true });

export default function Page() {
  return <MarcaPowerLanding />;
}
