import { siteConfig } from "@/lib/site";

export function PreviewBanner() {
  if (!siteConfig.preview.isPrivateConcept) return null;

  return (
    <div className="relative z-[60] border-b border-sand/30 bg-navy px-4 py-2.5 text-center">
      <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-ivory/80">
        {siteConfig.preview.bannerText}
      </p>
    </div>
  );
}
