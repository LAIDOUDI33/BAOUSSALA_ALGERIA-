import re

with open('src/lib/i18n/dictionaries.ts', 'r') as f:
    content = f.read()

# Find all misplaced kpiRegTotalPop blocks and remove them
# Pattern: starts with "  kpiRegTotalPop:" at the beginning of a line
# and ends just before "  // ─── SECTOR: HYDROCARBONS" or similar
lines = content.split('\n')
new_lines = []
skip_until_next_section = False
skip_count = 0

for line in lines:
    stripped = line.strip()
    
    if skip_until_next_section:
        if stripped.startswith('// ───') and ('SECTOR' in stripped or 'HYDRO' in stripped):
            skip_until_next_section = False
            new_lines.append(line)
        continue
    
    if stripped.startswith('kpiRegTotalPop:'):
        skip_until_next_section = True
        skip_count += 1
        continue
    
    new_lines.append(line)

content = '\n'.join(new_lines)

with open('src/lib/i18n/dictionaries.ts', 'w') as f:
    f.write(content)

print(f"Removed {skip_count} misplaced blocks")