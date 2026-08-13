// ─── ALGERIA WILAYA DATA (ONS 2008 Census + 2019 New Wilayas) ──────────────────────

export interface Wilaya {
  code: number;
  name: string;
  nameAr: string;
  nameEn: string;
  dairas: number;
  communes: number;
  area: number;        // km²
  population: number;  // 2008 census
  density: number;     // hab./km²
  isNew: boolean;      // created in 2019
}

export const wilayas: Wilaya[] = [
  { code: 1,  name: "Adrar",                nameAr: "أدرار",                nameEn: "Adrar",                dairas: 6,  communes: 16, area: 242942,  population: 399714,   density: 0.94,  isNew: false },
  { code: 2,  name: "Chlef",                nameAr: "الشلف",                nameEn: "Chlef",                dairas: 13, communes: 35, area: 4795,    population: 1002088,  density: 209,   isNew: false },
  { code: 3,  name: "Laghouat",              nameAr: "الأغواط",              nameEn: "Laghouat",             dairas: 5,  communes: 12, area: 18404,   population: 273402,   density: 15,    isNew: false },
  { code: 4,  name: "Oum El Bouaghi",       nameAr: "أم البواقي",       nameEn: "Oum El Bouaghi",       dairas: 12, communes: 29, area: 7638,    population: 621612,   density: 81,    isNew: false },
  { code: 5,  name: "Batna",                nameAr: "باتنة",                nameEn: "Batna",                dairas: 18, communes: 53, area: 8681,    population: 938075,   density: 108,   isNew: false },
  { code: 6,  name: "Béjaïa",               nameAr: "بجاية",               nameEn: "Béjaïa",               dairas: 19, communes: 52, area: 3268,    population: 912577,   density: 279,   isNew: false },
  { code: 7,  name: "Biskra",               nameAr: "بسكرة",               nameEn: "Biskra",               dairas: 7,  communes: 22, area: 19543,   population: 678246,   density: 35,    isNew: false },
  { code: 8,  name: "Béchar",               nameAr: "بشار",               nameEn: "Béchar",               dairas: 6,  communes: 11, area: 162200,  population: 270061,   density: 1.7,   isNew: false },
  { code: 9,  name: "Blida",                nameAr: "البليدة",                nameEn: "Blida",                dairas: 10, communes: 25, area: 1575,    population: 1002937,  density: 591,   isNew: false },
  { code: 10, name: "Bouira",               nameAr: "البويرة",               nameEn: "Bouira",               dairas: 12, communes: 45, area: 4439,    population: 695583,   density: 157,   isNew: false },
  { code: 11, name: "Tamanrasset",          nameAr: "تمنراست",          nameEn: "Tamanrasset",          dairas: 3,  communes: 5,  area: 335563,  population: 176637,   density: 0.32,  isNew: false },
  { code: 12, name: "Tébessa",              nameAr: "تبسة",                nameEn: "Tébessa",              dairas: 10, communes: 24, area: 9168,    population: 550262,   density: 60,    isNew: false },
  { code: 13, name: "Tlemcen",              nameAr: "تلمسان",              nameEn: "Tlemcen",              dairas: 19, communes: 49, area: 6131,    population: 918521,   density: 150,   isNew: false },
  { code: 14, name: "Tiaret",               nameAr: "تيارت",               nameEn: "Tiaret",               dairas: 11, communes: 36, area: 20673,   population: 846823,   density: 41,    isNew: false },
  { code: 15, name: "Tizi Ouzou",           nameAr: "تيزي وزو",           nameEn: "Tizi Ouzou",           dairas: 21, communes: 67, area: 2956,    population: 1127608,  density: 316,   isNew: false },
  { code: 16, name: "Alger",                nameAr: "الجزائر",                nameEn: "Algiers",              dairas: 13, communes: 57, area: 1190,    population: 2988145,  density: 2511,  isNew: false },
  { code: 17, name: "Djelfa",               nameAr: "جلفة",                nameEn: "Djelfa",               dairas: 6,  communes: 18, area: 10461,   population: 621077,   density: 46,    isNew: false },
  { code: 18, name: "Jijel",                nameAr: "جيجل",                nameEn: "Jijel",                dairas: 11, communes: 28, area: 2577,    population: 636948,   density: 247,   isNew: false },
  { code: 19, name: "Sétif",                nameAr: "سطيف",                nameEn: "Sétif",                dairas: 20, communes: 60, area: 6504,    population: 1489979,  density: 229,   isNew: false },
  { code: 20, name: "Saïda",                nameAr: "سعيدة",                nameEn: "Saïda",                dairas: 6,  communes: 16, area: 6764,    population: 330641,   density: 49,    isNew: false },
  { code: 21, name: "Skikda",               nameAr: "سكيكدة",               nameEn: "Skikda",               dairas: 13, communes: 38, area: 4026,    population: 898680,   density: 223,   isNew: false },
  { code: 22, name: "Sidi Bel Abbès",       nameAr: "سيدي بل عباس",       nameEn: "Sidi Bel Abbès",       dairas: 15, communes: 52, area: 9096,    population: 604744,   density: 66,    isNew: false },
  { code: 23, name: "Annaba",               nameAr: "عنابة",               nameEn: "Annaba",               dairas: 6,  communes: 12, area: 1439,    population: 609499,   density: 424,   isNew: false },
  { code: 24, name: "Guelma",               nameAr: "قالمة",               nameEn: "Guelma",               dairas: 10, communes: 34, area: 4101,    population: 482430,   density: 118,   isNew: false },
  { code: 25, name: "Constantine",           nameAr: "قسنطينة",           nameEn: "Constantine",           dairas: 7,  communes: 12, area: 2187,    population: 938475,   density: 427,   isNew: false },
  { code: 26, name: "Médéa",                nameAr: "المدية",                nameEn: "Médéa",                dairas: 13, communes: 43, area: 4142,    population: 563012,   density: 136,   isNew: false },
  { code: 27, name: "Mostaganem",           nameAr: "مستغانم",           nameEn: "Mostaganem",           dairas: 10, communes: 32, area: 2175,    population: 737118,   density: 325,   isNew: false },
  { code: 28, name: "M'Sila",                nameAr: "المسيلة",                nameEn: "M'Sila",                dairas: 7,  communes: 24, area: 18718,   population: 574462,   density: 30.69, isNew: false },
  { code: 29, name: "Mascara",              nameAr: "معسكر",              nameEn: "Mascara",              dairas: 16, communes: 47, area: 5941,    population: 784073,   density: 132,   isNew: false },
  { code: 30, name: "Ouargla",              nameAr: "ورقلة",              nameEn: "Ouargla",              dairas: 5,  communes: 8,  area: 145805,  population: 558558,   density: 2.6,   isNew: false },
  { code: 31, name: "Oran",                 nameAr: "وهران",                 nameEn: "Oran",                 dairas: 9,  communes: 26, area: 2121,    population: 1584607,  density: 688,   isNew: false },
  { code: 32, name: "El Bayadh",            nameAr: "البيض",               nameEn: "El Bayadh",            dairas: 5,  communes: 15, area: 42038,   population: 185347,   density: 4.4,   isNew: false },
  { code: 33, name: "Illizi",               nameAr: "إليزي",               nameEn: "Illizi",               dairas: 4,  communes: 4,  area: 198433,  population: 52333,    density: 0.18,  isNew: false },
  { code: 34, name: "Bordj Bou Arreridj",   nameAr: "برج بو عرريريج",   nameEn: "Bordj Bou Arreridj",   dairas: 10, communes: 34, area: 4115,    population: 628475,   density: 160,   isNew: false },
  { code: 35, name: "Boumerdès",            nameAr: "بومرداس",            nameEn: "Boumerdès",            dairas: 9,  communes: 32, area: 1356,    population: 802083,   density: 504,   isNew: false },
  { code: 36, name: "El Tarf",              nameAr: "الطارف",              nameEn: "El Tarf",              dairas: 7,  communes: 24, area: 3339,    population: 408414,   density: 122,   isNew: false },
  { code: 37, name: "Tindouf",              nameAr: "تندوف",              nameEn: "Tindouf",              dairas: 1,  communes: 2,  area: 159000,  population: 49149,    density: 0.31,  isNew: false },
  { code: 38, name: "Tissemsilt",           nameAr: "تيسمسيلت",           nameEn: "Tissemsilt",           dairas: 8,  communes: 22, area: 3152,    population: 294476,   density: 93,    isNew: false },
  { code: 39, name: "El Oued",              nameAr: "الوادي",              nameEn: "El Oued",              dairas: 10, communes: 22, area: 54573,   population: 647548,   density: 12,    isNew: false },
  { code: 40, name: "Khenchela",            nameAr: "خشالة",              nameEn: "Khenchela",            dairas: 8,  communes: 21, area: 9811,    population: 386683,   density: 40,    isNew: false },
  { code: 41, name: "Souk Ahras",           nameAr: "سوق أهراس",           nameEn: "Souk Ahras",           dairas: 10, communes: 26, area: 4541,    population: 438127,   density: 95,    isNew: false },
  { code: 42, name: "Tipaza",               nameAr: "تيبازة",               nameEn: "Tipaza",               dairas: 10, communes: 28, area: 1605,    population: 591010,   density: 273,   isNew: false },
  { code: 43, name: "Mila",                 nameAr: "ميلة",                 nameEn: "Mila",                 dairas: 13, communes: 32, area: 3407,    population: 766886,   density: 220,   isNew: false },
  { code: 44, name: "Aïn Defla",            nameAr: "عين الدفلى",            nameEn: "Aïn Defla",            dairas: 14, communes: 36, area: 4891,    population: 766013,   density: 156,   isNew: false },
  { code: 45, name: "Naâma",                nameAr: "النعامة",                nameEn: "Naâma",                dairas: 7,  communes: 12, area: 29950,   population: 192891,   density: 6.5,   isNew: false },
  { code: 46, name: "Aïn Témouchent",       nameAr: "عين تموسنت",       nameEn: "Aïn Témouchent",       dairas: 8,  communes: 28, area: 2379,    population: 371239,   density: 156,   isNew: false },
  { code: 47, name: "Ghardaïa",             nameAr: "غرداية",             nameEn: "Ghardaïa",             dairas: 8,  communes: 10, area: 86105,   population: 363598,   density: 4.2,   isNew: false },
  { code: 48, name: "Relizane",             nameAr: "غليزان",             nameEn: "Relizane",             dairas: 13, communes: 38, area: 4870,    population: 726180,   density: 152,   isNew: false },
  // ─── Nouvelles wilayas 2019 ────────────────────────────────────────────────
  { code: 49, name: "Timimoun",             nameAr: "تيميمون",             nameEn: "Timimoun",             dairas: 4,  communes: 10, area: 65203,   population: 122019,   density: 1.87,  isNew: true },
  { code: 50, name: "Bordj Badji Mokhtar",  nameAr: "برج باجي مختار",  nameEn: "Bordj Badji Mokhtar",  dairas: 1,  communes: 2,  area: 120026,  population: 16437,    density: 0.13,  isNew: true },
  { code: 51, name: "Ouled Djellal",        nameAr: "اولاد جلال",        nameEn: "Ouled Djellal",        dairas: 2,  communes: 6,  area: 11410,   population: 174219,   density: 15.26, isNew: true },
  { code: 52, name: "Béni Abbès",           nameAr: "بني عباس",           nameEn: "Béni Abbès",           dairas: 6,  communes: 10, area: 101350,  population: 50163,    density: 0.49,  isNew: true },
  { code: 53, name: "In Salah",             nameAr: "ان صلاح",             nameEn: "In Salah",             dairas: 2,  communes: 3,  area: 134218,  population: 50392,    density: 0.38,  isNew: true },
  { code: 54, name: "In Guezzam",           nameAr: "ان قزام",           nameEn: "In Guezzam",           dairas: 2,  communes: 2,  area: 88126,   population: 11202,    density: 0.12,  isNew: true },
  { code: 55, name: "Touggourt",            nameAr: "تقرت",                nameEn: "Touggourt",            dairas: 5,  communes: 13, area: 17428,   population: 247221,   density: 14.18, isNew: true },
  { code: 56, name: "Djanet",               nameAr: "جنت",                 nameEn: "Djanet",               dairas: 1,  communes: 2,  area: 86185,   population: 17618,    density: 0.2,   isNew: true },
  { code: 57, name: "El M'Ghair",           nameAr: "المغاير",           nameEn: "El M'Ghair",           dairas: 2,  communes: 8,  area: 8835,    population: 162267,   density: 18.36, isNew: true },
  { code: 58, name: "El Meniaa",            nameAr: "المنيعة",            nameEn: "El Meniaa",            dairas: 2,  communes: 3,  area: 62215,   population: 57276,    density: 0.92,  isNew: true },
  // ─── Wilayas projetées 2025+ (données partielles) ───────────────────────────
  { code: 59, name: "Aflou",                nameAr: "أفلو",                nameEn: "Aflou",                dairas: 5,  communes: 12, area: 6653,    population: 182938,   density: 27,    isNew: true },
  { code: 60, name: "Barika",               nameAr: "بريكة",               nameEn: "Barika",               dairas: 3,  communes: 8,  area: 3511,    population: 181716,   density: 58,    isNew: true },
  { code: 61, name: "El Kantara",           nameAr: "القنطرة",           nameEn: "El Kantara",           dairas: 3,  communes: 5,  area: 1443,    population: 43110,    density: 29,    isNew: true },
  { code: 62, name: "Bir El Ater",          nameAr: "بير العطر",          nameEn: "Bir El Ater",          dairas: 2,  communes: 4,  area: 5059,    population: 98441,    density: 19.45, isNew: true },
  { code: 63, name: "El Aricha",            nameAr: "العريشة",            nameEn: "El Aricha",            dairas: 2,  communes: 4,  area: 2930,    population: 30614,    density: 10.44, isNew: true },
  { code: 65, name: "Aïn Ouessara",         nameAr: "عين وسارة",         nameEn: "Aïn Ouessara",         dairas: 4,  communes: 10, area: 6265,    population: 251038,   density: 40,    isNew: true },
  { code: 66, name: "Messaad",              nameAr: "مسعاد",              nameEn: "Messaad",              dairas: 2,  communes: 8,  area: 15530,   population: 220069,   density: 14.17, isNew: true },
  { code: 67, name: "Ksar El Boukhari",     nameAr: "قصر البخاري",     nameEn: "Ksar El Boukhari",     dairas: 6,  communes: 21, area: 4724,    population: 256920,   density: 54,    isNew: true },
  { code: 68, name: "Bou Saâda",            nameAr: "بو سعادة",            nameEn: "Bou Saâda",            dairas: 8,  communes: 23, area: 8632,    population: 416129,   density: 48,    isNew: true },
  { code: 69, name: "El Abiodh Sidi Cheikh",nameAr: "الأبيض سيدي الشيخ",nameEn: "El Abiodh Sidi Cheikh",dairas: 3,  communes: 7,  area: 36832,   population: 43277,    density: 1.17,  isNew: true },
];

