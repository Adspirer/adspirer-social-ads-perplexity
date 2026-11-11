"""Adspirer Social Ads through the Perplexity Agent API.

Not yet run against a live Project. A Project administrator must first add the MCP server
https://mcp.adspirer.com/social-ads on the Project connectors page and copy its connector ID.
Check the accepted `require_approval` values in Perplexity's documentation.
"""
import os

from perplexity import Perplexity

client = Perplexity()  # reads PERPLEXITY_API_KEY

response = client.responses.create(
    model=os.environ.get("PERPLEXITY_MODEL", "openai/gpt-5.6-terra"),
    input="What ads are my competitors running on Meta right now?",
    max_steps=12,  # router discovery needs list_tools, get_tool_schema, then execute
    tools=[
        {
            "type": "connector",
            "id": os.environ["ADSPIRER_CONNECTOR_ID"],
            "server_label": "adspirer_social_ads",
            "server_description": "Create Meta and TikTok ad campaigns. Research competitors, develop creative, analyze results, and optimize spending\u2014with your approval.",
            "require_approval": "always",  # this connector can change ad accounts
        }
    ],
)

for item in response.output:
    if getattr(item, "type", "") == "mcp_list_tools" and not getattr(item, "tools", None):
        raise SystemExit("Connector returned no tools: it is not connected in this Project.")

print(response.output_text)
