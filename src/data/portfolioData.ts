import { MetricItem, SkillItem, ServiceItem, ProjectItem, WorkflowStep, TestimonialItem } from '../types';

export const HERO_METRICS: MetricItem[] = [
  {
    label: 'Tajriba',
    value: '2+',
    unit: 'yil',
    subtext: 'Amaliy veb muhandislik',
  },
  {
    label: 'Fiverr Bahosi',
    value: '5.0',
    unit: '★',
    subtext: '100% ijobiy mijozlar sharhi',
    isAccent: true,
  },
  {
    label: 'Yakunlangan',
    value: '15+',
    unit: 'sayt',
    subtext: 'Mahalliy va xalqaro bozor',
  },
  {
    label: 'Google PageSpeed',
    value: '95+',
    unit: 'ball',
    subtext: 'Optimizatsiya va tezlik',
    isAccent: true,
  },
];

export const PROFILE_STATS = [
  { label: 'Tajriba', value: '2+ Yil' },
  { label: 'Loyihalar', value: '15+ Veb-sayt' },
  { label: 'Fiverr', value: '5.0 / 5.0' },
  { label: 'Mamnunlik', value: '100%' },
];

export const UMAR_PHOTO_URL =
  'https://lh3.googleusercontent.com/aida/AEtjO1Xxeyy7wNw5INwHfN-ZCkVEmoy6RT1u6gvxKfXIasHCajPg3hWhwRffD0O-XOpvWU6TwtNcY3wqkv8nkLN8ZZBfIFXBmXcoHgq4LPZ_fryOcV0ckdoNEJEAmjKQzZbUMqABjooVrnEfWX_ZqxFy0Awy0CoEiP8IqU6KB7W0hCCnlhSIXnVU_ky5uEfje4PLOUNZEPpbP2YuAcp_-lYHO796o1d5jZxv1mQ1V5RCdBYd-RotiPGSl3tp8w';

