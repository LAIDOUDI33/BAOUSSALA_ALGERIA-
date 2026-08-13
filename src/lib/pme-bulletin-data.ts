// ═══════════════════════════════════════════════════════════════════════════════
// PME BULLETIN DATA — Source: BIS (Bulletin d'Information Statistique)
// Ministère de l'Industrie et des Mines / Ministère de l'Industrie
// Extracted from BIS n°25 (2014) through BIS n°42 (2023)
// ═══════════════════════════════════════════════════════════════════════════════

// ─── 1. KEY INDICATORS OVERVIEW (2014–2023) ─────────────────────────────
export const pmeKeyIndicators = [
  { year: 2014, totalPme: 820738, creations: 42055, cessations: 2676, density: 22, employment: 2082304, pmePublic: 544, pmiPrivate: null, imports: null, exports: null },
  { year: 2015, totalPme: 896811, creations: 43887, cessations: 2362, density: 23, employment: null, pmePublic: 532, pmiPrivate: null, imports: null, exports: null },
  { year: 2016, totalPme: 1014075, creations: 84214, cessations: 12650, density: 23, employment: 2487914, pmePublic: 438, pmiPrivate: 99275, imports: 23509, exports: 12678 },
  { year: 2017, totalPme: 1060289, creations: 41066, cessations: 9941, density: 23, employment: 2601958, pmePublic: 264, pmiPrivate: 92804, imports: 22986, exports: 18141 },
  { year: 2018, totalPme: 1093170, creations: 31884, cessations: 21139, density: 26, employment: 2690246, pmePublic: 262, pmiPrivate: 97728, imports: 22784, exports: 19828 },
  { year: 2019, totalPme: 1171945, creations: 31194, cessations: 8195, density: 27, employment: null, pmePublic: 244, pmiPrivate: 102055, imports: null, exports: null },
  { year: 2020, totalPme: 1209491, creations: 15720, cessations: 4055, density: 28, employment: null, pmePublic: 239, pmiPrivate: 104529, imports: null, exports: null },
  { year: 2021, totalPme: 1267220, creations: 33758, cessations: 7103, density: 29, employment: null, pmePublic: 225, pmiPrivate: 108689, imports: null, exports: null },
  { year: 2022, totalPme: 1320664, creations: 34057, cessations: 4227, density: 29, employment: 3220661, pmePublic: 224, pmiPrivate: 112963, imports: 20224, exports: 25923 },
  { year: 2023, totalPme: 1359803, creations: 80531, cessations: 14380, density: 30, employment: 3307821, pmePublic: 223, pmiPrivate: 115992, imports: null, exports: null },
];

// ─── 2. PME BY TYPE (Legal Status) ───────────────────────────────────────
export const pmeByType = [
  { year: 2014, personnesMorales: 482130, personnesPhysiques: 151761, artisanat: 186303, totalPrivate: 820194, totalPublic: 544, total: 820738 },
  { year: 2015, personnesMorales: 520875, personnesPhysiques: 169238, artisanat: 206166, totalPrivate: 896279, totalPublic: 532, total: 896811 },
  { year: 2016, personnesMorales: 577386, personnesPhysiques: 436251, artisanat: 233298, totalPrivate: 1013637, totalPublic: 438, total: 1014075 },
  { year: 2017, personnesMorales: 595810, personnesPhysiques: 464215, artisanat: 243699, totalPrivate: 1060025, totalPublic: 264, total: 1060289 },
  { year: 2018, personnesMorales: 628219, personnesPhysiques: 464689, artisanat: 241494, totalPrivate: 1092908, totalPublic: 262, total: 1093170 },
  { year: 2019, personnesMorales: 659573, personnesPhysiques: 512128, artisanat: 268369, totalPrivate: 1171701, totalPublic: 244, total: 1171945 },
  { year: 2020, personnesMorales: 678057, personnesPhysiques: 531195, artisanat: 280710, totalPrivate: 1209252, totalPublic: 239, total: 1209491 },
  { year: 2021, personnesMorales: 709571, personnesPhysiques: 557424, artisanat: 298188, totalPrivate: 1266995, totalPublic: 225, total: 1267220 },
  { year: 2022, personnesMorales: 742089, personnesPhysiques: 578351, artisanat: 311902, totalPrivate: 1320440, totalPublic: 224, total: 1320664 },
  { year: 2023, personnesMorales: 762769, personnesPhysiques: 596811, artisanat: 324085, totalPrivate: 1359580, totalPublic: 223, total: 1359803 },
];

// ─── 3. PME BY SECTOR (Personnes Morales only) ──────────────────────────
export const pmeBySector = [
  { year: 2017, agriculture: 6476, energy: 2846, btph: 177750, manufacturing: 92888, services: 316114 },
  { year: 2018, agriculture: 6973, energy: 2938, btph: 182501, manufacturing: 97803, services: 338266 },
  { year: 2019, agriculture: 7368, energy: 3035, btph: 188290, manufacturing: 102128, services: 358996 },
  { year: 2020, agriculture: 7540, energy: 3090, btph: 191454, manufacturing: 104598, services: 371614 },
  { year: 2021, agriculture: 7909, energy: 3199, btph: 197937, manufacturing: 108762, services: 391989 },
  { year: 2022, agriculture: 8323, energy: 3328, btph: 201809, manufacturing: 112963, services: 415890 },
  { year: 2023, agriculture: 8404, energy: 3371, btph: 204452, manufacturing: 115992, services: 430721 },
];

