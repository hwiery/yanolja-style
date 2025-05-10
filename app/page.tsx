import dynamic from "next/dynamic";

// 클라이언트 컴포넌트를 동적으로 가져오기
const WLight = dynamic(() => import("../components/WLight"), { ssr: false });

export default function Home() {
  return <WLight />;
} 