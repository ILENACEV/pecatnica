---
description: Apply findings one-by-one with diff inspection and test
agent: build
---

For each item from review/plan ($ARGUMENTS):
1. Show the diff BEFORE applying. Wait for confirmation on HIGH-risk.
2. Apply minimally, only that item.
3. Test per item (exact command + output). Red = stop, do not continue.
4. Commit per item or at the end by agreement. Never batch without inspection.