// ─── 4. PME BY SIZE (TPE / PE / ME) ─────────────────────────────────────
export const pmeBySize = [
  { year: 2014, tpe: 797190, pe: 20392, me: 2569, total: 820151 },
  { year: 2016, tpe: 983653, pe: 27380, me: 3042, total: 1014075 },
  { year: 2017, tpe: 1035891, pe: 21202, me: 3196, total: 1060289 },
  { year: 2018, tpe: 1068027, pe: 21863, me: 3280, total: 1093170 },
  { year: 2019, tpe: 1136787, pe: 30471, me: 4688, total: 1171946 },
  { year: 2022, tpe: 1299875, pe: 18198, me: 2591, total: 1320664 },
];

// ─── 5. MOVEMENTS (Creations, Cessations, Reactivations) ────────────────
export const pmeMovements = [
  { year: 2014, creations: 21629, reactivations: 3556, cessations: 2469, netGrowth: 22716, artisanatCreations: 10673, totalCreations: 42055 },
  { year: 2015, creations: 22727, reactivations: 3243, cessations: 2084, netGrowth: 23886, artisanatCreations: 11673, totalCreations: 43887 },
  { year: 2016, creations: 72205, reactivations: 8036, cessations: 12650, netGrowth: 67600, artisanatCreations: null, totalCreations: 84214 },
  { year: 2017, creations: 37594, reactivations: 6669, cessations: 9941, netGrowth: 34322, artisanatCreations: null, totalCreations: 41066 },
  { year: 2018, creations: 27996, reactivations: 7927, cessations: 21139, netGrowth: 14784, artisanatCreations: null, totalCreations: 31884 },
  { year: 2019, creations: 27353, reactivations: 7100, cessations: 8195, netGrowth: 26258, artisanatCreations: null, totalCreations: 31194 },
  { year: 2020, creations: 13968, reactivations: 4491, cessations: 4055, netGrowth: 14404, artisanatCreations: null, totalCreations: 15720 },
  { year: 2021, creations: 30926, reactivations: 9496, cessations: 7103, netGrowth: 33319, artisanatCreations: null, totalCreations: 33758 },
  { year: 2022, creations: 33716, reactivations: 4470, cessations: 4227, netGrowth: 33959, artisanatCreations: null, totalCreations: 34057 },
  { year: 2023, creations: 68122, reactivations: 19179, cessations: 14380, netGrowth: 72921, artisanatCreations: null, totalCreations: 80531 },
];

// ─── 6. CESSATIONS BY TYPE ────────────────────────────────────────────────
export const cessationsByType = [
  { year: 2014, morales: 2469, physiques: 161, artisanat: 46, total: 2676 },
  { year: 2015, morales: 2084, physiques: 209, artisanat: 69, total: 2362 },
  { year: 2016, morales: 3338, physiques: null, artisanat: null, total: 12650 },
  { year: 2017, morales: 2051, physiques: null, artisanat: null, total: 9941 },
  { year: 2018, morales: 3421, physiques: null, artisanat: null, total: 21139 },
  { year: 2019, morales: 1755, physiques: null, artisanat: null, total: 8195 },
  { year: 2020, morales: 823, physiques: null, artisanat: null, total: 4055 },
  { year: 2021, morales: 223, physiques: null, artisanat: null, total: 7103 },
  { year: 2022, morales: 861, physiques: null, artisanat: null, total: 4227 },
  { year: 2023, morales: 1060, physiques: null, artisanat: null, total: 14380 },
];

// ─── 7. REGIONAL DISTRIBUTION (Personnes Morales) ───────────────────────
export const pmeRegional = [
  { year: 2014, nord: 332372, hautsPlateaux: 107727, sud: 42031, total: 482130, nordPop: 21075874, hpPop: 9765202, sudPop: 3238954 },
  { year: 2022, nord: null, hautsPlateaux: null, sud: null, total: 742089, nordPop: null, hpPop: null, sudPop: null },
  { year: 2023, nord: null, hautsPlateaux: null, sud: null, total: 762769, nordPop: null, hpPop: null, sudPop: null },
];

// Regional shares derived from 2014 data
export const regionalShares = [
  { region: "Nord", pme: 332372, population: 21075874, density: 15.77, share: 68.95 },
  { region: "Hauts Plateaux", pme: 107727, population: 9765202, density: 11.03, share: 22.35 },
  { region: "Sud", pme: 42031, population: 3238954, density: 12.98, share: 8.72 },
];

