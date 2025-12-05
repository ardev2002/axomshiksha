"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export default function AnalyticsLoader() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (consent === "accepted") {
      setAllowed(true);
    }
  }, []);

  if (!allowed) return null;

  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-D5TGEJCED7"
      ></Script>
      <Script>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());
            gtag('config', 'G-D5TGEJCED7');
        `}
      </Script>
    </>
  );
}
