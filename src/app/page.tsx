"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Hero from "./dashboard/page";

// Dynamically disable SSR
const ClientOnlyComponent = dynamic(() => Promise.resolve(() => <p>This component is client-side only.</p>), { ssr: false });

export default function Page() {
  const [isClient, setIsClient] = useState(false);
  const [currentTime, setCurrentTime] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
    setCurrentTime(new Date().toLocaleString()); // Fix hydration issue
  }, []);

  return (
    <div>
      <h1>Next.js Hydration Fix</h1>
      <Hero/> 
      
      {/* Prevents SSR Issues */}
      {isClient ? <p>Current Time: {currentTime}</p> : <p>Loading...</p>}

      {/* Client-only Component Inside Same File */}
      <ClientOnlyComponent />
    </div>
  );
}
