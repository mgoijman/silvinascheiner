"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const GA_ID    = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export default function AnalyticsProvider() {
  const pathname = usePathname();

  // Fire page_view on route change
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (GA_ID && typeof window.gtag === "function") {
      window.gtag("event", "page_view", { page_path: pathname });
    }
    if (PIXEL_ID && typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  }, [pathname]);

  if (!GA_ID && !PIXEL_ID) return null;

  return (
    <>
      {/* GA4 */}
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { page_path: window.location.pathname });
            `}
          </Script>
        </>
      )}

      {/* Meta Pixel */}
      {PIXEL_ID && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  );
}
