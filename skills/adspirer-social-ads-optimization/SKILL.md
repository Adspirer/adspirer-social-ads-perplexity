---
name: adspirer-social-ads-optimization
description: Find wasted Meta and TikTok spend and improve budget pacing through Adspirer. Use for paid-social optimization recommendations and user-approved changes.
---

# Cutting waste and pacing budgets

Adapted from main plugin optimization. Load adspirer-social-ads-tools and the relevant platform skill.
Propose changes, then execute only after approval of the specific action and account.

## Find waste

Discover analyze_meta_wasted_spend and analyze_tiktok_wasted_spend through their read routers.
Distinguish zero conversions, high CPA, irrelevant traffic, placement/audience mismatch,
tracking gaps, and weak creative. Do not label small samples or conversion lag as failure.

## Before cutting

Check audit_conversion_tracking where supported. Broken tracking limits conversion-based
decisions; missing events do not prove no business results occurred.
Assess sample size, spend relative to the goal, attribution, and upper-funnel contribution.
Avoid universal click counts, CPA multiples, or frequency cutoffs as automatic pause rules.

## Propose the smallest effective change

For social, inspect creative fatigue, placement and audience evidence before blaming targeting.
Consider exclusions or creative tests, then pausing the narrowest resource needed.
Prefer reversible actions. Deletion/removal requires explicit authorization and explanation
of what is actually irreversible; do not assume all historical reporting disappears.
Do not automatically apply the output of a tool whose name says optimize.

## Budget allocation and pacing

Compare period spend with elapsed time, remaining budget, and campaign constraints.
Show proposed before/after amounts, daily/monthly implications, account currency, and total.
Identify what constrains delivery before recommending more budget.
Avoid fixed percentage increases or promises that reallocations will yield a set number of leads.
Label forecasts as conditional estimates. Discover budget-tool schemas and check whether
an operation recommends or mutates before calling it.

## Verify and repeat

After approved changes, read back affected resources and report partial failures honestly.
Inspect state before retrying uncertain writes. Do not enable paused campaigns implicitly.
Offer a host schedule only if supported and authorized; disclose quota implications.
The specialist endpoint does not expose the main monitoring_and_reporting router.
Do not claim continuous monitoring unless an actual configured scheduler confirms it.
