#!/bin/bash
# Production Readiness Test Suite for AI Tools
BASE="http://127.0.0.1:3000"
PASS=0
FAIL=0
WARN=0

ok() { echo "  ✅ PASS: $1"; PASS=$((PASS+1)); }
fail() { echo "  ❌ FAIL: $1"; FAIL=$((FAIL+1)); }
warn() { echo "  ⚠️  WARN: $1"; WARN=$((WARN+1)); }

separator() { echo ""; echo "══════════════════════════════════════════════"; echo "  $1"; echo "══════════════════════════════════════════════"; }

separator "TEST 1: Chat — Normal Flow (Arabic)"
RESP=$(curl -s -w '\n%{http_code}' -X POST $BASE/api/ai/chat \
  -H 'Content-Type: application/json' \
  -d '{"message":"ما هو الناتج المحلي للجزائر؟","sessionId":"prod-chat-1"}' \
  --max-time 90 2>&1)
HTTP_CODE=$(echo "$RESP" | tail -1)
BODY=$(echo "$RESP" | sed '$d')
if [ "$HTTP_CODE" = "200" ]; then
  ok "HTTP 200"
  RLEN=$(echo "$BODY" | python3 -c "import sys,json; d=json.load(sys.stdin); print(len(d.get('response','')))" 2>&1)
  if [ "$RLEN" -gt 50 ] 2>/dev/null; then ok "Response $RLEN chars"; else fail "Response too short: $RLEN"; fi
else
  fail "HTTP $HTTP_CODE (expected 200)"
fi

separator "TEST 2: Chat — Multi-turn (same session)"
RESP2=$(curl -s -w '\n%{http_code}' -X POST $BASE/api/ai/chat \
  -H 'Content-Type: application/json' \
  -d '{"message":"وما نسبة التضخم؟","sessionId":"prod-chat-1"}' \
  --max-time 90 2>&1)
HTTP2=$(echo "$RESP2" | tail -1)
BODY2=$(echo "$RESP2" | sed '$d')
if [ "$HTTP2" = "200" ]; then
  RLEN2=$(echo "$BODY2" | python3 -c "import sys,json; d=json.load(sys.stdin); print(len(d.get('response','')))" 2>&1)
  ok "Follow-up 200, $RLEN2 chars"
else
  fail "Follow-up HTTP $HTTP2"
fi

separator "TEST 3: Chat — Input Validation"
T3=$(curl -s -o /dev/null -w '%{http_code}' -X POST $BASE/api/ai/chat -H 'Content-Type: application/json' -d '{"sessionId":"x"}' --max-time 5)
[ "$T3" = "400" ] && ok "Missing message → 400" || fail "Missing message → $T3 (expected 400)"
T4=$(curl -s -o /dev/null -w '%{http_code}' -X POST $BASE/api/ai/chat -H 'Content-Type: application/json' -d '{"message":"hi"}' --max-time 5)
[ "$T4" = "400" ] && ok "Missing sessionId → 400" || fail "Missing sessionId → $T4 (expected 400)"
T5=$(curl -s -o /dev/null -w '%{http_code}' -X POST $BASE/api/ai/chat -H 'Content-Type: application/json' -d '{}' --max-time 5)
[ "$T5" = "400" ] && ok "Empty body → 400" || fail "Empty body → $T5 (expected 400)"

separator "TEST 4: Chat — DELETE Session"
T6=$(curl -s -w '\n%{http_code}' -X DELETE "$BASE/api/ai/chat?sessionId=prod-chat-1" --max-time 5)
HTTP6=$(echo "$T6" | tail -1)
[ "$HTTP6" = "200" ] && ok "DELETE → 200" || fail "DELETE → $HTTP6 (expected 200)"

