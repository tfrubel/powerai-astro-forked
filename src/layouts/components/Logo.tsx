import config from "@/config/config.json";
import { useMemo } from "react";

const Logo = ({ src }: { src?: string }) => {
  const {
    logo,
    logo_width,
    logo_height,
    logo_text,
    title,
  }: {
    logo: string;
    logo_width: string | number;
    logo_height: string | number;
    logo_text: string;
    title: string;
  } = config.site;

  const parseSize = (value: string | number | undefined, fallback = 0) => {
    if (typeof value === "number")
      return Number.isFinite(value) ? value : fallback;
    if (!value) return fallback;
    const s = String(value).trim();
    const numeric = s.endsWith("px") ? s.slice(0, -2) : s;
    const n = Number.parseInt(numeric, 10);
    return Number.isFinite(n) ? n : fallback;
  };

  const { imgWidth, imgHeight, resolvedLogo } = useMemo(() => {
    const w = parseSize(logo_width, 0);
    const h = parseSize(logo_height, 0);
    return { imgWidth: w, imgHeight: h, resolvedLogo: logo };
  }, [logo, logo_width, logo_height]);

  const logoPath = src ?? resolvedLogo;

  return (
    <a href="/" className="navbar-brand inline-block">
      {logoPath ? (
        <img
          width={imgWidth * 2}
          height={imgHeight * 2}
          src={logoPath}
          alt={title || "Site logo"}
          style={{
            height: `${imgHeight}px`,
            width: `${imgWidth}px`,
          }}
        />
      ) : logo_text ? (
        logo_text
      ) : (
        title
      )}
    </a>
  );
};

export default Logo;