export const SKILLS: SkillItem[] = [
  {
    id: 'wordpress',
    number: '01',
    title: 'WordPress',
    description: 'Chuqur CMS bilimlari, maʼlumotlar xavfsizligi, API integratsiyalari va maxsus plaginlar boshqaruvi.',
    badge: '2+ Yil amaliy tajriba',
    icon: 'code',
  },
  {
    id: 'elementor',
    number: '02',
    title: 'Elementor Pro',
    description: 'Pikselgacha aniqlik (Pixel-perfect), dinamik teglash, qulay bloklar tizimi va yengil CSS animatsiyalar.',
    badge: 'Ekspert darajasi',
    icon: 'dashboard_customize',
  },
  {
    id: 'figma',
    number: '03',
    title: 'Figma',
    description: 'UI/UX maketlar, veb-prototiplar bilan ishlash va dizaynni saytga 1:1 formatda koʻchirish texnikasi.',
    badge: 'Figma-to-WP Konversiya',
    icon: 'palette',
    accentColor: 'text-secondary',
  },
  {
    id: 'photoshop',
    number: '04',
    title: 'Photoshop',
    description: 'Veb grafika va bannerlar tayyorlash, WebP optimizatsiya va rasmlarni professional ishlov berish.',
    badge: 'Web Graphics',
    icon: 'photo_library',
    accentColor: 'text-secondary',
  },
  {
    id: 'speed-seo',
    number: '05',
    title: 'Speed & SEO',
    description: 'Google PageSpeed 90+, kesh plaginlari, texnik meta-teglar va organik qidiruvga tayyorgarlik.',
    badge: 'A+ Natijadorlik',
    icon: 'rocket_launch',
    accentColor: 'text-emerald-600',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'clinic',
    number: '01/06',
    title: 'Tibbiyot klinikalari va shifokorlar',
    description: 'Bemorlar uchun online qabul tizimi, xizmatlar va narxlar koʻrgazmasi, shifokorlar profili hamda pokiza tibbiy dizayn.',
    tags: ['Online navbat', 'Klinika'],
    icon: 'local_hospital',
    estimatedTimeline: '7-12 kun',
    deliverables: ['Shifokorlar jadvali', 'Telegram navbat boti', 'Onlayn toʻlov integratsiyasi', 'Mobil qulaylik'],
  },
  {
    id: 'corporate',
    number: '02/06',
    title: 'Kompaniyalar va xususiy firmalar',
    description: 'Kompaniyangiz nufuzini koʻrsatuvchi, hamkorlar ishonchini qozonuvchi korporativ veb-saytlar va xizmatlar taqdimoti.',
    tags: ['Brend imidji', 'Koʻp tillilik'],
    icon: 'corporate_fare',
    estimatedTimeline: '10-14 kun',
    deliverables: ['Korporativ brendbuk mosligi', 'Kompaniya xizmatlar portfeli', 'Koʻp tillilik (UZ/RU/EN)', 'HR vakansiyalar moduli'],
  },
  {
    id: 'law',
    number: '03/06',
    title: 'Yuridik va advokatlik byurolari',
    description: 'Mijozlar bilan birlamchi konsultatsiya, hal etilgan yutuqli ishlar portfeli va qatʼiy, elita vizual uslub.',
    tags: ['Konsultatsiya', 'Qatʼiy dizayn'],
    icon: 'gavel',
    estimatedTimeline: '6-10 kun',
    deliverables: ['Yuridik xizmatlar kalkulyatori', 'Muvaffaqiyatli ishlar arxivi', 'Maxfiy murojaat formasi', 'SSL va xavfsizlik protokollari'],
  },
  {
    id: 'factory',
    number: '04/06',
    title: 'Ishlab chiqarish va zavodlar',
    description: 'Mahsulotlar katalogi, xalqaro eksport talablari, ulgurji xaridorlar va distribyutorlar uchun B2B takliflar arxitekturasi.',
    tags: ['Katalog tizimi', 'B2B takliflar'],
    icon: 'factory',
    estimatedTimeline: '14-20 kun',
    deliverables: ['Filterli 300+ mahsulot katalogi', 'PDF spetsifikatsiya yuklab olish', 'Ulgurji narxlar soʻrovi', 'Xalqaro sertifikatlar bloki'],
  },
  {
    id: 'landing',
    number: '05/06',
    title: 'Kichik biznes & Landing Page',
    description: 'Maksimal konversiya beruvchi, reklama trafigini ushlab qolib toʻgʻridan-toʻgʻri buyurtmaga aylantiruvchi bir sahifali saytlar.',
    tags: ['Yuqori konversiya', 'Telegram Bot'],
    icon: 'filter_alt',
    estimatedTimeline: '3-6 kun',
    deliverables: ['A/B testga tayyor bloklar', 'Tezkor lead yigʻuvchi popup', 'Pixel va Analytics sozlamalari', '1 sekunddan tez yuklanish'],
  },
  {
    id: 'figma',
    number: '06/06',
    title: 'Figma / Photoshop → WordPress',
    description: 'Tayyor grafik maketingizni Elementor Pro yordamida 100% aniqlikda, toza kod va optimal tezlik bilan jonlantirish.',
    tags: ['100% Moslik', 'Clean Layout'],
    icon: 'integration_instructions',
    estimatedTimeline: '4-8 kun',
    deliverables: ['Pixel-perfect kodlash', 'Yengil CSS animatsiyalar', 'SEO qoidalari boʻyicha semantika', 'Shaxsiy boshqaruv video-yoʻriqnomasi'],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'medcare-plus',
    title: 'MedCare Plus',
    category: 'Tibbiyot va Klinika',
    clientType: 'Xususiy Klinika',
    locationOrBadge: 'Toshkent',
    description:
      'Zamonaviy xususiy klinika uchun rasmiy veb-sayt. Online shifokor qabuliga yozilish, xizmatlar kalkulyatori va Telegram bot orqali avtomatik administratorga xabar berish tizimi.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA-lkPH9PW0_CEJaCk92oag9GR9hcmYRmhkleli-jUMvlOWOQzq_W2Ox_toqkswp2xvjJSvM8uAqdr1zfU6rAx311-jvL8qPkR7Obri1svaFhdRXueV9YSx_NtFO3N53Ece9kuaeE8fRJHCDlH44x22_qJoLJ3wt_JJwcO_x72GvYak-LTqTU-0KpxdK0g9r-LEkE8wl7UB_zL5GIR8JzkJo2IdkxzEQdmu0KgAxCUN5cHsSW-qx-uQ',
    tags: ['WordPress', 'Elementor Pro'],
    metrics: {
      speedScore: 96,
      completionTime: '8 kun',
      pagesCount: '7 sahifa',
    },
    details: {
      client: 'MedCare Plus xususiy koʻp tarmoqli klinikasi',
      challenge:
        'Klinika bemorlari telefon orqali navbat olishda doimiy bandlikka duch kelar, shifokorlar jadvali va tekshiruv narxlari muntazam yangilanib turishi qiyin edi.',
      solution:
        'Elementor Pro va maxsus formlar orqali interaktiv qabul tizimi ishlab chiqildi. Bemor ariza qoldirganda administrator Telegram guruhiga darhol xabarnoma keladi.',
      elementorFeatures: [
        'Dinamik shifokorlar profili va qabul soatlari',
        'Telegram bot bilan toʻgʻridan-toʻgʻri webhook integratsiyasi',
        'Mobil qurilmalarda tezkor qoʻngʻiroq va lokatsiya tugmalari',
        'Tibbiy xizmatlar interaktiv narxlar jadvali',
      ],
      performanceHighlights: [
        'Desktop PageSpeed: 97/100, Mobile: 92/100',
        'Rasmlar WebP formatda va avtomatik lazy-loading',
        'Toza DOM strukturasi va minimal plagin yuki',
      ],
      liveDemoNote: 'Sayt faol rejimda ishlab, klinika navbatlarini 40% ga qisqartirdi.',
    },
  },
  {
    id: 'lexconsult-legal',
    title: 'LexConsult Legal',
    category: 'Yuridik Firma',
    clientType: 'Korporativ',
    locationOrBadge: 'Korporativ',
    description:
      'Xalqaro biznes huquqi agentligi uchun Figma maketi asosida tayyorlangan elita veb-sayti. 100% responsiv moslashuvchanlik va 1 soniyadan kam yuklanish tezligi.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBbn3sIlVgexgDiZMyXgaKxKOW4LbO0Y_wDJzl6GNwnh1ZTX5A9-nr3n_F5W7uBAbO4_WQLseMAwZwKI32y5ZRRhdZ8-DfcZN6mSDGskOAdqhk4clygSzJ_JXqtg1quWmnkWnffCDdqeVmYF_W40LtRcwbnkaPL_dfRgjg5N-sQ5Ciquag1nFvOy9cY7r8GykSJgHK33XN8UUwkc0GjKa31VJwtrWBAsCZ2pP9Ye8y8VyFeruPrE1ks',
    tags: ['Figma to WP', 'PageSpeed: 99'],
    metrics: {
      speedScore: 99,
      completionTime: '10 kun',
      pagesCount: '12 sahifa',
    },
    details: {
      client: 'LexConsult International Legal Partners',
      challenge:
        'Dizayner tomonidan tayyorlangan murakkab tipografik Figma maketini pikselligicha saqlab, yuridik elit brend ruhini yuklanish tezligini pasaytirmagan holda yaratish talab etildi.',
      solution:
        'Figma maketi Elementor Pro container tizimida noldan qayta terildi. Maxsus CSS bilan engil gradient va chiziqlar berilib, ortiqcha ogʻir kutubxonalarsiz amalga oshirildi.',
      elementorFeatures: [
        '1:1 Pixel-perfect Figma transferi',
        'Yuridik amaliyot sohalari boʻyicha qulay filtrlash',
        'Mijozlar bilan maxfiy soʻrov qoldirish formasi',
        'Advokatlar profili va yutuqli sud ishlari arxivi',
      ],
      performanceHighlights: [
        'Google PageSpeed Desktop: 99/100',
        '0.8 soniya First Contentful Paint (FCP)',
        'Barcha shriflar mahalliy serverdan yuklanadi',
      ],
      liveDemoNote: 'Xalqaro mijozlar bilan shartnomalar tuzishda asosiy ishonch vositasi.',
    },
  },
  {
    id: 'apex-manufacturing',
    title: 'Apex Manufacturing',
    category: 'Ishlab chiqarish & Zavod',
    clientType: 'B2B Katalog',
    locationOrBadge: 'B2B Katalog',
    description:
      'Yirik toʻqimachilik korxonasining 300+ mahsulotdan iborat texnik katalogi. Koʻp tillilik (Oʻzbek, Rus, Ingliz) va ulgurji xaridorlar bilan avtomatlashtirilgan muloqot tizimi.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB7BEYi0bSIvAtQIMMBF4JdLyjnPC1LgF9h6oREecCZKj8VtlZXZlkPhmbjp08d_qutbVVvzjvVhk3Lgsbe5yVYkojjwVHznUcYjN-aOauwuxcCbkkR805BxCZ67x8qX-3gSpRWvjrnYW5EfF459CFSIRpt9FpNUidvMLb6epNtl7obYQ8YJc5ptyClbHcCmDgJkJaTW0x222uCS9hsY9WhCTalg_pp11kpFEa-KjHICEk9zhK98Z3o',
    tags: ['WordPress', 'WPML Multi-lang'],
    metrics: {
      speedScore: 94,
      completionTime: '15 kun',
      pagesCount: '25+ sahifa',
    },
    details: {
      client: 'Apex Industrial & Textile Group',
      challenge:
        'Yuzlab mahsulotlar uchun texnik spetsifikatsiyalar, eksport talablari va 3 tilda bir xil ishonchli ishlovchi B2B portal kerak edi.',
      solution:
        'WordPress Custom Post Types va Elementor Pro yordamida qulay mahsulot boshqaruv paneli qurildi. Menejerlar bir necha daqiqada yangi mahsulot va sertifikat kiritish imkoniga ega boʻldi.',
      elementorFeatures: [
        'WPML orqali 3 tilda toʻliq sinxronlangan sahifalar',
        'Katalog boʻyicha qulay qidiruv va filtratsiya',
        'B2B ulgurji narx soʻrovi formasi',
        'Eksport qilinuvchi davlatlar interaktiv xaritasi',
      ],
      performanceHighlights: [
        'Kesh va Redis obyekt keshlash integratsiyasi',
        '300+ rasm bilan ham sahifa 1.3 soniyada toʻliq yuklanadi',
        'SEO doʻstona koʻp tilli URL strukturasi',
      ],
      liveDemoNote: 'Rossiya va Yevropaga eksport hajmini oshirishga xizmat qilmoqda.',
    },
  },
  {
    id: 'grand-auto-logistics',
    title: 'Grand Auto Logistics',
    category: 'Fiverr Xalqaro Loyiha',
    clientType: 'Logistika',
    locationOrBadge: '5.0 ★ Baho',
    description:
      'AQSH va Yevropa boʻylab yuk tashuvchi xalqaro kompaniya uchun Elementor Pro vositasida tayyorlangan tezkor sayt. Mijoz Fiverrʼda 5 yulduzli aʼlo baho qoldirgan.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDmKQxvOSe3rjhzNu5X4td-5ZztdFeboQVa-kWOyWs61omB4JLnr2UmBC0whzUHalcLsAGji5dmuv11cYq6uA0M9nnWPa7akC8KcnXZCMXXiL45r4rTuelOWPvSeLjEyXRvl06h5hmyPzxsj_N9LdYxHK9I8_-I1Rx4kYQIVK-szjt0L0Sl8i7YN7yOGH-ljmgcml3hy5JwJwSvjMDFnf65_JTXspLxiwz5YT5PNlPXEUPje6QR-ghY',
    tags: ['Elementor Pro', 'Kalkulyator'],
    metrics: {
      speedScore: 98,
      completionTime: '6 kun',
      pagesCount: '5 sahifa',
    },
    details: {
      client: 'Grand Auto Logistics LLC (AQSH)',
      challenge:
        'AQSH boʻylab avtomobil transportirovkasi uchun mijoz masofa va avtomobil turiga qarab onlayn narxni hisoblab beruvchi qulay kalkulyator talab qildi.',
      solution:
        'Elementor Pro shakllari va JavaScript asosida masofa va model boʻyicha real vaqtda transport narxini hisoblovchi kalkulyator ishlab chiqildi.',
      elementorFeatures: [
        'Interaktiv yuk narxi kalkulyatori',
        'Haydovchilar bilan tezkor aloqa moduli',
        'Google Maps marshrut integratsiyasi',
        'Fiverr orqali 5.0 yulduz bilan baholangan',
      ],
      performanceHighlights: [
        'AQSH serverlarida Cloudflare CDN bilan 0.6s javob vaqti',
        'Mobil foydalanuvchilar uchun "One-click Dispatch" tugmasi',
      ],
      liveDemoNote: 'Mijoz Markus Vance: "Outstanding work, delivery ahead of schedule!"',
    },
  },
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: '01',
    title: 'Tahlil va Reja',
    description:
      'Biznes maqsadingiz, auditoriyangiz va raqobatchilaringiz oʻrganiladi. Sahifalar strukturasi va funksiyalarning texnik talablari belgilanadi.',
  },
  {
    step: '02',
    title: 'Dizayn & Maket',
    description:
      'Figma yoki Photoshop vositalarida brendingizga mos zamonaviy maket tuziladi yoki sizdagi mavjud dizayn tahlil qilinadi.',
  },
  {
    step: '03',
    title: 'Ishlab Chiqish',
    description:
      'WordPress va Elementor Pro yordamida tezkor, xavfsiz va barcha smartfonlarda ideal moslashuvchi toza arxitektura qad koʻtaradi.',
  },
  {
    step: '04',
    title: 'Ishga Tushirish',
    description:
      'Sayt asosiy hostingga joylanadi, SEO va tezlik sozlanadi. Saytni tahrirlash boʻyicha shaxsiy videoyoʻriqnoma beriladi.',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'markus',
    name: 'Markus Vance',
    role: 'Logistika direktori (AQSH)',
    location: 'AQSH',
    quote:
      '“Umar Elementor boʻyicha haqiqiy professional! Figma dizaynimni hech qanday kamchiliksiz veb-saytga aylantirib berdi. Sayt nihoyatda tez ishlayapti, mijozlarimiz ham xursand.”',
    platform: 'Fiverr',
    rating: 5,
  },
  {
    id: 'sardor',
    name: 'Sardor Aliyev',
    role: 'Klinika asoschisi',
    location: 'Toshkent',
    quote:
      '“Klinikamiz uchun veb-sayt zarur edi. Umar bilan boshlagan kunimizdan hamma narsa vaqtida va tushunarli boʻldi. Online navbatga yozilish tizimini ajoyib integratsiya qildi.”',
    platform: 'Toshkent',
    rating: 5,
  },
  {
    id: 'david',
    name: 'David Miller',
    role: 'B2B Distributor',
    location: 'Buyuk Britaniya',
    quote:
      '“Katalog saytimiz juda koʻp mahsulotga ega boʻlishiga qaramay, yuklanish tezligi aʼlo darajada chiqdi. Umar doimo aloqada va oʻz ishining ustasi.”',
    platform: 'Fiverr',
    rating: 5,
  },
];