// ─── Derivatives ─────────────────────────────────────────────────────────────

export const totalArea = wilayas.reduce((s, w) => s + w.area, 0);
export const totalPopulation = wilayas.reduce((s, w) => s + w.population, 0);
export const totalDairas = wilayas.reduce((s, w) => s + w.dairas, 0);
export const totalCommunes = wilayas.reduce((s, w) => s + w.communes, 0);
export const avgDensity = totalPopulation / totalArea;

export const top10Population = [...wilayas].sort((a, b) => b.population - a.population).slice(0, 10);
export const top10Density   = [...wilayas].sort((a, b) => b.density - a.density).slice(0, 10);
export const top10Area      = [...wilayas].sort((a, b) => b.area - a.area).slice(0, 10);

export const legacyWilayas = wilayas.filter(w => !w.isNew);
export const newWilayas    = wilayas.filter(w => w.isNew);

// Population by region (grouped)
export const regions: { name: string; nameAr: string; nameEn: string; wilayas: string[]; population: number; area: number }[] = [
  { name: "Nord-Centre",   nameAr: "الشمال المركزي",   nameEn: "North-Central",   wilayas: ["Alger","Blida","Boumerdès","Tipaza","Bouira","Médéa"], population: 0, area: 0 },
  { name: "Nord-Est",      nameAr: "الشمال الشرقي",    nameEn: "North-East",      wilayas: ["Constantine","Annaba","Sétif","Skikda","Jijel","Milá","Guelma","Batna","Oum El Bouaghi","SOUK AHRAS","Tébessa","Khenchela"], population: 0, area: 0 },
  { name: "Nord-Ouest",    nameAr: "الشمال الغربي",    nameEn: "North-West",      wilayas: ["Oran","Tlemcen","Sidi Bel Abbès","Aïn Témouchent","Relizane","Mostaganem","Mascara","Chlef"], population: 0, area: 0 },
  { name: "Hauts-Plateaux", nameAr: "الهضبة العليا", nameEn: "High Plateaus",    wilayas: ["Djelfa","M'Sila","Bordj Bou Arreridj","Mila","Aïn Defla","Tissemsilt","Tiaret","Saïda","Naâma","El Bayadh"], population: 0, area: 0 },
  { name: "Sud",           nameAr: "الجنوب",              nameEn: "South",            wilayas: ["Biskra","Ouargla","El Oued","Ghardaïa","Touggourt","El M'Ghair","El Meniaa"], population: 0, area: 0 },
  { name: "Grand Sud",     nameAr: "العملق الجنوبي", nameEn: "Far South",         wilayas: ["Adrar","Tamanrasset","Illizi","Tindouf","Béchar","In Salah","In Guezzam","Timimoun","Bordj Badji Mokhtar","Béni Abbès","Djanet"], population: 0, area: 0 },
];

// Populate regions
regions.forEach(r => {
  const matched = wilayas.filter(w => r.wilayas.some(n => w.name.includes(n) || n.includes(w.name)));
  r.population = matched.reduce((s, w) => s + w.population, 0);
  r.area = matched.reduce((s, w) => s + w.area, 0);
});
