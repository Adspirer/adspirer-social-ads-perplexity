# Adspirer Social Ads for Perplexity

Create Meta and TikTok ad campaigns. Research competitors, develop creative, analyze results, and optimize spending—with your approval.

This package connects Perplexity to the hosted Adspirer Social Ads MCP server and gives its agent the
skills to use it well. It covers Meta (Facebook and Instagram) and TikTok Ads. It can change ad accounts, and only with your approval: campaigns are built paused, every change is shown first and read back afterwards.

## What's included

| File | Purpose |
| --- | --- |
| [connector.json](connector.json) | Connector details: name, URL, sign-in, logo, links |
| [LISTING.md](LISTING.md) | Paste-ready name, descriptions and submission notes |
| [AGENT.md](AGENT.md) | Agent instructions to paste into Perplexity |
| `skills/` | 12 Agent Skills (`SKILL.md` folders) |
| `dist/skills/` | The same skills as one zip each, for upload |
| `examples/` | Agent API request examples |

## Connect in Perplexity

1. Open **Settings → Connectors** and choose **Custom connector → Remote**.
2. Name it `Adspirer Social Ads` and enter the URL `https://mcp.adspirer.com/social-ads`.
3. Sign in with your Adspirer account in the browser window.
4. Connect your ad accounts at https://adspirer.ai/connections.

Custom connectors are reported to need a paid Perplexity plan, and admin permission in
organizations. Menu labels change; check Perplexity's help center if yours differ.

## Use with the Perplexity Agent API

A Project administrator adds the server once on the Project connectors page in the API Console
(server name, MCP URL, authentication, transport **Streamable HTTP**), then copies the connector
ID. Requests reference it by ID; see [examples/agent_api.py](examples/agent_api.py) and
[examples/agent_api.sh](examples/agent_api.sh).

Open question: Perplexity's documentation lists **API Key or None** as the authentication choices
for custom connectors in the API Console, and Adspirer Social Ads signs in with browser OAuth. This has not
been tested. If OAuth is not offered there, ask Perplexity (api@perplexity.ai) before relying on
the Agent API route; the app route above is the supported one.

Agent API connector calls run **without approval by default**. This connector can change ad accounts, so the examples set an approval policy and you should keep one on every request.

## Add the skills

Perplexity Computer is reported to import Agent Skills (`SKILL.md` folders); this has not been
tested with these skills. Each skill is in `skills/` and zipped in `dist/skills/`. Where skills
are not available, paste [AGENT.md](AGENT.md) into the Space or Computer instructions instead.

| Skill | Use it for |
| --- | --- |
| `adspirer-connect-ad-accounts` | Connect Meta and TikTok ad accounts to Adspirer and check connection status. Use for account setup, reconnection, or an optional user-requested brand workspace. |
| `adspirer-meta-ads` | Create, analyze, and optimize Meta Ads for Facebook and Instagram through Adspirer Social Ads. Use for campaigns, ad sets, audiences, pixels, creative, and performance with approval before changes. |
| `adspirer-paid-social` | Plan and coordinate Meta and TikTok advertising through Adspirer. Use for paid-social strategy, campaign planning, or tasks spanning reporting, creative, and optimization. |
| `adspirer-product-help` | Answer Adspirer pricing, plan, setup, and troubleshooting questions using current official documentation. Distinguish product capabilities from this connector's Meta and TikTok tools. |
| `adspirer-social-ad-creative` | Write and refresh Meta and TikTok ad creative through Adspirer. Use for ad copy, creative concepts, fatigue analysis, and proposed tests based on brand and performance evidence. |
| `adspirer-social-ads-optimization` | Find wasted Meta and TikTok spend and improve budget pacing through Adspirer. Use for paid-social optimization recommendations and user-approved changes. |
| `adspirer-social-ads-performance` | Analyze Meta and TikTok campaign performance through Adspirer. Use for read-only spend, CPA, ROAS, CTR, pacing, and period comparisons with attribution and tracking checks. |
| `adspirer-social-ads-tools` | Discover and call Meta and TikTok advertising tools through the Adspirer Social Ads connection. Use before tool calls to check schemas, choose read or write operations, and handle errors. |
| `adspirer-social-campaign-launch` | Plan and create Meta and TikTok campaigns through Adspirer. Use for new paid-social campaign builds with approved budgets, targeting, creative, paused creation, and readback. |
| `adspirer-social-competitor-research` | Research competitor social ads through Adspirer. Use for public Meta and TikTok creative, offers, and messaging from user-supplied domains, subject to source coverage. |
| `adspirer-social-conversion-analysis` | Diagnose Meta and TikTok conversion problems through Adspirer. Use for paid-social funnel analysis, tracking gaps, and traffic that does not convert, using available evidence. |
| `adspirer-tiktok-ads` | Create, analyze, and optimize TikTok Ads through Adspirer Social Ads. Use for campaigns, Spark Ads, ad groups, pixels, budgets, and performance; discover supported formats before building. |

## Example prompts

- "What ads are my competitors running on Meta right now?"
- "Which Meta ad sets show creative fatigue, and what should I refresh?"
- "Plan a TikTok campaign for our new product and build it paused for my approval."

## Safety

- It can change ad accounts, and only with your approval: campaigns are built paused, every change is shown first and read back afterwards.
- **No purchases.** The agent never buys, upgrades, renews or starts a trial of a subscription or
  paid feature for you, including when it runs on its own with browser or payment tools. At a
  quota or plan limit it stops, explains and waits.
- **No unattended changes.** Scheduled or background runs are read-only.
- Sign-in is browser OAuth. Never paste tokens into chat.

An Adspirer account and an applicable plan are required; ad-platform permissions and usage limits
apply.

## Status

Built from https://github.com/Adspirer/adspirer-social-ads-cursor-plugin v1.1.1 on 2026-11-11. Not yet installed or tested in
Perplexity. Run `node scripts/validate.mjs` after editing.

## Support

- Support: support@adspirer.com
- Documentation: https://www.adspirer.com/docs
- Privacy: https://www.adspirer.com/privacy
- Terms: https://www.adspirer.com/terms
- Security: see [SECURITY.md](SECURITY.md)