separator "TEST 5: Report — GET Topics"
T7=$(curl -s -w '\n%{http_code}' $BASE/api/ai/report --max-time 10)
HTTP7=$(echo "$T7" | tail -1)
BODY7=$(echo "$T7" | sed '$d')
if [ "$HTTP7" = "200" ]; then
  ok "GET topics → 200"
  CNT=$(echo "$BODY7" | python3 -c "import sys,json; print(len(json.load(sys.stdin).get('topics',[])))" 2>&1)
  [ "$CNT" = "10" ] && ok "10 topics returned" || fail "Expected 10 topics, got $CNT"
else
  fail "GET topics → $HTTP7"
fi

separator "TEST 6: Report — Arabic"
T8=$(curl -s -w '\n%{http_code}' -X POST $BASE/api/ai/report \
  -H 'Content-Type: application/json' \
  -d '{"topic":"تقرير التضخم والاسعار","lang":"ar"}' --max-time 90)
HTTP8=$(echo "$T8" | tail -1)
BODY8=$(echo "$T8" | sed '$d')
if [ "$HTTP8" = "200" ]; then
  R8=$(echo "$BODY8" | python3 -c "import sys,json; d=json.load(sys.stdin); print(len(d.get('report','')))" 2>&1)
  [ "$R8" -gt 200 ] 2>/dev/null && ok "AR report: $R8 chars" || fail "AR report too short: $R8"
else
  fail "AR report → $HTTP8"
fi

separator "TEST 7: Report — French"
T9=$(curl -s -w '\n%{http_code}' -X POST $BASE/api/ai/report \
  -H 'Content-Type: application/json' \
  -d '{"topic":"Rapport inflation","lang":"fr"}' --max-time 90)
HTTP9=$(echo "$T9" | tail -1)
BODY9=$(echo "$T9" | sed '$d')
if [ "$HTTP9" = "200" ]; then
  R9=$(echo "$BODY9" | python3 -c "import sys,json; d=json.load(sys.stdin); print(len(d.get('report','')))" 2>&1)
  [ "$R9" -gt 200 ] 2>/dev/null && ok "FR report: $R9 chars" || fail "FR report too short: $R9"
else
  fail "FR report → $HTTP9"
fi

separator "TEST 8: Report — English"
T10=$(curl -s -w '\n%{http_code}' -X POST $BASE/api/ai/report \
  -H 'Content-Type: application/json' \
  -d '{"topic":"Inflation analysis","lang":"en"}' --max-time 90)
HTTP10=$(echo "$T10" | tail -1)
BODY10=$(echo "$T10" | sed '$d')
if [ "$HTTP10" = "200" ]; then
  R10=$(echo "$BODY10" | python3 -c "import sys,json; d=json.load(sys.stdin); print(len(d.get('report','')))" 2>&1)
  [ "$R10" -gt 200 ] 2>/dev/null && ok "EN report: $R10 chars" || fail "EN report too short: $R10"
else
  fail "EN report → $HTTP10"
fi

separator "TEST 9: Report — Validation"
T11=$(curl -s -o /dev/null -w '%{http_code}' -X POST $BASE/api/ai/report -H 'Content-Type: application/json' -d '{}' --max-time 5)
[ "$T11" = "400" ] && ok "Missing topic → 400" || fail "Missing topic → $T11 (expected 400)"

separator "TEST 10: No use server in API routes"
if rg -c '"use server"' /home/z/my-project/src/app/api/ 2>/dev/null | rg -v ':0$'; then
  fail "Found use server in API routes!"
else
  ok "No use server in any API route"
fi

separator "RESULTS"
TOTAL=$((PASS+FAIL+WARN))
echo ""
echo "  Total:  $TOTAL"
echo "  Pass:   $PASS ✅"
echo "  Fail:   $FAIL ❌"
echo "  Warn:   $WARN ⚠️"
echo ""
if [ $FAIL -eq 0 ]; then
  echo "  🚀 ALL TESTS PASSED — PRODUCTION READY"
else
  echo "  ⛔ $FAIL FAILURES — NOT READY"
fi
echo ""
exit $FAIL