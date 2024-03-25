"use client";
import { useEffect } from "react";
import Script from "next/script";

const Devfoliobtn = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://apply.devfolio.co/v2/sdk.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);
  return (
    <>
      <div
        className="apply-button"
        data-hackathon-slug="sparkthesummer"
        data-button-theme="light"
        style={{ height: "44px", width: "312px" }}
      ></div>
      {/* <Script
        defer
        async
        src="https://apply.devfolio.co/v2/sdk.js"
        strategy="lazyOnload"
      /> */}
    </>
  );
};

export default Devfoliobtn;
