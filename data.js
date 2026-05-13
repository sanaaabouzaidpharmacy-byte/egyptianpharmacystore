const IMG = {
    pill: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
    vit: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=600&q=80',
    bot: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=600&q=80',
    cre: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=600&q=80',
};

const categoriesData = [
    { name: 'مسكنات الألم', icon: '💊' },
    { name: 'مضادات حيوية', icon: '🔬' },
    { name: 'فيتامينات', icon: '🍊' },
    { name: 'نزلات البرد', icon: '🤧' },
    { name: 'أدوية مزمنة', icon: '❤️' },
    { name: 'العناية بالبشرة', icon: '🧴' },
    { name: 'العناية بالشعر', icon: '💇' },
    { name: 'أدوية الأطفال', icon: '🧸' },
    { name: 'التخسيس', icon: '⚖️' },
    { name: 'مستلزمات طبية', icon: '🩺' },
];

const productsData = [
    // مسكنات الألم
    { id: 1, name: 'بانادول إكسترا', nameEn: 'Panadol Extra', price: 75, oldPrice: 90, cat: 'مسكنات الألم', desc: 'باراسيتامول + كافيين — 24 قرص', img: IMG.pill, badge: 'offer', rx: false },
    { id: 2, name: 'كتافلام 50 مجم', nameEn: 'Cataflam 50mg', price: 95, oldPrice: null, cat: 'مسكنات الألم', desc: 'ديكلوفيناك بوتاسيوم — 30 قرص', img: IMG.pill, badge: null, rx: false },
    { id: 3, name: 'بروفين 400 مجم', nameEn: 'Brufen 400mg', price: 55, oldPrice: null, cat: 'مسكنات الألم', desc: 'إيبوبروفين — 20 قرص', img: IMG.pill, badge: null, rx: false },
    { id: 4, name: 'فولتارين جل', nameEn: 'Voltaren Gel', price: 125, oldPrice: null, cat: 'مسكنات الألم', desc: 'ديكلوفيناك موضعي — 100 جم', img: IMG.cre, badge: null, rx: false },
    { id: 5, name: 'أركوكسيا 90', nameEn: 'Arcoxia 90mg', price: 165, oldPrice: null, cat: 'مسكنات الألم', desc: 'إيتوريكوكسيب — 7 أقراص', img: IMG.pill, badge: null, rx: true },
    { id: 6, name: 'فاستوم جيل', nameEn: 'Fastum Gel', price: 115, oldPrice: null, cat: 'مسكنات الألم', desc: 'كيتوبروفين موضعي — 100 جم', img: IMG.cre, badge: null, rx: false },
    { id: 7, name: 'ترامادول 50', nameEn: 'Tramadol 50mg', price: 35, oldPrice: null, cat: 'مسكنات الألم', desc: 'مسكن قوي — 10 أقراص', img: IMG.pill, badge: null, rx: true },
    // مضادات حيوية
    { id: 8, name: 'أوجمنتين 1 جم', nameEn: 'Augmentin 1g', price: 195, oldPrice: null, cat: 'مضادات حيوية', desc: 'أموكسيسيلين + كلافولانيك — 14 قرص', img: IMG.bot, badge: null, rx: true },
    { id: 9, name: 'زيثروماكس 500', nameEn: 'Zithromax 500mg', price: 185, oldPrice: null, cat: 'مضادات حيوية', desc: 'أزيثروميسين — 3 أقراص', img: IMG.pill, badge: null, rx: true },
    { id: 10, name: 'فلاجيل 500', nameEn: 'Flagyl 500mg', price: 48, oldPrice: null, cat: 'مضادات حيوية', desc: 'ميترونيدازول — 20 قرص', img: IMG.pill, badge: null, rx: true },
    { id: 11, name: 'سيبروفلوكساسين 500', nameEn: 'Ciprofloxacin 500mg', price: 70, oldPrice: null, cat: 'مضادات حيوية', desc: 'سيبروفلوكساسين — 10 أقراص', img: IMG.pill, badge: null, rx: true },
    { id: 12, name: 'دوكسيسيكلين 100', nameEn: 'Doxycycline 100mg', price: 58, oldPrice: null, cat: 'مضادات حيوية', desc: 'دوكسيسيكلين — 10 أقراص', img: IMG.pill, badge: null, rx: true },
    { id: 13, name: 'أموكسيل 500', nameEn: 'Amoxil 500mg', price: 55, oldPrice: null, cat: 'مضادات حيوية', desc: 'أموكسيسيلين — 24 كبسولة', img: IMG.pill, badge: null, rx: true },
    { id: 14, name: 'كلاريثروميسين 500', nameEn: 'Clarithromycin 500', price: 145, oldPrice: null, cat: 'مضادات حيوية', desc: 'كلاريثروميسين — 14 قرص', img: IMG.pill, badge: null, rx: true },
    // فيتامينات
    { id: 15, name: 'فيتامين C 1000', nameEn: 'Vitamin C 1000', price: 130, oldPrice: null, cat: 'فيتامينات', desc: 'حمض الأسكوربيك فوار — 20 كيس', img: IMG.vit, badge: 'new', rx: false },
    { id: 16, name: 'برفيكتيل', nameEn: 'Perfectil', price: 225, oldPrice: 270, cat: 'فيتامينات', desc: 'فيتامينات كاملة للبشرة والشعر — 30 قرص', img: IMG.vit, badge: 'offer', rx: false },
    { id: 17, name: 'أوميجا 3', nameEn: 'Omega 3', price: 115, oldPrice: null, cat: 'فيتامينات', desc: 'أحماض دهنية لصحة القلب — 30 كبسولة', img: IMG.bot, badge: null, rx: false },
    { id: 18, name: 'فيتامين د 50000', nameEn: 'Vitamin D 50000 IU', price: 95, oldPrice: null, cat: 'فيتامينات', desc: 'كوليكالسيفيرول — 4 كبسولات', img: IMG.vit, badge: null, rx: false },
    { id: 19, name: 'سنتروم مولتي فيتامين', nameEn: 'Centrum', price: 198, oldPrice: 230, cat: 'فيتامينات', desc: 'مولتي فيتامين متكامل — 30 قرص', img: IMG.vit, badge: 'offer', rx: false },
    { id: 20, name: 'سلينيوم إيس', nameEn: 'Selenium Ace', price: 155, oldPrice: 185, cat: 'فيتامينات', desc: 'مضادات أكسدة + سيلينيوم — 30 قرص', img: IMG.vit, badge: 'offer', rx: false },
    { id: 21, name: 'زنك 50 مجم', nameEn: 'Zinc 50mg', price: 68, oldPrice: null, cat: 'فيتامينات', desc: 'أقراص زنك لتقوية المناعة — 30 قرص', img: IMG.vit, badge: null, rx: false },
    { id: 22, name: 'فيتامين B12', nameEn: 'Vitamin B12', price: 85, oldPrice: null, cat: 'فيتامينات', desc: 'سيانوكوبالامين — 30 قرص', img: IMG.vit, badge: null, rx: false },
    // نزلات البرد
    { id: 23, name: 'كونجستال', nameEn: 'Congestal', price: 48, oldPrice: null, cat: 'نزلات البرد', desc: 'باراسيتامول + سودوإيفيدرين — 10 أقراص', img: IMG.pill, badge: null, rx: false },
    { id: 24, name: 'أكتيفيد', nameEn: 'Actifed', price: 55, oldPrice: null, cat: 'نزلات البرد', desc: 'ترييبروليدين + سودوإيفيدرين — 10 أقراص', img: IMG.pill, badge: null, rx: false },
    { id: 25, name: 'ديكونجستال', nameEn: 'Decongestal', price: 40, oldPrice: null, cat: 'نزلات البرد', desc: 'مزيل احتقان — 10 أقراص', img: IMG.pill, badge: null, rx: false },
    { id: 26, name: 'هيكسالوز بخاخ', nameEn: 'Hexaloz Spray', price: 85, oldPrice: null, cat: 'نزلات البرد', desc: 'بخاخ أنف مزيل للاحتقان — 10 مل', img: IMG.bot, badge: null, rx: false },
    // أدوية مزمنة
    { id: 27, name: 'ميتفورمين 1000', nameEn: 'Metformin 1000mg', price: 38, oldPrice: null, cat: 'أدوية مزمنة', desc: 'لضبط سكر الدم — 30 قرص', img: IMG.pill, badge: null, rx: true },
    { id: 28, name: 'أتورفاستاتين 40', nameEn: 'Atorvastatin 40mg', price: 58, oldPrice: null, cat: 'أدوية مزمنة', desc: 'لخفض الكوليسترول — 30 قرص', img: IMG.pill, badge: null, rx: true },
    { id: 29, name: 'أملوديبين 5 مجم', nameEn: 'Amlodipine 5mg', price: 45, oldPrice: null, cat: 'أدوية مزمنة', desc: 'لضغط الدم — 30 قرص', img: IMG.pill, badge: null, rx: true },
    { id: 30, name: 'أوميبرازول 20 مجم', nameEn: 'Omeprazole 20mg', price: 50, oldPrice: null, cat: 'أدوية مزمنة', desc: 'لحموضة المعدة — 14 كبسولة', img: IMG.bot, badge: null, rx: false },
    { id: 31, name: 'بانتوبرازول 40', nameEn: 'Pantoprazole 40mg', price: 78, oldPrice: null, cat: 'أدوية مزمنة', desc: 'لقرحة المعدة — 14 قرص', img: IMG.pill, badge: null, rx: true },
    { id: 32, name: 'ليفوثيروكسين 100', nameEn: 'Levothyroxine 100mcg', price: 42, oldPrice: null, cat: 'أدوية مزمنة', desc: 'لقصور الغدة الدرقية — 50 قرص', img: IMG.pill, badge: null, rx: true },
    { id: 33, name: 'إزوميبرازول 40', nameEn: 'Esomeprazole 40mg', price: 88, oldPrice: null, cat: 'أدوية مزمنة', desc: 'لارتجاع المريء — 14 قرص', img: IMG.pill, badge: null, rx: false },
    { id: 34, name: 'جلوكوفاج 850', nameEn: 'Glucovance 850mg', price: 42, oldPrice: null, cat: 'أدوية مزمنة', desc: 'لمرضى السكري — 30 قرص', img: IMG.pill, badge: null, rx: true },
    // العناية بالبشرة
    { id: 35, name: 'نيفياكير كريم', nameEn: 'Nivea Cream', price: 78, oldPrice: null, cat: 'العناية بالبشرة', desc: 'كريم مرطب للبشرة — 200 مل', img: IMG.cre, badge: null, rx: false },
    { id: 36, name: 'يوسيرين لوشن', nameEn: 'Eucerin Lotion', price: 188, oldPrice: 220, cat: 'العناية بالبشرة', desc: 'لوشن للبشرة الجافة — 250 مل', img: IMG.cre, badge: 'offer', rx: false },
    { id: 37, name: 'فيتامين هـ كريم', nameEn: 'Vitamin E Cream', price: 88, oldPrice: null, cat: 'العناية بالبشرة', desc: 'كريم فيتامين E مغذي — 100 جم', img: IMG.cre, badge: null, rx: false },
    { id: 38, name: 'درماكول كريم', nameEn: 'Dermacool', price: 98, oldPrice: null, cat: 'العناية بالبشرة', desc: 'كريم مضاد للالتهابات — 30 جم', img: IMG.cre, badge: null, rx: false },
    // العناية بالشعر
    { id: 39, name: 'هير تون', nameEn: 'Hair Tone', price: 198, oldPrice: null, cat: 'العناية بالشعر', desc: 'كبسولات لتقوية الشعر — 30 كبسولة', img: IMG.cre, badge: 'new', rx: false },
    { id: 40, name: 'مينوكسيديل 5%', nameEn: 'Minoxidil 5%', price: 285, oldPrice: null, cat: 'العناية بالشعر', desc: 'محلول موضعي لتساقط الشعر — 60 مل', img: IMG.bot, badge: null, rx: false },
    { id: 41, name: 'فينيسيا كبسولات', nameEn: 'Venezia', price: 168, oldPrice: 198, cat: 'العناية بالشعر', desc: 'مكمل لتقوية الشعر — 30 كبسولة', img: IMG.vit, badge: 'offer', rx: false },
    // أدوية الأطفال
    { id: 42, name: 'بانادول أطفال شراب', nameEn: 'Panadol Baby Syrup', price: 68, oldPrice: null, cat: 'أدوية الأطفال', desc: 'باراسيتامول للأطفال — 100 مل', img: IMG.bot, badge: null, rx: false },
    { id: 43, name: 'إنشور بودرة', nameEn: 'Ensure Powder', price: 348, oldPrice: 398, cat: 'أدوية الأطفال', desc: 'مكمل غذائي للأطفال — فانيليا', img: IMG.vit, badge: 'offer', rx: false },
    { id: 44, name: 'نوفالوف قطرات', nameEn: 'Novalof Drops', price: 58, oldPrice: null, cat: 'أدوية الأطفال', desc: 'لمغص الرضع — 15 مل', img: IMG.bot, badge: null, rx: false },
    { id: 45, name: 'بروفين أطفال شراب', nameEn: 'Brufen Syrup', price: 72, oldPrice: null, cat: 'أدوية الأطفال', desc: 'إيبوبروفين للأطفال — 100 مل', img: IMG.bot, badge: null, rx: false },
    // التخسيس
    { id: 46, name: 'أوريستات 120', nameEn: 'Orlistat 120mg', price: 355, oldPrice: null, cat: 'التخسيس', desc: 'لتقليل امتصاص الدهون — 30 كبسولة', img: IMG.bot, badge: null, rx: true },
    { id: 47, name: 'جارسينيا كامبوجيا', nameEn: 'Garcinia Cambogia', price: 198, oldPrice: 245, cat: 'التخسيس', desc: 'مكمل طبيعي لفقدان الوزن — 60 كبسولة', img: IMG.vit, badge: 'offer', rx: false },
    { id: 48, name: 'L-كارنيتين', nameEn: 'L-Carnitine', price: 175, oldPrice: null, cat: 'التخسيس', desc: 'لحرق الدهون وتحسين التمثيل الغذائي', img: IMG.vit, badge: null, rx: false },
    // مستلزمات طبية
    { id: 49, name: 'شاش طبي معقم', nameEn: 'Sterile Gauze', price: 28, oldPrice: null, cat: 'مستلزمات طبية', desc: 'شاش معقم — 10 قطع', img: IMG.pill, badge: null, rx: false },
    { id: 50, name: 'جهاز قياس السكر', nameEn: 'Glucose Meter', price: 498, oldPrice: 598, cat: 'مستلزمات طبية', desc: 'جهاز جلوكوز الدم + 25 شريط', img: IMG.bot, badge: 'offer', rx: false },
    { id: 51, name: 'جهاز قياس الضغط', nameEn: 'BP Monitor', price: 898, oldPrice: null, cat: 'مستلزمات طبية', desc: 'جهاز رقمي لقياس ضغط الدم', img: IMG.bot, badge: null, rx: false },
    { id: 52, name: 'قفازات طبية', nameEn: 'Medical Gloves', price: 45, oldPrice: null, cat: 'مستلزمات طبية', desc: 'قفازات لاتكس معقمة — 10 أزواج', img: IMG.pill, badge: null, rx: false },
];
