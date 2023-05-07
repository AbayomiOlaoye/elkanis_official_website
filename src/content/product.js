const PRODUCTS = [
  {
    livestock: {
      product: 'El-kanis Livestock Supplements',
      feature_Img: '../assets/products/livestock_hd.svg',
      feautureHeadline: 'El-kanis Livestock Supplement Products',
      productImage: '../assets/products/live_bg.svg',
      intro: [
        'El-kanis and Partners also specializes in livestock supplement production. As the demand for meat and animal-based products continues to rise, the need for high-quality and sustainable livestock feed becomes increasingly important.',
        'El-kanis and Partners harnesses technology to develop innovative livestock supplements that are formulated to meet the nutritional needs of animals, while also minimizing the use of harmful additives and promoting animal welfare.',
      ],
      stats: {
        yields: '',
        farmer: {
          icon: '../assests/icons/man_chick.svg',
          counter: 12670,
          info: 'Livestock Farmers',
        },
        input: {
          icon: '../assests/icons/man_rice.svg',
          counter: 860,
          info: 'Agro Input Suppliers',
        },
        land: '',
      },
    },

    heavyWeight: {
      product: 'El-kanis Heavy Weight™',
      productImage: '../assets/products/heavy_weight.svg',
      keyFeatures: [],
      productInfo: 'This is a fat-powered vitamin for improved animal production, weight gain, good water intake, rapid growth, strong bone and good carcasses quality. It helps to control wet litter, mortality control and balances calcium phosphorus.',
      benefits: [
        'Increases egg production',
        'Increases immunity to stress',
        'Prevents bacterial infection in Chicks, Grower and Broiler',
        'Improves absorptions of nutrients from Gastro-Intestinal Tract',
        'Also Improves FCR and Weight Gains',
      ],
      howItWorks: [
        'EL-KANIS - HEAVY WEIGHT™ Organic boosters provide a number of essential nutrients that chickens need to stay healthy and grow properly.',
        "They can help improve your chickens' immune system, helping them stay healthy and productive.",
        'EL-KANIS - HEAVY WEIGHT™ Organic chicken growth boosters are made with natural ingredients, so they are a more sustainable choice than chemical additives.',
      ],
      dosage: [
        'From day old - 2weeks 550g (1sachet) to 100kg (4bags) of feed',
        'From 3weeks - Table size (Maturity) 550g (1sachet) to 50kg (2bags) of feed',
        'N/B: No withdrawal Period',
      ],
    },

    stopper: {
      product: 'El-kanis Stopper Solution™',
      productImage: '../assets/products/stopper.svg',
      productInfo: 'This is a natural solution for protecting broilers, broiler-breeders and non-caged layers against Eimeria infection, Fowl typhoid, Coccidiosis, Diarrhea and Chronic Respiratory Disease (CRD).',
      keyFeatures: [],
      benefits: [
        'El-Kanis Stopper Solution™ is the safest and most effective coccidiostat used in poultry farming. It effectively eliminates all strains of coccidian protozoa.',
        'It helps in eliminating the contaminants in the atmosphere. As a result, birds are not exposed to large volumes of sporulated oocysts, effectively preventing infections.',
        'Due to the extensive use of various anticoccidial drugs, drug-resistant parasites are on the rise. Compared to the other anticoccidial drugs, EL-kanis Stopper Solution™ is highly effective in preventing and treating coccidiosis.',
      ],
      howItWorks: [
        'Prevents bad effects of salmonellosis, colibacillosis, clostridium, etc.',
        'Safe and effective for all species of coccidian',
        'Herbal remedy against Ascites, Gout, and Gumboro',
      ],
      dosage: [
        'Treatment: 20ml (20% of the bottle) to 4liters of water for 3-5 days consecutively',
        'Prevention: 10ml (10% of the bottle) to 4litres of water for 3-5 days consecutively',
        'N/B: Shake well before use',
      ],
    },

    booster: {
      product: 'El-kanis Optimum Booster Solution™',
      productImage: '../assets/products/stopper.svg',
      productInfo: 'This product provides vitamins for optimal animal performance. It is very effective in supporting animal immunity and health. It is fortified with amino acids and vitamins and causes rapid weight gain and double breast development.',
      keyFeatures: [
        'Unique blend of all essential nutrients - amino 1 acids, vitamins, electrolytes & minerals',
        'Powdered formula - superior mixability for feed application',
        'Energy enhancer supplies energy during critical 3 phase',
        'Probiotic as a part of pack in separate chamber 4 for long term viability',
        'Please Read All Label Information on Delivery',
      ],
      benefits: ['Increases egg production',
        ' Increases immunity to stress',
        ' Prevents bacterial infection in Chicks, Grower and Broiler',
        'Improves absorptions of nutrients from Gastro-Intestinal Tract',
        'Also Improves FCR and Weight Gains',
      ],
      howItWorks: [
        'EL-KANIS - HEAVY WEIGHT™ Organic boosters provide a number of essential nutrients that chickens need to stay healthy and grow properly.',
        "They can help improve your chickens' immune system, helping them stay healthy and productive.",
        'EL-KANIS - HEAVY WEIGHT™ Organic chicken growth boosters are made with natural ingredients, so they are a more sustainable choice than chemical additives.',
      ],
      dosage: [
        'From day old - 2weeks 550g (1sachet) to 100kg (4bags) of feed',
        'From 3weeks - Table size (Maturity) 550g (1sachet) to 50kg (2bags) of feed.',
        'N/B: No withdrawal Period.',
      ],
    },

    fiems: {
      feature_Img: '../assets/products/livestock_hd.svg',
      feautureHeadline: 'Farmers Information & Enterprise Management System (FIEMS)',
      productImage: '../assets/products/fiems_bg.svg',
      intro: [
        'A digital platform that assist farmers in managing various aspects of their agricultural operations and other related activities. FIEMS typically provide farmers with tools and features that help them make informed decisions, optimize their resources, and improve their productivity and profitability.',
        'FIEMS support online and offline data collection, facilitate record keeping, and generate easily shareable reports for agricultural efficiency.',
      ],
      result: [
        'From the data, we build trade capacities through deployment of drone and satellite technology to map and digitize thousands of hectares of farmland, monitor soil condition, crop growth, crop health, crop performance and yield estimate, which currently increases yield by 40 percent annually for 25,000 farmers.',
        "Decision support and checklists increase adherence to protocols, improving extension agents' performance and efficiency.",
        'FIEMS send reminders to extension agents to follow up on low-performing farmers.',
      ],
      stats: {
        yields: '',
        farmer: {
          icon: '../assests/icons/man_chick.svg',
          counter: 12670,
          info: 'Livestock Farmers',
        },
        input: {
          icon: '../assests/icons/man_rice.svg',
          counter: 860,
          info: 'Agro Input Suppliers',
        },
        land: '',
      },
    },
    elkanRice: {
      feature_Img: '../assets/products/rice_hd.svg',
      feautureHeadline: 'El-kanis Livestock Supplement Products',
      productImage: '../assets/products/rice_bags.svg',
      intro: [
        'El-kanis and Partners also specializes in livestock supplement production. As the demand for meat and animal-based products continues to rise, the need for high-quality and sustainable livestock feed becomes increasingly important.',
        'El-kanis and Partners harnesses technology to develop innovative livestock supplements that are formulated to meet the nutritional needs of animals, while also minimizing the use of harmful additives and promoting animal welfare.',
      ],
      stats: {
        yields: {
          icon: '../assests/icons/rice.svg',
          counter: 11439,
          info: 'Metric tons of rice paddy processed',
        },
        farmer: {
          icon: '../assests/icons/farmers.svg',
          counter: 28652,
          info: 'Rice Farmers (50% women)',
        },
        input: {
          icon: '../assests/icons/man_rice.svg',
          counter: 860,
          info: 'Agro Input Suppliers',
        },
        land: {
          icon: '../assests/icons/land.svg',
          counter: 64652,
          info: 'Hectares of rice fields',
        },
      },
    },
    ivr: {
      yields: {
        icon: '../assests/icons/rice.svg',
        counter: 250241,
        info: 'Metric tons of rice paddy processed',
      },
      farmer: {
        icon: '../assests/icons/farmers.svg',
        counter: 28652,
        info: 'Rice Farmers (50% women)',
      },
      land: {
        icon: '../assests/icons/land.svg',
        counter: 64652,
        info: 'Hectares of rice fields',
      },
    },
  },
];

export default PRODUCTS;
