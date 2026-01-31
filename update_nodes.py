import re

with open('ui/src/ui/views/nodes.ts', 'r') as f:
    content = f.read()

# Simple tag replacements
replacements = [
    ('>Nodes<', '>${t("nodesDetail.title")}<'),
    ('>Devices<', '>${t("nodesDetail.devices")}<'),
    ('>Pending<', '>${t("nodesDetail.pending")}<'),
    ('>Paired<', '>${t("nodesDetail.paired")}<'),
    ('>Approve<', '>${t("nodesDetail.approve")}<'),
    ('>Reject<', '>${t("nodesDetail.reject")}<'),
    ('>Rotate<', '>${t("nodesDetail.rotate")}<'),
    ('>Revoke<', '>${t("nodesDetail.revoke")}<'),
    ('>Tokens<', '>${t("nodesDetail.tokens")}<'),
    ('>Remove<', '>${t("nodesDetail.remove")}<'),
    ('>Target<', '>${t("nodesDetail.target")}<'),
    ('>Scope<', '>${t("nodesDetail.scope")}<'),
    ('>Defaults<', '>${t("nodesDetail.defaults")}<'),
    ('>Security<', '>${t("nodesDetail.security")}<'),
    ('>Ask<', '>${t("nodesDetail.ask")}<'),
    ('>Mode<', '>${t("nodesDetail.mode")}<'),
    ('>Node<', '>${t("nodesDetail.node")}<'),
    ('>Host<', '>${t("nodesDetail.host")}<'),
    ('>Gateway<', '>${t("nodesDetail.gateway")}<'),
]

count = 0
for old, new in replacements:
    if old in content:
        content = content.replace(old, new)
        count += 1

print(f'Replaced {count} instances')

with open('ui/src/ui/views/nodes.ts', 'w') as f:
    f.write(content)

print('Done')
