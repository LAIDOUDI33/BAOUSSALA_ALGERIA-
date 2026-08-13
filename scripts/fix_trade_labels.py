#!/usr/bin/env python3

filepath = "/home/z/my-project/src/lib/i18n/dictionaries.ts"
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Add to interface
content = content.replace(
    '  labelHealthSpend: string;',
    '  labelHealthSpend: string;\n  labelExports: string;\n  labelImports: string;\n  labelTrade: string;'
)

# EN
content = content.replace(
    '  labelHealthSpend: "Health",\n\n  labelSearch: "Search",',
    '  labelHealthSpend: "Health",\n  labelExports: "Exports",\n  labelImports: "Imports",\n  labelTrade: "Total Trade",\n\n  labelSearch: "Search",'
)

# FR
content = content.replace(
    '  labelHealthSpend: "Santé",\n\n  labelSearch: "Rechercher",',
    '  labelHealthSpend: "Santé",\n  labelExports: "Exportations",\n  labelImports: "Importations",\n  labelTrade: "Commerce Total",\n\n  labelSearch: "Rechercher",'
)

# AR
content = content.replace(
    '  labelHealthSpend: "الصحة",\n\n  labelSearch: "بحث",',
    '  labelHealthSpend: "الصحة",\n  labelExports: "الصادرات",\n  labelImports: "الواردات",\n  labelTrade: "إجمالي التجارة",\n\n  labelSearch: "بحث",'
)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("OK: Trade labels added")