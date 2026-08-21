import sys
with open('/home/z/my-project/src/components/tabs/ExecutiveBriefingTab.tsx', 'r') as f:
    content = f.read()

old = 'shrink-0`)}>'
new = 'shrink-0`}>'
if old in content:
    content = content.replace(old, new)
    print('Fixed: removed extra )')
else:
    print('Pattern not found, trying alternative')
    # Just rewrite the whole file section
    lines = content.split('\n')
    if len(lines) > 210:
        line = lines[210]
        bt = chr(96)  # backtick
        if bt + ')}>' in line:
            lines[210] = line.replace(bt + ')}>', bt + '}>')
            content = '\n'.join(lines)
            print('Fixed via alternative method')

with open('/home/z/my-project/src/components/tabs/ExecutiveBriefingTab.tsx', 'w') as f:
    f.write(content)
