# Specialist MCP error recovery

Adapted from the original adspirer-mcp error catalog; platform field guidance lives in
the retained Meta/TikTok skills and their references.

- Missing tool_name: rediscover with action=list_tools; do not retry the same invalid payload.
- Tool not found: distinguish top-level tools from operations inside a router. Do not switch
  to the main hub. If get_tool_schema is absent, use schemas from router discovery when sufficient.
- Ambiguous account: ask the user and pass the exact returned identifier as a string.
- 403: inspect actual connections/permissions. Do not drop the account ID to try another account.
- Expired authorization: reconnect through the client's supported OAuth UI; never request tokens.
- Quota/rate limit: explain the actual error and recovery; do not switch tools to bypass it.
- Invalid pixel/objective/CTA: inspect the live schema and returned validation, then correct
  only after understanding the failure. Historical references are not universal platform rules.
- Invalid asset ID (including literal "None"): inspect upload state before retrying.
- Uncertain campaign creation: list current resources before any retry; report partial results.
