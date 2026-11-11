---
name: adspirer-social-campaign-launch
description: Plan and create Meta and TikTok campaigns through Adspirer. Use for new paid-social campaign builds with approved budgets, targeting, creative, paused creation, and readback.
---

# Launch a paid-social campaign

Adapted from main plugin launch. Load adspirer-social-ads-tools and the Meta or TikTok platform skill.
Establish the business objective, conversion definition/value, audience, geography, landing
destination, available assets, daily/monthly budget and currency, and tracking readiness.
Read existing campaigns first to avoid duplicates.

Choose Meta or TikTok based on audience and creative fit; do not split a small budget merely
because both exist. Explain assumptions and tradeoffs; do not imply unsupported platforms.
Resolve real account, page/identity, pixel, location, audience, and asset IDs from reads.
Inspect required fields and format/objective validity before constructing a payload.

Present the concrete plan and get explicit approval before creation. Use paused status in
the live schema; if paused creation cannot be established, stop before the write.
Build campaign → ad set/ad group → ads using discovered operations. Never fabricate IDs.
Read back status, budget, targeting, identity, copy, and assets. Creation and enabling are
separate decisions; never resume automatically.

Report what exists, what failed, and what remains. A campaign without its intended ads is a
partial build. Do not delete or retry uncertain resources without checking state and approval.
Offer a host review schedule only when actually supported and requested.
