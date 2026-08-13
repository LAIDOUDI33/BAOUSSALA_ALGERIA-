---
Task ID: 1
Agent: Main Agent
Task: Fix production crash and menu translations across all languages

Work Log:
- Diagnosed BenchmarkingTab.tsx crash: `C.rose` was used but undefined in the C color object → Added `rose: "#e11d48"` to C
- Discovered massive dictionary duplication bug in dictionaries.ts:
  - EN dict had FR+AR duplicate WB/Benchmarking/SAD keys (lines 1516-1767) that silently overwrote correct English values
  - FR dict had EN+AR duplicate WB/Benchmarking/SAD keys mixed in
  - AR dict was completely missing all WB/Benchmarking/SAD/Wilaya translation keys
  - EN dict had `tabWilaya: "الولايات"` (Arabic) instead of English
- Wrote Python script to remove 252 EN duplicates + 36+92 FR duplicates
- Manually removed remaining 55 EN Benchmarking/SAD duplicates from FR dict
- Added complete Arabic translations for WB (60+ keys), Benchmarking (30+ keys), SAD (25+ keys), Wilaya (50+ keys) to AR dict
- Added complete French Wilaya translations (50+ keys) to FR dict
- Fixed EN tabWilaya from Arabic to English
- Verified build passes successfully
- Pushed to GitHub

Stage Summary:
- Root causes of production crash: C.rose undefined + dictionary duplication causing wrong locale values
- All 3 languages (EN/FR/AR) now have correct, unique menu translations
- Build compiles successfully, pushed to main branch
