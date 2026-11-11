> Retained from the original Adspirer plugin as historical connector guidance. Verify numeric
> limits, formats, and required fields against the live schema and current platform documentation.
> This reference never overrides the specialist MCP contract or authorizes writes.

# Meta creative specs and objectives

## Objectives (ODAX)

| Objective | Use for |
|---|---|
| `OUTCOME_AWARENESS` | Reach, brand lift, video views |
| `OUTCOME_TRAFFIC` | Clicks to a site or app |
| `OUTCOME_ENGAGEMENT` | Messages, post engagement, event responses |
| `OUTCOME_LEADS` | Lead forms, sign-ups |
| `OUTCOME_APP_PROMOTION` | App installs and app events |
| `OUTCOME_SALES` | Purchases, catalog sales, retargeting |

Legacy names still work and are auto-mapped, but prefer the ODAX name:

`CONVERSIONS` → `OUTCOME_SALES` · `LINK_CLICKS` → `OUTCOME_TRAFFIC` ·
`LEAD_GENERATION` → `OUTCOME_LEADS` · `BRAND_AWARENESS`/`REACH` → `OUTCOME_AWARENESS` ·
`APP_INSTALLS` → `OUTCOME_APP_PROMOTION`

Suggested starting daily budgets, **in the account's own currency** (e.g. USD): awareness 10,
traffic 10, engagement 10, leads 15, sales 20, app promotion 20.

## Required on every ad

- A Facebook **`page_id`**. There is no ad without a page.
- An **`http(s)`** landing URL. Not a bare domain.
- A call-to-action from Meta's valid set.

## Images

| Placement | Ratio | Minimum |
|---|---|---|
| Feed | 1:1 or 4:5 | 600 × 600 |
| Stories / Reels | 9:16 | 500 × 888 |
| Carousel card | 1:1 | 1080 × 1080 |

JPEG or PNG, under 30 MB. Choose aspect ratio by placement; do not promise one ratio will outperform another.

## Video

MP4 or MOV, H.264, under 4 GB. Reels are 9:16 and 3–90 seconds. Design for sound-off: most people
never hear it, so the first frame has to carry the message and captions are not optional.

## Carousel

- **2 to 10 cards.** Fewer than 2 is not a carousel; more than 10 is rejected.
- Every card needs **its own landing URL**.
- **All cards share one aspect ratio.** Mixing ratios fails at create time.
- Card headlines are short — around 40 characters before truncation.

## Text limits

| Field | Hard limit | Practical |
|---|---|---|
| Headline | 255 | ~40 before truncation |
| Primary text | 2200 | ~125 before "See more" |
| Description | 255 | ~30 |

The hard limit and the visible limit are different numbers. Write for the visible one: put the
offer in the first 125 characters of the primary text, or nobody reads it.

## Structure

Targeting lives on the **ad set**. Three audiences means one campaign with three ad sets, not three
campaigns. Splitting into separate campaigns fragments the budget and slows learning.

Campaign-level budget (Advantage+ / CBO) lets Meta move money to the winning ad set. Ad-set budgets
give you control. Pick one; setting both is a common source of confusion.

## Learning and fatigue

Evaluate conversion volume, reporting delay, audience, budget, and current platform guidance.
Rising frequency with declining CTR can suggest fatigue but is not a universal threshold or
proof of causality. Discover detect_meta_creative_fatigue and compare available evidence.
