---
name: adspirer-social-ads-performance
description: Analyze Meta and TikTok campaign performance through Adspirer. Use for read-only spend, CPA, ROAS, CTR, pacing, and period comparisons with attribution and tracking checks.
---

# Performance review

Adapted from main plugin performance review. Load adspirer-social-ads-tools. This skill never changes campaigns.
Check get_connections_status and select the intended account before reading data.

## Sources

Meta: get_meta_campaign_performance is direct if advertised. TikTok: discover get_tiktok_campaign_performance through tiktok_ads_read; never call a routed operation as a top-level tool.
Use raw_data only if the actual schema accepts it; do not assume widget rendering.

## Trust the numbers

Confirm dates, timezone, currency, conversion definition, and attribution window. Distinguish
partial days, conversion lag, missing permissions, and tracking failures from real declines.
Run audit_conversion_tracking where relevant and supported. A tracking gap limits affected
conversion claims; it does not automatically invalidate independently measured spend.
Do not combine incompatible currencies or double-count cross-platform attributed conversions.

## Scorecard and interpretation

Show spend, pacing, conversions, CPA, ROAS when revenue exists, CTR/CPC, and comparison with
an equivalent prior window. Compute blended CPA from comparable totals, not average platform CPAs.
Lead with the largest supported problem and opportunity, with evidence and caveats.
Discover available anomaly tools, but treat their explanations as hypotheses unless supported.
Recommend actions; hand approved changes to adspirer-social-ads-optimization.

## Repeating reviews

Offer a host schedule only when supported and authorized, explaining quota usage.
This endpoint does not imply access to a server-side monitoring router. Do not claim that a
report is scheduled until an actual scheduler confirms it. No fabricated figures or trends.
