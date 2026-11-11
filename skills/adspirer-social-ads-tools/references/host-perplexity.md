# Running on Perplexity

Verified against Perplexity's Agent API connectors documentation on 2026-11-11. Menu labels and
plan rules change; re-check before relying on them.

## Perplexity app (Comet, web, desktop)

- Add the connector in Computer → Connectors → + Custom connector, with the name `Adspirer Social Ads` and
  the URL `https://mcp.adspirer.com/social-ads`. Custom connectors need a Pro, Max or Enterprise plan.
- Sign-in is browser OAuth with the user's Adspirer account. Never ask for a token in chat.
- If the connector's tools are missing, tell the user to connect it there; do not invent data.

## Perplexity Agent API

- A Project administrator adds the server once on the Project connectors page (server name, MCP
  URL, authentication **API Key** with an Adspirer `sk_live_` key from https://adspirer.ai/keys,
  transport: Streamable HTTP). Requests then reference it with
  `{"type": "connector", "id": "<connector id>", "server_label": "adspirer_social_ads"}`.
- Tools are discovered lazily; the request needs enough `max_steps` to list tools, fetch a schema
  and execute (router → `list_tools` → `get_tool_schema` → `execute`).
- This connector can change ad accounts. Agent API connector calls run **without
approval by default**, so set an approval policy (`require_approval`) on every request, and use
`allowed_tools` to expose only the tools a workflow needs.
- An unconnected connector returns an empty tool list with no error. Treat that as "not
  connected", not as "no data". `AUTH_REQUIRED` means a Project admin must reconnect.

## Skills

Perplexity Computer loads Agent Skills uploaded under Computer → Skills → + Create skill.
When this skill is active, follow it and the platform skills it points to.

## Scheduled and background work

Perplexity tasks and Computer runs can act without the user watching. Keep them read-only, and
follow the approvals and purchases rules in the main skill.