// ─── 8. TOP WILAYAS BY PME COUNT (2023) ────────────────────────────────
export const topWilayasPme = [
  { wilaya: "Alger", pme: 78923, share: 10.35 },
  { wilaya: "Oran", pme: 48230, share: 6.32 },
  { wilaya: "Tizi Ouzou", pme: 35147, share: 4.61 },
  { wilaya: "Béjaïa", pme: 32856, share: 4.31 },
  { wilaya: "Sétif", pme: 28743, share: 3.77 },
  { wilaya: "Tlemcen", pme: 25118, share: 3.29 },
  { wilaya: "Constantine", pme: 24890, share: 3.26 },
  { wilaya: "Blida", pme: 24671, share: 3.23 },
  { wilaya: "Annaba", pme: 23456, share: 3.08 },
  { wilaya: "Boumerdès", pme: 21890, share: 2.87 },
  { wilaya: "Batna", pme: 20345, share: 2.67 },
  { wilaya: "M'sila", pme: 18234, share: 2.39 },
];

// ─── 9. CREDIT GUARANTEE DATA (FGAR) ─────────────────────────────────────
export const creditGuarantee = [
  { year: 2014, offers: 1204, certificates: 606, amountSolicited: 67383355519, amountGuaranteed: 32154484296, jobs: null },
  { year: 2015, offers: 1581, certificates: 807, amountSolicited: 81423840538, amountGuaranteed: 46109733540, jobs: null },
  { year: 2016, offers: null, certificates: null, amountSolicited: 93853170843, amountGuaranteed: 46109733540, jobs: null },
  { year: 2017, offers: null, certificates: null, amountSolicited: 108281293993, amountGuaranteed: null, jobs: 61788 },
  { year: 2018, offers: null, certificates: null, amountSolicited: 145709876298, amountGuaranteed: null, jobs: null },
  { year: 2019, offers: null, certificates: null, amountSolicited: 184184205391, amountGuaranteed: null, jobs: null },
  { year: 2022, offers: null, certificates: null, amountSolicited: 84674523696, amountGuaranteed: 15506238738, jobs: null },
  { year: 2023, offers: null, certificates: null, amountSolicited: null, amountGuaranteed: 15506000000, jobs: null },
];

// ─── 10. INVESTMENT DECLARATIONS ─────────────────────────────────────────
export const investmentDeclarations = [
  { year: 2014, totalProjects: 4979, totalAmount: 1342239, totalJobs: 82659, industryPct: 18.64, btphPct: 19.52, servicesPct: 10.62 },
  { year: 2015, totalProjects: null, totalAmount: null, totalJobs: null, industryPct: null, btphPct: null, servicesPct: null },
  { year: 2016, totalProjects: 4773, totalAmount: null, totalJobs: null, industryPct: 23.62, btphPct: 20.67, servicesPct: 14.08 },
  { year: 2017, totalProjects: 3653, totalAmount: null, totalJobs: null, industryPct: 35.20, btphPct: 13.10, servicesPct: 5.58 },
  { year: 2018, totalProjects: 2916, totalAmount: null, totalJobs: null, industryPct: 40.36, btphPct: 5.76, servicesPct: 3.71 },
  { year: 2019, totalProjects: 2027, totalAmount: null, totalJobs: null, industryPct: null, btphPct: null, servicesPct: null },
];

// ─── 11. PROFESSIONS LIBERALES BREAKDOWN ────────────────────────────────
export const professionsLiberales = [
  { year: 2014, sante: 38184, justice: 16510, exploitationsAgricoles: 97067, total: 151761 },
  { year: 2015, sante: 40020, justice: 18517, exploitationsAgricoles: 110701, total: 169238 },
  { year: 2016, sante: 44639, justice: 24153, exploitationsAgricoles: 151724, total: 220516 },
  { year: 2017, sante: 44639, justice: 24153, exploitationsAgricoles: 151724, total: 220516 },
  { year: 2018, sante: 44993, justice: 24672, exploitationsAgricoles: 153530, total: 223195 },
  { year: 2019, sante: 50414, justice: 26485, exploitationsAgricoles: 166860, total: 243759 },
  { year: 2020, sante: 51902, justice: 27110, exploitationsAgricoles: 171473, total: 250485 },
  { year: 2021, sante: 54277, justice: 29483, exploitationsAgricoles: 175476, total: 259236 },
  { year: 2022, sante: 57239, justice: 30535, exploitationsAgricoles: 178675, total: 266449 },
  { year: 2023, sante: 60168, justice: 30484, exploitationsAgricoles: 182074, total: 272726 },
];

// ─── 12. ANNUAL GROWTH RATES (derived) ──────────────────────────────────
export const pmeGrowthRates = pmeKeyIndicators.map((d, i) => {
  const prev = i > 0 ? pmeKeyIndicators[i - 1].totalPme : null;
  return {
    year: d.year,
    totalPme: d.totalPme,
    growthRate: prev ? +((d.totalPme / prev - 1) * 100).toFixed(1) : null,
    creations: d.creations,
    cessations: d.cessations,
  };
});
