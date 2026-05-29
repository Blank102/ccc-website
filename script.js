const WA = "919911207713"; // ← YOUR WHATSAPP NUMBER HERE
const COURSE_PLACEHOLDER_BG = '#f5f5f5';

/* ── Homepage featured picks (3 each) ── */
const featuredBakingIds  = ['b1', 'b2', 'b3'];
const featuredCookingIds = ['c4', 'c14', 'c3'];


const baking = [
  {
    id: 'b1',
    images: ['img/Baking/Diploma/1.webp', 'img/Baking/Diploma/2.webp', 'img/Baking/Diploma/3.webp', 'img/Baking/Diploma/4.webp', 'img/Baking/Diploma/5.webp', 'img/Baking/Diploma/6.webp'],
    title: 'Six-Week Diploma Course',
    onlinePrice: '10,000',
    offlinePrice: '₹40,000',
    offlineDuration: '6 weeks',
    dur: '6 Weeks',

    desc: 'A comprehensive offline programme taking you from basics to professional — ideal for aspiring bakers, entrepreneurs and home bakers.',

    highlights: [
      'Professional Cake Baking & Decoration',
      '5 Full Hands-On Workshop Sessions',
      'Semi Hands-On Workshops',
      'Icing techniques & 5 types of whipped cream flowers',
      'WhatsApp Group Support for Doubts & Queries',
      'Certification, Custom Apron & Recipe Booklet',
      'Friendly Cake Competition & Exciting Gifts',
      'Business: Costing, Packaging, Marketing & Pricing'
    ],

    modules: [
      {
        title: 'Sponges',
        items: [
          'Vanilla Sponge (Eggless)',
          'Chocolate Sponge (Vegan)',
          'Red Velvet Sponge (Eggless)',
          'Butter Sponge (Vanilla & Chocolate)',
          'Milkmaid-Based Sponge',
          'Readymade Premix Sponge'
        ]
      },
      {
        title: 'Tea Time Cakes',
        items: [
          'Vanilla Tooti Frooti Cake',
          'Zebra Cake',
          'Orange Cake',
          'Upside Down Pineapple Cake',
          'Wheat & Oats Cake',
          'Lemon & Blueberry Cake',
          'Date & Walnut Cake',
          'Basic Chocolate Brownie'
        ]
      },
      {
        title: 'Designer Cakes & Flavours',
        items: [
          'Pineapple',
          'Strawberry',
          'Butterscotch',
          'Mix Fruit',
          'Black Forest',
          'Blueberry',
          'Chocolate Cakes'
        ]
      },
      {
        title: 'Muffins',
        items: [
          'Apple & Carrot Muffin',
          'Vanilla Choco Chip Muffin',
          'Chocolate Choco Chip Muffin',
          'Banana Muffin',
          'Oreo Muffin',
          'Gooey Chocolate Muffin'
        ]
      },
      {
        title: 'Cookies',
        items: [
          'Jeera Cookies',
          'Chocolate Gooey Cookies',
          'Wheat & Oats Cookies',
          'Nan Khatai',
          'Roll n Roll Biscuits',
          'Atta Cookies'
        ]
      },
      {
        title: 'Swiss Rolls',
        items: [
          'Choco Log',
          'Coconut Swiss Roll',
          'Pina Colada Roll',
          'Dil Khush Swiss Roll',
          'Red Velvet Swiss Roll & more'
        ]
      },
      {
        title: 'Pastry',
        items: [
          'Orange Temptation Pastry',
          'Blueberry Pastries',
          'Opera Pastry'
        ]
      },
      {
        title: 'Breads',
        items: [
          'Ladi Pav',
          'Garlic Bread',
          'Burger Bun',
          'Calzone',
          'Milk & Atta Bread',
          'Cinnamon Rolls',
          'Stuffed Bread'
        ]
      },
      {
        title: 'Truffle, Red Velvet & Chocolate Decorations',
        items: [
          'Classic Truffle Cake',
          'Ganache Making',
          'Wafer Paper Sail',
          'Rice Paper Sail',
          '5–6 Types of Chocolate Decorations',
          'Red Velvet Cake'
        ]
      },
      {
        title: 'Cupcakes',
        items: [
          'Chocolate & Vanilla Cupcake Base',
          'Various Icing Techniques',
          'Chocolate Frosting',
          'Sugar-Glazed Cupcakes',
          'Center-Filled Cupcakes'
        ]
      },
      {
        title: 'Advanced Cake Techniques',
        items: [
          '2-Tier Cakes with Airbrush Techniques (Hands-on)',
          '3-Tier Wedding Cakes OR Chandelier Cake',
          'Cube-Shaped Cake',
          'Cake Shapes: Doll, Dome/Sphere, Cylindrical, Cuboid, Round, Heart, Tall'
        ]
      },
      {
        title: 'Fondant Workshop',
        items: [
          'Hands-on Fondant Workshop',
          'Figurine Making',
          'Cake Covering'
        ]
      },
      {
        title: 'Hands-on Workshop',
        items: [
          '2 Hands-on Sessions',
          'Learn multiple flavours',
          'Take fully completed cakes'
        ]
      },
      {
        title: 'Certification',
        items: [
          'Certification & Diploma Distribution',
          'Friendly Cake Competition',
          'Custom Apron & Recipe Booklet',
          'Certificates & Exciting Gifts'
        ]
      }
    ]
  },

  {
    id: 'b2',
    images: ['img/Baking/Cake master/1.webp', 'img/Baking/Cake master/2.webp', 'img/Baking/Cake master/3.webp', 'img/Baking/Cake master/4.webp'],
    title: 'Cake Master Course',
    onlinePrice: '₹6,500',
    offlinePrice: '₹22,000',
    offlineDuration: '12 days',
    dur: '6 weeks',

    desc: 'A complete offline workshop covering basic to advanced whipped cream cakes, perfect for beginners to start their baking journey.',

    highlights: [
      'Basic to Advanced Whipped Cream Cake Diploma',
      '5 Full Hands-On Workshop Sessions',
      'Semi Hands-On Practice Sessions',
      'Learn Professional Cake Baking & Decoration',
      'Icing Techniques + 5 Types of Whipped Cream Flowers',
      'WhatsApp Support for Doubts & Queries',
      'Take Home Fully Completed Cakes',
      'Certification + Custom Apron + Recipe Booklet',
      'Friendly Cake Competition & Exciting Gifts',
      'Business Training: Costing, Pricing, Packaging & Marketing'
    ],

    modules: [
      {
        title: 'Sponges, Tea Time Cakes & Celebration Cakes',
        items: [
          'Vanilla Sponge (Eggless)',
          'Chocolate Sponge (Vegan)',
          'Red Velvet Sponge (Eggless)',
          'Butter Sponge (Vanilla & Chocolate)',
          'Milkmaid-Based Sponge',
          'Readymade Premix',
          'Classic Designer Cakes (Pineapple, Strawberry, Butterscotch, Mix Fruit, Black Forest, Blueberry, Chocolate)',
          'Hands-On: Take Home Fully Completed Designer Cake'
        ]
      },
      {
        title: 'Pastry, Breads & Fusion Cakes',
        items: [
          'Orange Temptation Pastry',
          'Blueberry Pastries',
          'Opera Pastry',
          'Hands-On Fusion Cakes Session'
        ]
      },
      {
        title: 'Truffle, Chocolate Decoration & Cupcakes',
        items: [
          'Classic Truffle Cake',
          'Belgium Truffle Cake',
          'Wafer Paper Sail',
          'Rice Paper Sail',
          '5–6 Types of Chocolate Decorations',
          'Sugar Lace',
          'Chocolate Cupcakes',
          'Vanilla Cupcakes',
          'Icing Techniques',
          'Chocolate Frosting',
          'Sugar-Glazed Cupcakes',
          'Center-Filled Cupcakes'
        ]
      },
      {
        title: 'Advanced Cake Techniques',
        items: [
          '2-Tier Cakes (Hands-On with Airbrush Techniques)',
          '3-Tier Wedding Cake OR Chandelier Cake',
          'Cube-Shaped Cake',
          'Multiple Cake Shapes: Doll, Dome, Cylindrical, Cuboid, Round, Heart, Tall Cakes'
        ]
      },
      {
        title: 'Certification & Extras',
        items: [
          'Friendly Cake Competition',
          'Custom Apron & Recipe Booklet',
          'Certificates & Exciting Gifts',
          'Learn 15+ Premium Flavours (Rasmalai, Ferrero Rocher, Exotic Paan, Gulab Jamun & more)',
          'Business Guidance: Start Your Home Bakery / Cloud Kitchen'
        ]
      }
    ]
  },

  {
    id: 'b3',
    images: ['img/Baking/Beginner to bakers/1.webp', 'img/Baking/Beginner to bakers/2.webp', 'img/Baking/Beginner to bakers/3.webp', 'img/Baking/Beginner to bakers/4.webp'],
    title: 'Beginners to Baker Workshop',
    price: '₹6,500',
    onlinePrice: '₹1,199',
    offlinePrice: '₹6,500',
    offlineDuration: '2 days',
    dur: '2 Days',

    desc: 'A complete hands-on offline workshop designed for beginners who want to start baking and take designer cake orders from home.',

    highlights: [
      '1 Full Hands-On Session',
      'Take Home Your Own Designer Cake',
      'Complete A-Z Learning of Cake Baking & Decoration',
      'Learn Bakery-Style Professional Cakes',
      'Certificate of Completion',
      'Pre-booking Required (Limited Slots)',
      'Live Demonstrations + Hands-On Practice',
      'Perfect for Starting a Home Baking Business'
    ],

    modules: [
      {
        title: 'Sponges (From Scratch)',
        items: [
          'Vanilla Sponge (Eggless)',
          'Chocolate Sponge (Eggless)'
        ]
      },
      {
        title: 'Designer Cake Decorations',
        items: [
          'Geode Cake',
          'Printed Fault Line Cake',
          'Glaze Cake',
          'Fault Line Cake',
          'Tiger Print Cake',
          'Photo Cake'
        ]
      },
      {
        title: 'Techniques & Skills',
        items: [
          'Torting Techniques',
          'Crumb Coating',
          'Perfect Sharp Edges',
          'Cream Whipping Science',
          'Cake Finishing Techniques',
          'Knowledge of Cake Tins & Sizes',
          'Drip Technique',
          'Rice Paper Sail',
          'Wafer Paper Sail',
          'Proper Soaking Syrups for Enhanced Taste'
        ]
      },
      {
        title: 'Cake Flavours',
        items: [
          'Black Forest Cake',
          'Chocolate Mousse Cake',
          'Caramel Butterscotch Cake',
          'Tangy Pineapple Cake',
          'Fruit Gateau',
          'Chunky Strawberry Cake',
          'Blueberry Cake'
        ]
      }
    ]
  },

  {
    id: 'b4',
    images: ['img/Baking/Swiss roll/1.webp', 'img/Baking/Swiss roll/2.webp', 'img/Baking/Swiss roll/3.webp', 'img/Baking/Swiss roll/4.webp'],
    title: 'Swiss Rolls',
    price: '₹699',
    onlinePrice: '₹699',
    offlinePrice: '₹2,500',
    offlineDuration: '2 days',
    dur: '6 Weeks',

    desc: '	Master soft eggless Swiss rolls with clean rolling techniques, smooth fillings, and a variety of bakery-style flavours.',

    highlights: [
      'Lifetime Video Access',
      'WhatsApp Support for Doubts',
      'Detailed PDF Notes Included',
      'Costing & Pricing Guidance',
      'Master Eggless Swiss Roll Techniques',
      'Learn Multiple Premium Flavours',
      'Perfect for Home Bakers & Small Business'
    ],

    modules: [
      {
        title: 'Eggless Sheet Sponge',
        items: [
          'Vanilla Sheet Sponge',
          'Chocolate Sheet Sponge',
          'Red Velvet Sheet Sponge'
        ]
      },
      {
        title: 'Techniques & Business',
        items: [
          'Perfect Rolling Techniques',
          'Soft & Crack-Free Sponge Tips',
          'Filling & Flavour Pairing',
          'Costing & Pricing for Orders'
        ]
      },
      {
        title: 'Swiss Roll Flavours',
        items: [
          'Pistachio Swiss Roll',
          'Dilkhush Swiss Roll',
          'Jim Jam Swiss Roll',
          'Orange Temptation Swiss Roll',
          'Red Velvet Swiss Roll',
          'Strawberry Swiss Roll',
          'Coconut Swiss Roll',
          'Choco Log Swiss Roll',
          'Mango Mania Swiss Roll',
          'Blueberry Swiss Roll',
          'Black Forest Swiss Roll',
          'Kiwi Swiss Roll',
          'Cashew Swiss Roll',
          'Pina Colada Swiss Roll',
          'Hazelnut Swiss Roll',
          'Biscoff Swiss Roll'
        ]
      }
    ]
  },

  {
    id: 'b5',
    images: ['img/Baking/Pastries/1.webp', 'img/Baking/Pastries/2.webp', 'img/Baking/Pastries/3.webp'],
    title: 'Pastries',
    price: '₹499',
    onlinePrice: '₹499',
    offlinePrice: '₹1,500',
    offlineDuration: '1 day',
    dur: '2.5 hrs',

    desc: 'Learn to create soft sponges, balanced creams, and classic bakery-style pastries with a polished professional finish.',

    highlights: [
      'Lifetime Video Access',
      'Learn Bakery-Style Pastries at Home',
      'Step-by-Step Easy Techniques',
      'Perfect for Beginners & Home Bakers',
      'Limited Time Offer'
    ],

    modules: [
      {
        title: 'Pastry & Sponge Mastery',
        items: [
          'Vanilla Sponge',
          'Chocolate Sponge',
          'Opera Pastry',
          'Orange Temptation Pastry',
          'Blueberry Pastry'
        ]
      }
    ]
  },

  {
    id: 'b6',
    images: ['img/Baking/Tea time/1.webp', 'img/Baking/Tea time/2.webp', 'img/Baking/Tea time/3.webp'],
    title: 'Tea Time Cakes',
    price: '₹699',
    onlinePrice: '₹699',
    offlinePrice: '₹2,000',
    offlineDuration: '1 day',
    dur: '3 hrs',

    desc: '	Bake unique eggless tea-time cakes suited for festive celebrations, gifting, and everyday homemade treats.',

    highlights: [
      'Pre-recorded Tutorials with Lifetime Access',
      'WhatsApp / On-call Doubt Support',
      'Printed Recipe Notes Included',
      '10 Unique Festive Tea-Time Cakes',
      'Eggless Recipes with Healthy Variations',
      'Perfect Alternative to Market Sweets'
    ],

    modules: [
      {
        title: 'Festive Tea-Time Cakes & Glazes',
        items: [
          'Lemon Nutty Affair Cake',
          'Pineapple Upside Down Cake',
          'Orange Nutty Spiced Cake',
          'Caramelised Apple Cinnamon Cake',
          'Masala Chai Mocha Cake',
          'German Chocolate Cake',
          'Banana Berry Yogurt Cake',
          'Wheat & Oats Nutty Cake',
          'Almond Walnut Streusel Cake',
          'Banana Whole Wheat Jaggery Cake',
          'Lemon Glaze',
          'Orange Glaze'
        ]
      }
    ]
  },

  {
    id: 'b7',
    images: ['img/Baking/Eggless muffins/1.webp', 'img/Baking/Eggless muffins/2.webp', 'img/Baking/Eggless muffins/3.webp',  'img/Baking/Eggless muffins/4.webp'],
    title: 'Pastries',
    title: 'Eggless Muffins Workshop',
    price: '₹699',
    onlinePrice: '₹699',
    offlinePrice: '₹2,000',
    offlineDuration: '1 day',
    dur: '3 hrs',

    desc: '	Bake soft, flavourful eggless muffins with classic combinations, creative variations, and reliable texture technique.',

    highlights: [
      'Lifetime Recorded Sessions',
      'Printed Recipe Notes Included',
      'Online Assistance for Doubts & Queries',
      '11 Unique Muffin Flavours',
      'Eggless Baking Techniques',
      'Perfect for Home Baking & Small Orders'
    ],

    modules: [
      {
        title: 'Muffin Flavours',
        items: [
          'Apple & Carrot Muffins',
          'Orange Muffins',
          'Lemon Blueberry Muffins',
          'Wheat & Oats Muffins',
          'Choco Mocha Muffins',
          'Vanilla Choco Chip Muffins',
          'Double Choco Chip Muffins',
          'Vanilla Crumble Muffins',
          'Banana Benjo Muffins',
          'Oreo Muffins',
          'Tutti Frutti Muffins'
        ]
      }
    ]
  },

  {
    id: 'b8',
    images: ['img/Baking/Center filled muffins/1.webp', 'img/Baking/Center filled muffins/2.webp', 'img/Baking/Center filled muffins/3.webp', 'img/Baking/Center filled muffins/4.webp'],
    title: 'Center Filled Muffins',
    price: '₹699',
    onlinePrice: '₹699',
    offlinePrice: '₹2,000',
    offlineDuration: '1 day',
    dur: '3 hrs',

    desc: '	Master soft muffins with rich centre fillings, premium flavours, and clean bakery-style presentation.',

    highlights: [
      'Lifetime Video Access',
      'WhatsApp Support for Doubts',
      'Detailed PDF Notes Included',
      'Learn Centre-Filled Muffin Techniques',
      'Multiple Flavours + Extra Recipes',
      'Perfect for Home Bakers & Small Businesses'
    ],

    modules: [
      {
        title: 'Centre Filled Muffins & Variations',
        items: [
          'Vanilla Chocolate Chip Muffins',
          'Chocolate Cranberry Muffins',
          'Banana Walnut Centre-Filled Muffins',
          'Red Velvet Muffins',
          'Centre-Filled Chocolate Chip Muffins',
          'Chocolate Peanut Muffins',
          'Kesar Badam Muffins',
          'Kesar Pista Muffins',
          'Coconut Muffins',
          'Festive Elaichi Muffins'
        ]
      },
      {
        title: 'Bonus Recipes',
        items: [
          'Banana Chocolate Muffins',
          'Banana Pudding Muffins',
          'Nutella Muffins',
          'Chocolate Almond Muffins',
          'Lemon Blueberry Muffins'
        ]
      }
    ]
  },

  {
    id: 'b9',
    images: ['img/Baking/Sponge masterclass/sponge 1.webp', 'img/Baking/Sponge masterclass/sponge 2.webp'],
    title: 'Cake Sponges Masterclass',
    price: '₹699',
    onlinePrice: '₹699',
    offlinePrice: '₹2,500',
    offlineDuration: '1 days',
    dur: '4 hrs',

    desc: '	Perfect soft eggless cake sponges using simple ingredients, stable methods, and professional baking fundamentals',

    highlights: [
      'Lifetime Access to Recorded Sessions',
      'Written Recipe Notes Included',
      'WhatsApp Support for Doubts',
      '10 Master Eggless Sponge Recipes',
      'No Butter / No Preservatives (Selected Recipes)',
      'Learn Professional Bakery-Style Sponge Techniques',
      'Perfect Base for Cake Decoration & Orders'
    ],

    modules: [
      {
        title: 'Eggless Sponges',
        items: [
          'Vanilla Sponge',
          'Dark Chocolate Sponge',
          'Red Velvet Sponge',
          'Almond Cardamom Sponge',
          'Milkmaid Sponge',
          'Coconut Sponge',
          'Butter Vanilla Sponge',
          'Butter Chocolate Sponge',
          'Coffee Sponge',
          'Lemon Sponge'
        ]
      }
    ]
  },

  {
    id: 'b10',
    images: ['img/Baking/Beginners course 1/1.webp', 'img/Baking/Beginners course 1/2.webp', 'img/Baking/Beginners course 1/3.webp', 'img/Baking/Beginners course 1/4.webp'],
    title: 'Beginner Baking Course 1',
    price: '₹1,299',
    onlinePrice: '₹1,299',
    offlinePrice: '₹3,000',
    offlineDuration: '2 days',
    dur: '5 hrs',

    desc: 'A beginner-friendly workshop covering muffins, tea-time cakes, sponge basics, and cake decoration to help you start your baking journey with confidence.',

    highlights: [
      'Lifetime Video Access',
      'Printed Notes Included',
      'Online Assistance for Queries',
      'Eggless Baking Techniques',
      'Covers Baking Basics + Decoration',
      'Perfect for Absolute Beginners',
      'Includes Oven, Tools & Measurement Guidance'
    ],

    modules: [
      {
        title: 'Baking Basics & Tips',
        items: [
          'Oven & Microwave Usage',
          'Measuring Cups & Spoons',
          'Basic Baking Techniques',
          'Eggless Baking Fundamentals'
        ]
      },
      {
        title: 'Muffins',
        items: [
          'Apple & Carrot Muffins',
          'Orange Muffins',
          'Lemon Blueberry Muffins',
          'Wheat & Oats Muffins',
          'Choco Mocha Muffins',
          'Vanilla Choco Chip Muffins',
          'Double Choco Chip Muffins',
          'Vanilla Crumble Muffins'
        ]
      },
      {
        title: 'Tea-Time Cakes',
        items: [
          'Orange / Malai Cake',
          'Zebra / Marble Cake',
          'Vanilla Tutti Frutti Cake',
          'Date & Walnut Cake',
          'Chocolate Cheesecake',
          'Butter Vanilla Sponge (Granny\'s Cake)'
        ]
      },
      {
        title: 'Icing & Cake Decoration',
        items: [
          'Black Forest Cake',
          'Exotic Fruit Cake',
          'Brownie Cake Decoration',
          'Basic Icing Techniques'
        ]
      }
    ]
  },

  {
    id: 'b11',
    images: ['img/Baking/Tier cake/1.webp', 'img/Baking/Tier cake/2.webp', 'img/Baking/Tier cake/3.webp'],
    title: 'Tier Cake',
    price: '₹699',
    onlinePrice: '₹699',
    offlinePrice: '₹3,000',
    offlineDuration: '1 day',
    dur: '6 hrs',

    desc: 'An advanced workshop to help you master professional tier cake stacking, airbrush techniques, and safe cake delivery methods.',

    highlights: [
      'Lifetime Video Tutorials',
      'Online Workshop with Expert Guidance',
      'Learn 3-Tier Cake Stacking & Assembly',
      'Airbrush Techniques for Professional Finishing',
      'Safe Packing & Delivery Methods',
      'Perfect for Professional Bakers & Cake Businesses'
    ],

    modules: [
      {
        title: 'Tier Cake Foundations',
        items: [
          'A-Z Science Behind Tier Cakes',
          'Choosing Correct Pan Sizes',
          'Flavour & Medium Combinations for Tiers',
          'Whipped Cream Stability Techniques'
        ]
      },
      {
        title: 'Stacking & Structure',
        items: [
          'How to Stack 3-Tier Cakes Safely',
          'Structural Support Techniques',
          'Achieving Sharp Edges',
          'Perfect Finishing & Assembly'
        ]
      },
      {
        title: 'Airbrush Techniques',
        items: [
          'Airbrush Basics & Equipment',
          'Colour Application with Minimal Usage',
          'Airbrush Shading Techniques',
          'Creating Bright & Dark Finishes'
        ]
      },
      {
        title: 'Packing & Transportation',
        items: [
          'Safe Packing Techniques',
          'Transporting Tier Cakes Without Damage',
          'Handling Delicate Cakes (Whipped Cream, Truffle, Fondant, Buttercream)'
        ]
      }
    ]
  },

  {
    id: 'b12',
    images: ['img/Baking/cupcakes/1.webp', 'img/Baking/cupcakes/2.webp'],
    title: 'Designer Cupcakes',
    price: '₹666',
    onlinePrice: '₹666',
    offlinePrice: '₹2,000',
    offlineDuration: '1 day',

    desc: 'Create beautiful designer cupcakes with baking, filling, frosting, and decoration techniques for a premium finish.',

    highlights: [
      'Printed Notes Included',
      'Online Assistance for Queries',
      'Learn Designer Cupcake Techniques',
      'Covers Baking, Filling & Decoration',
      'Perfect for Home Bakers & Gifting',
      'Includes Packaging & Presentation Tips'
    ],

    modules: [
      {
        title: 'Cupcake Basics',
        items: [
          'Perfect Vanilla Cupcake',
          'Chocolate Cupcakes',
          'Butter Vanilla Cupcakes',
          'Baking Techniques for Soft Texture'
        ]
      },
      {
        title: 'Fillings & Flavours',
        items: [
          'Center Filling Techniques',
          'Pineapple Filling',
          'Strawberry Filling',
          'Mango Filling',
          'Butterscotch Filling',
          'Truffle Filling',
          'Custom Flavour Variations'
        ]
      },
      {
        title: 'Frosting & Decoration',
        items: [
          'Whipping Perfect Cream',
          'Flavoured Sugar Frosting',
          'Vanilla Sugar Glaze',
          'Piping Techniques',
          'Nozzle Usage & Designs',
          'Russian Nozzle Techniques',
          'Shading & Colouring in Frosting'
        ]
      },
      {
        title: 'Finishing & Presentation',
        items: [
          'Filling & Packing Cupcakes',
          'Gifting Presentation Tips',
          'Professional Finishing Techniques'
        ]
      }
    ]
  },

  {
    id: 'b13',
    title: 'Buttercream Cupcake',
    price: '₹699',
    onlinePrice: '₹699',
    offlinePrice: '₹2,000',
    offlineDuration: '2 days',

    desc: 'Master classic buttercream cupcakes with unique flavours, smooth fillings, and elegant decoration techniques.',

    highlights: [
      'Lifetime Video Access',
      'Pre-recorded Full-Length Sessions',
      'Detailed Professional Recipes',
      'WhatsApp Support for Queries',
      'Learn Buttercream Techniques & Flavour Pairing',
      'Includes Multiple Sponges, Fillings & Frostings'
    ],

    modules: [
      {
        title: 'Signature Cupcakes',
        items: [
          'Lime Pistachio Cupcake',
          'S\'mores Cupcake',
          'Chocolate Orange Cupcake',
          'Sangria Cupcake',
          'Beach Theme Cupcake',
          'Blueberry Cheesecake Cupcake'
        ]
      },
      {
        title: 'Sponges',
        items: [
          'Pistachio Sponge',
          'Fruit Sponge',
          'Chocolate Sponge',
          'Ginger Christmas Sponge',
          'Coconut Sponge',
          'Blueberry Sponge'
        ]
      },
      {
        title: 'Fillings & Frostings',
        items: [
          'Orange Marmalade',
          'Orange Buttercream',
          'Mixed Berry Buttercream',
          'Passion Fruit Curd',
          'Coconut Ermine Buttercream',
          'Blueberry Cheesecake Filling',
          'Blueberry Cream Cheese Frosting',
          'Lemon Buttercream',
          'Pistachio Praline'
        ]
      }
    ]
  },

  {
    id: 'b14',
    images: ['img/Baking/Truffle/1.webp'],
    title: 'Truffle Cake',
    price: '₹699',
    onlinePrice: '₹699',
    offlinePrice: '₹2,000',
    offlineDuration: '1 day',

    desc: 'Make rich bakery-style truffle cakes with ganache handling, sharp finishing, and premium chocolate techniques.',

  highlights: [
    'Professional Truffle Cake Techniques',
    'Dark, Milk & White Chocolate Ganache',
    'Sharp Edge Finishing Skills',
    'Tall Cake Frosting Techniques',
    'Bakery-Style Chocolate Sponge',
    'Professional Cake Structuring',
    'Perfect for Professional Bakers & Businesses'
  ],

  modules: [
    {
      title: 'Truffle Cake Foundations',
      items: [
        'Understanding Truffle Cakes',
        'Layering & Filling Techniques',
        'Cake Moistening Methods',
        'Professional Finishing Concepts'
      ]
    },
    {
      title: 'Ganache Techniques',
      items: [
        'Dark Chocolate Ganache',
        'Milk Chocolate Ganache',
        '1:1 Ganache Ratio',
        '2:1 Ganache Ratio',
        '3:1 Ganache Ratio',
        'Dripping & Glazing Techniques',
        'Sharp Edge Frosting'
      ]
    },
    {
      title: 'Chocolate Sponge',
      items: [
        'Eggless Chocolate Sponge',
        'Bakery-Style Texture',
        'Moist Sponge Techniques',
        'Perfect Baking Methods'
      ]
    },
    {
      title: 'Tools & Professional Skills',
      items: [
        'Tall Scraper Usage',
        'Palette Knife Techniques',
        'Cake Smoother Techniques',
        'Chocolate Handling',
        'Cake Assembly & Decoration'
      ]
    }
  ],

  topics: [
    'Truffle Cake Techniques',
    'Professional Ganache Skills',
    'Sharp Edge Finishing',
    'Advanced Chocolate Baking'
  ]
  },

  {
    id: 'b15',
    images: ['img/Baking/Cookies/1.webp', 'img/Baking/Cookies/2.webp', 'img/Baking/Cookies/3.webp', 'img/Baking/Cookies/4.webp', 'img/Baking/Cookies/5.webp'],
    title: 'Cafe Cookies',
    price: '₹1,199',
    onlinePrice: '₹1,199',
    offlinePrice: '₹3,000',
    offlineDuration: '2 days',

    desc: 'A workshop to help you master café-style premium cookies, butter cookies and festive gifting favourites with professional eggless recipes.',

    highlights: [
    '23 Main Cookie Recipes',
    '35+ Total Cookie Variations',
    '100% Eggless Butter Cookies',
    'No Preservatives or Chemicals',
    'Lifetime Video Access',
    'Printed Recipe Notes Included',
    'Online Assistance for Queries',
    'Perfect for Festive Gifting & Home Business'
  ],

  modules: [
    {
      title: 'Classic & Healthy Cookies',
      items: [
        'Digestive Cookies',
        'Cinnamon Raisin Oats Cookies',
        'Atta Cookies',
        'Jeera Biscuits',
        'All-Purpose Cookies'
      ]
    },
    {
      title: 'Filled & Premium Cookies',
      items: [
        'Nutella Filled Cookies',
        'Red Velvet Cookies',
        'Chocolate Cookies',
        'Gems Filled Cookies',
        'Jam Cookies'
      ]
    },
    {
      title: 'Butter Cookies & Variations',
      items: [
        'Butter Cookies',
        'Pineapple Butter Cookies',
        'Paan Butter Cookies',
        'Rose Butter Cookies',
        'Rasmalai Butter Cookies'
      ]
    },
    {
      title: 'Traditional & Festive Cookies',
      items: [
        'Nan Khatai (4 Variations)',
        'Karachi Biscuits',
        'Roll n Roll Biscuits',
        'Chaand Cookies',
        'Kaju Pista Cookies',
        'Pista Badam Cookies'
      ]
    },
    {
      title: 'Specialty Cookies & Biscotti',
      items: [
        'Almond Biscotti',
        'Cranberry Biscotti',
        'Coconut Melting Moment Cookies',
        'Cornflakes Cookies',
        'Almond Cookies'
      ]
    }
  ],

  topics: [
    'Cafe-Style Cookies',
    'Butter Cookie Techniques',
    'Festive Baking',
    'Professional Eggless Baking'
  ]
  },

  {
    id: 'b16',
    images: ['img/Baking/Cookie tin/all.webp', 'img/Baking/Cookie tin/2.webp', 'img/Baking/Cookie tin/3.webp'],
    title: 'Dubai Viral Cookie Tin',
    price: '₹699',
    onlinePrice: '₹699',
    offlinePrice: '₹2,000',
    offlineDuration: '1 day',

    desc: 'Make viral Dubai-style cookie tins with center-filled gourmet cookies, perfect for gifting or selling.',

    highlights: [
    'Lifetime Video Access',
    'WhatsApp Support Included',
    'PDF Notes Provided',
    'Eggless & Budget-Friendly Recipes',
    'Trending Viral Cookie Tin Concepts',
    'Pricing & Selling Tips Included',
    'Perfect for Home Bakers & Businesses'
  ],

  modules: [
    {
      title: 'Dubai Viral Cookie Tin Recipes',
      items: [
        'Hazelnut Brookies',
        'Classic Cookies Tin',
        'Double Chocolate Cookies Tin',
        'Caramel Brookie',
        'Pista Kunafa Cookies',
        'Red Velvet Bomb',
        'Biscoff Cookies Tin'
      ]
    },
    {
      title: 'Bonus Learning',
      items: [
        'Pricing Techniques',
        'Selling Tips',
        'Cookie Tin Presentation Ideas'
      ]
    }
  ],

  topics: [
    'Gourmet Cookie Baking',
    'Brookies & Lava Desserts',
    'Trending Dessert Concepts',
    'Home Baking Business Skills'
  ]
  },

  {
    id: 'b17',
    images: ['img/Baking/Gourmet cookies/1.webp'],
    title: 'Gourmet Cookies',
    price: '₹699',
    onlinePrice: '₹699',
    offlinePrice: '₹2,500',
    offlineDuration: '2 days',

    desc: 'A workshop to help you master rich gourmet and lava-filled cookies with premium flavours and bakery-style techniques.',

    highlights: [
    '11 Gourmet Cookie Recipes',
    'Lifetime Video Access',
    'Expert Guidance & Support',
    'Bakery-Style Filled Cookies',
    'Perfect for Home Bakers & Businesses',
    'Private Online Workshop Access'
  ],

  modules: [
    {
      title: 'Gourmet Filled Cookies',
      items: [
        'Chocolate Filled Fantasy Cookies',
        'Red Velvet Chocolate Filled Fantasy Cookies',
        'Dreamy Double Chocolate Cookies',
        'Almond Chocolate Filled Cookies',
        'Triple Chocolate Filled Cookies',
        'Walnut Pista Gourmet Cookies',
        'Biscoff Filled Cookies',
        'Marshmallow Gourmet Cookies',
        'Pista & Rose Cookies',
        'Twix Gourmet Cookies',
        'Pista & Chocolate Filled Cookies'
      ]
    }
  ],

  topics: [
    'Gourmet Cookie Techniques',
    'Filled & Lava Cookies',
    'Premium Bakery-Style Baking',
    'Cookie Business Skills'
  ]
  },

  {
    id: 'b18',
    images: ['img/Baking/Millet cookies/1.webp', 'img/Baking/Millet cookies/2.webp', 'img/Baking/Millet cookies/3.webp', 'img/Baking/Millet cookies/4.webp'],
    title: 'Millet Cookies',
    price: '₹1,199',
    onlinePrice: '₹1,199',
    offlinePrice: '₹3,000',
    offlineDuration: '2 days',

    desc: '	Bake healthy cookies using wholesome ingredients, with sugar-free, vegan, gluten-free, and no-maida options.',

    highlights: [
    '20 Healthy Cookie Recipes',
    'Sugar-Free & Gluten-Free Options',
    'No Maida Recipes',
    'Vegan & Healthy Baking Techniques',
    'Live Tutorial Sessions',
    'Printed Notes Included',
    'WhatsApp Support',
    'Lifetime Access to Tutorials'
  ],

  modules: [
    {
      title: 'Healthy Multigrain Cookies',
      items: [
        'Multigrain Oats Apricot Peach Cookies',
        'Healthy Quinoa Cookies',
        'Multigrain Oats & Raisin Cookies',
        'Millet Cookies',
        'Multigrain Pistachio & Rose Cookies'
      ]
    },
    {
      title: 'Gluten-Free & Sugar-Free Cookies',
      items: [
        'Gluten-Free Chocolate Ragi Cookies',
        'Finger Millet Jowar Double Chocolate Cookies',
        'Gluten-Free Sorghum Jeera Cookies',
        'Gluten-Free Rice Flour Cookies',
        'Gluten-Free Almond Butter Cookies',
        'Sugar-Free Almond & Cranberry Cookies',
        'Sugar-Free Jowar Barley Cookies'
      ]
    },
    {
      title: 'Whole Wheat & Oats Cookies',
      items: [
        'Whole Wheat Peanut & Oats Cookies',
        'Whole Wheat Oats & Jeera Cookies',
        'Whole Wheat Orange Chocochip Cookies'
      ]
    },
    {
      title: 'Specialty Healthy Bakes',
      items: [
        'Keto Cookies',
        'Healthy Red Velvet Sorghum Cookies',
        'Honey Oats Lemon Coconut Cookies',
        'Amaranth Chocolate Cookies',
        'Whole Wheat Cheesy Crackers'
      ]
    }
  ],

  topics: [
    'Healthy Baking',
    'Gluten-Free Techniques',
    'Vegan & Sugar-Free Baking',
    'Wholesome Cookie Recipes'
  ]
  },

  {
    id: 'b19',
    images: ['img/Baking/Breads/1.webp', 'img/Baking/Breads/2.webp', 'img/Baking/Breads/3.webp', 'img/Baking/Breads/4.webp'],
    title: 'Breads',
    price: '₹699',
    onlinePrice: '₹699',
    offlinePrice: '₹2,000',
    offlineDuration: '1 day',

    desc: 'This workshop will help you master soft and artisan-style homemade breads without preservatives or chemicals.',

  highlights: [
    'Fresh Homemade Bread Techniques',
    'Soft & Hard Bread Varieties',
    'Chemical-Free Baking',
    'Recipe Explanations Included',
    'Perfect for Snacks & Meals',
    'Ideal for Home Bakers & Businesses'
  ],

  modules: [
    {
      title: 'Soft Breads',
      items: [
        'Ladi Pav',
        'White Bread',
        'Burger Buns',
        'Focaccia',
        'Hot Dog Bread',
        'Oats Bread',
        'Subway Bread',
        'Garlic Bread',
        'Cheese Loaf',
        'Whole Wheat Bread',
        'Cinnamon Rolls',
        'Calzones',
        'Masala Bread'
      ]
    },
    {
      title: 'Hard Breads',
      items: [
        'Baguette',
        'Hard Rolls',
        'Pizza Base'
      ]
    },
    {
      title: 'Bonus Recipes & Explanations',
      items: [
        'High Fiber Bread',
        'Corn Bread',
        'Multigrain Bread',
        'Gluten-Free Bread',
        'Cracker Wheat Bread'
      ]
    }
  ],

  topics: [
    'Bread Baking Techniques',
    'Soft & Artisan Breads',
    'Healthy Bread Recipes',
    'Homemade Baking Skills'
  ]
  },

  {
    id: 'b20',
    title: 'No Maida Healthy Breads',
    price: '₹699',
    onlinePrice: '₹699',
    offlinePrice: '₹3,000',
    offlineDuration: '2 days',

    desc: 'Learn to bake nutritious gluten-free breads at home with simple, wholesome ingredients.',

  highlights: [
    'No Maida & No Refined Sugar Recipes',
    'Healthy Whole Wheat & Multigrain Baking',
    'Lifetime Video Access',
    'Detailed Tutorials & PDF Notes',
    'WhatsApp Support Included',
    'Healthy Pizza & Bread Variations',
    'Perfect for Everyday Healthy Baking'
  ],

  modules: [
    {
      title: 'Healthy Bread Recipes',
      items: [
        '100% Whole Wheat Bread',
        'Multigrain Bread',
        'Semolina Bread',
        'Beetroot Bread',
        'Focaccia Bread',
        'Multigrain Italian Buns',
        'Multigrain Ladi Pav',
        'Multigrain Garlic Bread',
        'Subway-Style Bread',
        'Pesto Spiral Bread',
        'Blueberry Bloom Bread',
        'Masala Stuffed Bread'
      ]
    },
    {
      title: 'Healthy Pizza Bases',
      items: [
        'Whole Wheat Pizza',
        'Semolina Pizza Base',
        'Multigrain Pizza Base'
      ]
    }
  ],

  topics: [
    'Healthy Bread Baking',
    'Whole Wheat & Multigrain Baking',
    'Healthy Pizza Bases',
    'Wholesome Everyday Baking'
  ]
  },

  {
    id: 'b21',
    images: ['img/Baking/Cheesecakes/1.webp', 'img/Baking/Cheesecakes/2.webp', 'img/Baking/Cheesecakes/3.webp', 'img/Baking/Cheesecakes/4.webp'],
    title: 'Cold and Baked Cheesecake',
    price: '₹699',
    onlinePrice: '₹699',
    offlinePrice: '₹3,000',
    offlineDuration: '2 days',

    desc: 'Master eggless baked and chilled cheesecakes with smooth textures, balanced flavours, and storage guidance.',

    highlights: [
    '100% Eggless & Vegetarian Recipes',
    'No Gelatin Used',
    'Baked & Chilled Cheesecake Techniques',
    'Cheesecake Storage Guidance',
    'Extra Printed Recipes Included',
    'Multiple Flavour Variations',
    'Perfect for Home Bakers & Businesses'
  ],

  modules: [
    {
      title: 'Baked Cheesecakes',
      items: [
        'Red Velvet Cheesecake',
        'New York Cheesecake',
        'Baked Jar Cheesecake'
      ]
    },
    {
      title: 'Chilled Cheesecakes & Mousse Cakes',
      items: [
        'Classic Tiramisu Cake',
        'Orange Spice Nutty Cheesecake',
        'Triple Chocolate Mousse Cake',
        'Mango Chilled Cheesecake',
        'Vanilla Bean Chilled Cheesecake',
        'Mango Charlotte Cake'
      ]
    },
    {
      title: 'Bonus Recipes & Variations',
      items: [
        'Black Forest Mousse Cake',
        'Ferrero Rocher Mousse Cake',
        'Vanilla Raspberry Mousse Cake',
        'Mango Cheesecake',
        'Passion Fruit Cheesecake',
        'Oreo Crumble Cheesecake',
        'Nutella Hazelnut Cheesecake',
        'Strawberry Lemon Charlotte Cake',
        'Lotus Biscoff Charlotte Cake'
      ]
    }
  ],

  topics: [
    'Baked Cheesecake Techniques',
    'Chilled Desserts & Mousse Cakes',
    'Flavor Variations',
    'Professional Dessert Skills'
  ]
  },

  {
    id: 'b22',
    images: ['img/Baking/Brownies/1.webp', 'img/Baking/Brownies/2.webp'],
    title: 'Brownies and Blondies',
    price: '₹699',
    onlinePrice: '₹699',
    offlinePrice: '₹2,500',
    offlineDuration: '2 days',

    desc: 'A workshop to help you master rich eggless brownies and blondies with gourmet flavours, textures and bakery-style techniques.',

  highlights: [
    'Eggless Brownies & Blondies',
    'Lifetime Video Access',
    '13 Main Recipes + Extra Variations',
    'Rich Bakery-Style Techniques',
    'Perfect for Dessert Lovers & Businesses',
    'Covers Gourmet & Fusion Flavours'
  ],

  modules: [
    {
      title: 'Brownies',
      items: [
        'Oreo Cool & Dark Surprise Brownie',
        'Cookies & Fudge Brownie',
        'Mud Brownie',
        'Classic Brownie',
        'Nutella Brownie',
        'Death by Chocolate Brownie',
        'Caramel Walnut Brownie',
        'Biscoff Brownie'
      ]
    },
    {
      title: 'Blondies',
      items: [
        'Blueberry Sesame Blondie',
        'Bubblegum Rocky Road Blondie',
        'Red Velvet Blondie',
        'Rose & Pista Blondie'
      ]
    },
    {
      title: 'Extra Recipes & Variations',
      items: [
        'Peanut Butter Brownie',
        'Tangy Tropical Blast Brownie',
        'Oreo Brownie',
        'Triple Chocolate Brownie',
        'Fruit & Nut Brownie',
        'Cheesecake Brownie',
        'Nutella Cheesecake Brownie'
      ]
    }
  ],

  topics: [
    'Eggless Brownie Techniques',
    'Blondie Variations',
    'Gourmet Dessert Baking',
    'Bakery-Style Desserts'
  ]

  },

  {
    id: 'b23',
    images: ['img/Baking/Millet brownies/1.webp', 'img/Baking/Millet brownies/2.webp'],
    title: 'Millet Brownies',
    price: '₹699',
    onlinePrice: '₹699',
    offlinePrice: '₹3,000',
    offlineDuration: '2 days',

    desc: 'Bake rich millet brownies that are gluten-free, eggless, and made without refined ingredients.',

    highlights: [
    '8 Healthy Brownie Flavours',
    '100% Eggless & Gluten-Free',
    'No Maida, Atta or Refined Sugar',
    'No Preservatives or Gums',
    'Millet-Based Healthy Baking',
    'Online Facebook Private Group Access',
    'Perfect for Healthy Dessert Lovers'
  ],

  modules: [
    {
      title: 'Millet Brownie Flavours',
      items: [
        'Double Chocolate Brownie',
        'Chocolate Walnut Brownie',
        'Mixed Berries Brownie',
        'Granola Brownie',
        'Banana Walnut Brownie',
        'Orange Chocolate Brownie',
        'Roasted Almond Brownie',
        'Festive Fusion Brownie'
      ]
    },
    {
      title: 'Healthy Baking Concepts',
      items: [
        'Gluten-Free Baking Techniques',
        'Millet-Based Baking',
        'Natural Ingredient Selection',
        'Healthy Dessert Alternatives'
      ]
    }
  ],

  topics: [
    'Healthy Brownie Baking',
    'Millet & Gluten-Free Baking',
    'Refined Sugar-Free Desserts',
    'Eggless Healthy Baking'
  ]
  },

  {
    id: 'b24',
    images: ['img/Baking/Jar desserts/1.webp', 'img/Baking/Jar desserts/2.webp', 'img/Baking/Jar desserts/3.webp'],
    title: 'Jar Desserts',
    price: '₹699',
    onlinePrice: '₹699',
    offlinePrice: '₹3,000',
    offlineDuration: '2 days',

    desc: '	Create premium jar desserts including tiramisu, tres leches, and cheesecake jars with multiple flavour variations.',

  highlights: [
    'No Egg, Gelatin or Agar Agar',
    '12 Detailed Video Lessons',
    'Lifetime Video Access',
    'WhatsApp Support for Queries',
    'PDF Recipe Notes Included',
    'Multiple Premium Dessert Variations',
    'Perfect for Home Bakers & Dessert Businesses'
  ],

  modules: [
    {
      title: 'Tiramisu Flavours',
      items: [
        'Lemon Tiramisu',
        'Orange Tiramisu',
        'Classic Tiramisu',
        'Blueberry Tiramisu',
        'Biscoff Tiramisu',
        'Mango Tiramisu',
        'Matcha Tiramisu',
        'Chilli Guava Tiramisu',
        'Strawberry Tiramisu',
        'Pistachio Tiramisu'
      ]
    },
    {
      title: 'Tres Leches Flavours',
      items: [
        'Mango Tres Leches',
        'Rasmalai Tres Leches',
        'Chocolate Tres Leches',
        'Rose Tres Leches'
      ]
    },
    {
      title: 'Cheesecake & Mousse Jars',
      items: [
        'Lemon Cheesecake Jar',
        'Blueberry Cheesecake Jar',
        'White Forest Mousse Jar'
      ]
    }
  ],

  topics: [
    'Jar Dessert Techniques',
    'Tiramisu & Tres Leches',
    'Cheesecake Jars',
    'Premium Dessert Presentation'
  ]
  },

  {
    id: 'b25',
    images: ['img/Baking/fudge/1.webp', 'img/Baking/fudge/2.webp', 'img/Baking/fudge/3.webp', 'img/Baking/fudge/4.webp'],
    title: 'Fudge Workshop',
    price: '₹699',
    onlinePrice: '₹699',
    offlinePrice: '₹3,000',
    offlineDuration: '2 days',

    desc: 'Make rich festive fudges with exotic flavours, smooth textures, and professional finishing techniques.',

  highlights: [
    'Exotic & Festive Fudge Recipes',
    'Lifetime Video Access',
    'Recipe Sheets Included',
    'Instant Mawa Recipe',
    'Instant Condensed Milk Recipe',
    'Perfect for Festive Gifting & Businesses',
    'Multiple Premium Flavour Variations'
  ],

  modules: [
    {
      title: 'Classic & Chocolate Fudges',
      items: [
        'Chocolate Walnut Fudge',
        'Snickers Fudge',
        'Crunchy Fudge',
        'Coffee Caramel Fudge',
        'Caramel Fudge',
        'Buckeye Fudge'
      ]
    },
    {
      title: 'Fruit & Fusion Fudges',
      items: [
        'Mango Masti Fudge',
        'Mix Berries Fudge',
        'Tangy Oreo Fudge',
        'Cotton Candy Fudge',
        'Hazel Dazel Fudge',
        'Neapolitan Fudge'
      ]
    },
    {
      title: 'Premium & Festive Fudges',
      items: [
        'Paan Delight Fudge',
        'Red Velvet Fudge',
        'Heavenly Pistachio Fudge',
        'Nutty Brazilian Fudge',
        'Rose Vanilla Fudge',
        'Irish Pistachio Fudge'
      ]
    },
    {
      title: 'Bonus Learning',
      items: [
        'Instant Mawa Recipe',
        'Instant Condensed Milk Recipe',
        'Extra Fudge Variations'
      ]
    }
  ],

  topics: [
    'Fudge Making Techniques',
    'Festive Dessert Recipes',
    'Flavor Pairing',
    'Homemade Sweet Treats'
  ]
  },

  {
    id: 'b26',
    images: ['img/Baking/korean/1.webp', 'img/Baking/korean/2.webp', 'img/Baking/korean/3.webp'],
    title: 'Korean Cinnamon Rolls',
    price: '₹666',
    onlinePrice: '₹666',
    offlinePrice: '₹2,000',
    offlineDuration: '1 day',

    desc: 'A workshop to help you master soft, flavorful Korean-style dessert rolls with premium fillings and bakery-style techniques.',

  highlights: [
    '15 Eggless Korean Roll Recipes',
    'Pre-recorded Sessions',
    'Lifetime Video Access',
    'WhatsApp Support Included',
    'Bakery-Style Dessert Techniques',
    'Trending Korean-Inspired Flavours',
    'Perfect for Home Bakers & Businesses'
  ],

  modules: [
    {
      title: 'Classic & Cinnamon Rolls',
      items: [
        'Korean Cinnamon Roll',
        'Pecan Cinnamon Roll',
        'Buttery Cinnamon Roll'
      ]
    },
    {
      title: 'Premium Dessert Rolls',
      items: [
        'Tiramisu Roll',
        'Dubai Chocolate Kunafa Roll',
        'Banana Pudding Roll',
        'Custard Roll',
        'Mixed Berry Roll',
        'Blueberry Roll'
      ]
    },
    {
      title: 'Gourmet & Fusion Rolls',
      items: [
        'Hazelnut Roll',
        'Orange Roll',
        'Peanut Butter Roll',
        'Biscoff Roll',
        'Coffee Roll',
        'Mixed Fruit Roll'
      ]
    }
  ],

  topics: [
    'Korean Bakery Techniques',
    'Dessert Rolls & Fillings',
    'Eggless Baking',
    'Trending Fusion Desserts'
  ]
  },

  {
    id: 'b27',
    images: ['img/Baking/Millet cakes/1.webp', 'img/Baking/Millet cakes/2.webp', 'img/Baking/Millet cakes/3.webp'],
    title: 'Millet Tea Time Cakes',
    price: '₹699',
    onlinePrice: '₹699',
    offlinePrice: '₹2,000',
    offlineDuration: '1 days',

    desc: 'Bake wholesome millet-based tea cakes ideal for gifting, festive hampers, and healthier indulgence.',

    highlights: [
    '9 Millet Tea Cake Recipes',
    'Lifetime Video Access',
    'WhatsApp Support Included',
    'PDF Notes Provided',
    'Healthy Millet-Based Baking',
    'Perfect for Diwali Hampers & High Tea',
    'Ideal for Festive Gifting & Special Occasions'
  ],

  modules: [
    {
      title: 'Millet Tea Cakes',
      items: [
        'Festive Mawa Millet Cake',
        'Lemon & Coconut Millet Cake',
        'Pista Mawa Cake',
        'Chocolate Almond Millet Cake',
        'Apple & Cinnamon Millet Cake',
        'Zebra Millet Cake',
        'Date & Walnut Millet Cake',
        'Carrot & Walnut Millet Cake',
        'Banana Chocolate Chip Millet Cake'
      ]
    }
  ],

  topics: [
    'Millet-Based Baking',
    'Healthy Tea Cakes',
    'Festive Baking',
    'Wholesome Dessert Techniques'
  ]
  },
 
  {
    id: 'b28',
    images: ['img/Baking/Trifle/1.webp', 'img/Baking/Trifle/2.webp','img/Baking/Trifle/3.webp', 'img/Baking/Trifle/4.webp'],
    title: 'Trifle Dessert',
    price: '₹699',
    onlinePrice: '₹699',
    offlinePrice: '₹2,000',
    offlineDuration: '1 day',

    desc: 'Learn the art of laminated puff pastry — buttery, flaky layers made from scratch.',

    highlights: [],

    modules: []
  },
  
  {
    id: 'b29',
    images: ['img/Baking/Travel cakes/1.webp', 'img/Baking/Travel cakes/2.webp', 'img/Baking/Travel cakes/3.webp', 'img/Baking/Travel cakes/4.webp'],
    title: 'Travel Cakes',
    price: '₹699',
    onlinePrice: '₹699',
    offlinePrice: '₹3,000',
    offlineDuration: '2 days',

    desc: 'A workshop to help you create rich, flavorful travel cakes that are perfect for gifting, celebrations and premium tea-time treats.',

  highlights: [
    '15 Premium Travel Cake Recipes',
    'Recorded Live Tutorials',
    'Lifetime Video Access',
    'WhatsApp Group Support',
    'Perfect for Festive Gifting & Tea Time',
    'Learn Multiple Flavor Pairings',
    'Create Endless Flavor Variations'
  ],

  modules: [
    {
      title: 'Premium Travel Cakes',
      items: [
        'Date & Hazelnut Cake',
        'Rose Pistachio Cake',
        'Gianduja Express Cake',
        'Banana Salted Caramel Cake',
        'Chocolate Dulce De Leche Cake',
        'Lemon Mint Surprise Cake',
        'Very Berry Cheesecake',
        'Tango Raspberry Cake',
        'Cherry Streusel Cake',
        'Mawa Malai Cake',
        'Snicker English Toffee Cake',
        'Guava Chilli Travel Cake',
        'Mixed Fruit Cake',
        'Motichoor Festive Cake',
        'Candy Floss Cake'
      ]
    }
  ],

  topics: [
    'Travel Cake Techniques',
    'Premium Flavor Pairing',
    'Festive Baking',
    'Tea-Time Cakes'
  ]
  },

  {
    id: 'b30',
    images: ['img/Baking/Mirror glaze/1.webp', 'img/Baking/Mirror glaze/2.webp', 'img/Baking/Mirror glaze/4.webp'],
    title: 'Mirror Glazes and Mousse Cakes',
    price: '₹699',
    onlinePrice: '₹699',
    offlinePrice: '₹3,000',
    offlineDuration: '2 days',

    desc: 'Master elegant mousse cakes, mirror glazes, layered textures, and refined dessert finishing techniques.',

  highlights: [
    'Exclusive Mousse Cake Recipes',
    'Gelatin-Free Mirror Glaze Techniques',
    'Professional Finishing Skills',
    'Modern Dessert Decoration',
    'Premium Flavor Pairings',
    'Advanced Cake Styling Techniques',
    'Perfect for Professional Bakers & Businesses'
  ],

  modules: [
    {
      title: 'Exclusive Mousse Cakes',
      items: [
        'Green Apple Crumble Mousse Cake',
        'Mixed Berries Crumble Mousse Cake',
        'Pineapple Rabdi Mousse Cake',
        'Raspberry Cream Cheese Cake',
        'Peach White Chocolate Cream Cheese Mousse Cake',
        'Orange Chocolate Hazelnut Mousse Cake',
        'Old Fashioned Jam Mousse Cake'
      ]
    },
    {
      title: 'Fillings, Compotes & Components',
      items: [
        'Apple Confit',
        'Berries Compote',
        'Crumble Recipe',
        'Pineapple Rabdi',
        'Orange Chocolate Mousse',
        'Cream Cheese Mousse'
      ]
    },
    {
      title: 'Mirror Glazes',
      items: [
        'White Chocolate Mirror Glaze',
        'Dark Chocolate Mirror Glaze',
        'Flavoured Mirror Glaze',
        'Fresh Fruit Puree Glazes'
      ]
    },
    {
      title: 'Decoration & Finishing Techniques',
      items: [
        'Leopard Print Mirror Glaze',
        'Thread Painting Techniques',
        'Glitter Effects',
        'Metallic Chocolate Collar',
        'Chocolate Borders',
        'Chocolate Toppers'
      ]
    }
  ],

  topics: [
    'Mirror Glaze Techniques',
    'Modern Mousse Cakes',
    'Professional Dessert Styling',
    'Advanced Cake Decoration'
  ]
  },

  {
    id: 'b31',
    images: ['img/Baking/Chandelier cake/1.webp'],
    title: 'Chandelier Cake',
    price: '₹699',
    onlinePrice: '₹699',
    offlinePrice: '₹3,000',
    offlineDuration: '1 day',

    desc: 'Learn whipped cream chandelier cakes with professional assembly, styling, support, and transportation methods.',

  highlights: [
    'Learn 3-Tier Chandelier Cake Techniques',
    'Whipped Cream Structural Skills',
    'Professional Assembly Methods',
    'Cake Transportation Guidance',
    'Advanced Decoration Techniques',
    'Perfect for Wedding & Celebration Cakes',
    'Suitable for Beginners & Professionals'
  ],

  modules: [
    {
      title: 'Chandelier Cake Foundations',
      items: [
        'Understanding Chandelier Cake Structure',
        'Choosing Sizes & Tiers',
        'Balancing & Stability Techniques',
        'Whipped Cream Support Methods'
      ]
    },
    {
      title: 'Decoration & Styling',
      items: [
        'Adding Texture & Dimension',
        'Professional Finishing Techniques',
        'Elegant Chandelier Styling',
        'Visual Presentation Tips'
      ]
    },
    {
      title: 'Assembly & Transportation',
      items: [
        '3-Tier Cake Assembly',
        'Safe Setup Techniques',
        'Cake Transportation Tips',
        'Venue Display Guidance'
      ]
    }
  ],

  topics: [
    'Tier Cake Structuring',
    'Whipped Cream Techniques',
    'Luxury Cake Decoration',
    'Professional Cake Presentation'
  ]
  },

  {
    id: 'b32',
    images: ['img/Baking/puff pastry/1.webp', 'img/Baking/puff pastry/2.webp','img/Baking/puff pastry/3.webp'],
    title: 'Puff Pastry',
    price: '₹699',
    onlinePrice: '₹699',
    offlinePrice: '₹3,000',
    offlineDuration: '2 days',

    desc: 'Make flaky puff pastries and savoury bakes from scratch using butter-based methods without margarine.',

  highlights: [
    'Fresh Puff Pastry from Scratch',
    'No Margarine Used',
    'Sweet & Savory Puff Recipes',
    'Bakery-Style Techniques',
    'Perfect for Tea-Time & Parties',
    'Professional Layering & Baking Skills'
  ],

  modules: [
    {
      title: 'Core Puff Pastry Techniques',
      items: [
        'Puff Pastry Sheet',
        'Pastry Cream',
        'Salted Butter Caramel'
      ]
    },
    {
      title: 'Sweet Puff Pastries & Desserts',
      items: [
        'Palmier Cookies',
        'Toffee Mille Feuille',
        'Cream Roll',
        'Tart Tartine'
      ]
    },
    {
      title: 'Savory Puff Snacks',
      items: [
        'Cheesy Straws',
        'Aloo Patties',
        'Paneer Patties',
        'Vol Au Vents',
        'Spanish Puff Rolls',
        'Cheese Twisters'
      ]
    }
  ],

  topics: [
    'Puff Pastry Techniques',
    'Layered Dough Baking',
    'Sweet & Savory Pastries',
    'Bakery-Style Baking Skills'
  ]
  },

  {
    id: 'b33',
    images: ['img/Baking/Christmas/1.webp', 'img/Baking/Christmas/2.webp', 'img/Baking/Christmas/3.webp'],
    title: 'Christmas Workshop',
    price: '₹777',
    onlinePrice: '₹777',
    offlinePrice: '₹3,000',
    offlineDuration: '2 days',

    desc: 'Create festive Christmas cakes, cookies, and holiday treats suited for celebrations, gifting, and seasonal hampers.',

  highlights: [
    'Eggless Christmas Baking Workshop',
    'Pre-recorded Online Sessions',
    'Lifetime Video Access',
    'Festive Cakes & Cookies',
    'Bonus Christmas Recipes Included',
    'Perfect for Holiday Hampers & Gifting',
    'Traditional & Modern Christmas Bakes'
  ],

  modules: [
    {
      title: 'Christmas Cakes & Muffins',
      items: [
        'Carrot Cake with Glaze',
        'Plum Cake with Rum',
        'Plum Cake without Rum',
        'Chocolate Mud Cake',
        'Glazed Almond Cake',
        'Fruit Cake',
        'Almond Dundee Cake',
        'Gingerbread Muffins'
      ]
    },
    {
      title: 'Bonus PDF Recipes',
      items: [
        'Hot Chocolate Bomb Cookies',
        'Star Anise Cookies',
        'Christmas Grinch Chocolate Bars',
        'Pumpkin Spice Fudge',
        'Marzipan Dough',
        'Plum Cake with Rum',
        'Mud Cake with Rum'
      ]
    },
    {
      title: 'Christmas Cookies & Treats',
      items: [
        'Gingerbread Cookies',
        'Pecan Snowball Cookies'
      ]
    }
  ],

  topics: [
    'Christmas Baking',
    'Festive Cakes & Cookies',
    'Holiday Hampers',
    'Seasonal Dessert Techniques'
  ]
  },

  {
    id: 'b34',
    images: ['img/Baking/Festival cakes/1.webp', 'img/Baking/Festival cakes/2.webp','img/Baking/Festival cakes/3.webp', 'img/Baking/Festival cakes/4.webp', 'img/Baking/Festival cakes/5.webp'],
    title: 'Festival cakes',
    price: '₹699',
    onlinePrice: '₹699',
    offlinePrice: '₹2,000',
    offlineDuration: '1 day',

    desc: 'Learn the art of laminated puff pastry — buttery, flaky layers made from scratch.',

    highlights: [],

    modules: []
  },

  {
    id: 'b35',
    title: 'Iyengar Bakery Style Cake',
    price: '₹666',
    onlinePrice: '₹666',
    offlinePrice: '₹2,000',
    offlineDuration: '1 day',

    desc: 'Recreate iconic Iyengar bakery-style cakes from Bangalore with soft textures, rich flavour, and eggless methods.',

  highlights: [
    'Authentic Iyengar Bakery-Style Recipes',
    '100% Eggless Baking',
    'Traditional Bangalore Bakery Flavours',
    'Multiple Cake Variations Included',
    'Soft & Moist Bakery Sponge Techniques',
    'Perfect for Tea-Time & Festive Baking',
    'Great for Home Bakers & Businesses'
  ],

  modules: [
    {
      title: 'Iyengar Bakery Cakes',
      items: [
        'Chocolate Bakery Sponge',
        'Iyengar Mawa Cake',
        'Iyengar Badam Rawa Cake',
        'Iyengar Butter Vanilla Cake',
        'Iyengar Rose & Honey Cake',
        'Iyengar Chocolate Choco Chip Caramel Cake'
      ]
    },
    {
      title: 'Bonus Variations',
      items: [
        'Ribbon Cake',
        'Tutti Frutti Cake',
        'Fruit Cake',
        'Caramel Cake',
        'Marble Cake',
        'Pista Rawa Cake',
        'Pineapple Jam Cake',
        'Pista Mawa Cake',
        'Kaju Mawa Cake'
      ]
    }
  ],

  topics: [
    'Iyengar Bakery Techniques',
    'Traditional Eggless Baking',
    'Tea-Time Cakes',
    'Bakery-Style Flavor Variations'
  ]
  },
];


const cooking = [
  {
    id: 'c1',
    images: ['img/Cooking/Mughlai 1/2.webp', 'img/Cooking/Mughlai 1/1.webp'],
    title: 'Mughlai Course 1',
    price: '₹699',
    onlinePrice: '₹699',
    offlinePrice: '₹3,500',
    offlineDuration: '3 days',

    desc: 'Master rich restaurant-style Mughlai dishes with easy techniques, balanced spices, and authentic flavours.',

    highlights: [
      'Live Recorded Video Tutorial',
      '1 Month Access to Content',
      'On-call / Online Doubt Support',
      'Detailed Notes Included',
      'Learn Restaurant-Style Mughlai Cooking',
      'Covers Onion & Garlic-Free Gravies',
      'Perfect for Home Cooking & Small Food Business'
    ],

    modules: [
      {
        title: 'Main Course Dishes',
        items: [
          'Nargisi Kofta',
          'Paneer Do Pyaza',
          'Kadhai Paneer',
          'Tangy Aloo',
          'Party Deluxe Kofta',
          'Dal Bukhara',
          'Tawa Vegetables',
          'Pindi Chhole'
        ]
      },
      {
        title: 'Breads & Rice',
        items: [
          'Bhature',
          'Hyderabadi Biryani',
          'Naan',
          'Laccha Paratha',
          'Pudina Paratha (Tips & Techniques)'
        ]
      },
      {
        title: 'Special Techniques & Add-ons',
        items: [
          '16 Types of Vegetables in Tawa Preparations',
          'Stuffed Vegetables Techniques',
          '16-Spice Multipurpose Masala',
          'Onionless & Garlicless Gravies and Curries'
        ]
      }
    ]
  },

  {
    id: 'c2',
    images: ['img/Cooking/Mughlai 2/1.webp', 'img/Cooking/Mughlai 2/2.webp'],
    title: 'Mughlai Course 2',
    price: '₹699',
    onlinePrice: '₹699',
    offlinePrice: '₹3,500',
    offlineDuration: '2 days',

    desc: 'An advanced online workshop to help you recreate rich, restaurant-style Mughlai dishes at home with authentic flavours and techniques.',

    highlights: [
      'Pre-recorded Session with Lifetime Access',
      'On-call / Online Doubt Support',
      'Detailed Notes Included',
      'Advanced Mughlai Recipes & Techniques',
      'Restaurant-Style Cooking at Home',
      'Includes Onion & Garlic-Free Options',
      'Perfect for Home Cooking & Expanding Menu Skills'
    ],

    modules: [
      {
        title: 'Main Course Dishes',
        items: [
          'Methi Malai Matar',
          'Achaari Aloo',
          'Peshawari Gobhi',
          'Paneer Butter Masala',
          'Malai Kofta',
          'Stuffed Paneer Pasanda',
          'Dal Makhani'
        ]
      },
      {
        title: 'Breads & Rice',
        items: [
          'Missi Roti',
          'Kandhari Naan',
          'Stuffed Naan',
          'Rumali Roti',
          'Mushroom Biryani'
        ]
      },
      {
        title: 'Special Items & Techniques',
        items: [
          'Kaathi Kabab',
          'Onionless & Garlicless Gravies and Curries',
          'Restaurant-Style Cooking Techniques',
          'Flavor Balancing & Rich Gravy Preparation'
        ]
      }
    ]
  },

  {
    id: 'c3',
    images: ['img/Cooking/Soups/1.webp', 'img/Cooking/Soups/2.webp', 'img/Cooking/Soups/3.webp'],
    title: 'Soups',
    price: '₹699',
    onlinePrice: '₹699',
    offlinePrice: '₹2,000',
    offlineDuration: '2 days',

    desc: 'A cozy workshop to help you create a variety of healthy, restaurant-style soups perfect for winter comfort and everyday meals.',

    highlights: [
      'Lifetime Access to Recorded Sessions',
      'On-call / Online Doubt Support',
      'Printed Recipe Notes Included',
      'Wide Variety of Veg & Restaurant-Style Soups',
      'Perfect for Winter Cooking & Healthy Meals',
      'Covers Base Stocks & Soup Techniques'
    ],

    modules: [
      {
        title: 'Classic & Cream Soups',
        items: [
          'Cream of Tomato Soup',
          'Cream of Almond Soup',
          'Cream of Mushroom Soup',
          'Spinach Soup'
        ]
      },
      {
        title: 'Indian & Comfort Soups',
        items: [
          'Lemon Coriander Soup',
          'Tomato Sorba',
          'Sweet Corn Soup'
        ]
      },
      {
        title: 'Asian & Restaurant-Style Soups',
        items: [
          'Hot & Sour Soup',
          'Manchow Soup',
          'Talumein Soup',
          'Minestrone Soup'
        ]
      },
      {
        title: 'Stocks & Foundations',
        items: [
          'White Stock',
          'Brown Stock',
          'Soup Base Techniques'
        ]
      }
    ]
  },

  {
    id: 'c4',
    images: ['img/Cooking/Kebab/1.webp', 'img/Cooking/Kebab/2.webp', 'img/Cooking/Kebab/3.webp', 'img/Cooking/Kebab/4.webp'],
    title: 'Veg Kebabs',
    price: '₹699',
    onlinePrice: '₹699',
    offlinePrice: '₹2,000',
    offlineDuration: '2 days',

    desc: 'Make restaurant-style veg kebabs, wraps, and dips with flavourful marinades and professional shaping techniques.',

    highlights: [
      'Lifetime Access to Recorded Sessions',
      'Detailed Professional Recipes',
      'WhatsApp Support for Queries',
      'Unedited Full-Length Class',
      'Easy-to-Follow Techniques',
      'Includes Wraps & Dips'
    ],

    modules: [
      {
        title: 'Veg Kebabs & Dips',
        items: [
          'Jim Jam Kebab',
          'Hara Bhara Kebab',
          'Dahi Kebab',
          'Soya Mince Kebab',
          'Corn Cheese Kebab',
          'Veg Seekh Kebab',
          'Veg Shaami Kebab',
          'Gulnaar Kebab',
          'Mint Dip',
          'Tandoori Red Dip',
          'Cheese Dip'
        ]
      },
      {
        title: 'Wraps & Breads',
        items: [
          'Homemade Tortillas',
          'Hara Bhara Kabab Wrap',
          'Tandoori Veg Kabab Wrap'
        ]
      }
    ]
  },

  {
    id: 'c5',
    images: ['img/Cooking/Italian/1.webp', 'img/Cooking/Italian/2.webp', 'img/Cooking/Italian/3.webp', 'img/Cooking/Italian/4.webp'],
    title: 'Italian Cuisine',
    price: '₹699',
    onlinePrice: '₹699',
    offlinePrice: '₹3,000',
    offlineDuration: '2 days',

    desc: 'Master fresh pasta, pizzas, classic sauces, baked favourites, and essential Italian cooking techniques.',

    highlights: [
      'Lifetime Access to Recorded Sessions',
      'Written Recipe Notes Included',
      'On Call / WhatsApp Support for Queries',
      'Covers Pasta, Pizza, Sauces & More',
      'Authentic Italian Flavours at Home',
      'Perfect for Home Cooking & Hosting'
    ],

    modules: [
      {
        title: 'Pasta & Italian Classics',
        items: [
          'Fresh Pasta Dough',
          'Basil Pesto Pasta',
          'Fettuccine Florentine',
          'Spaghetti Napolitana',
          'Spicy Farfalle',
          'Saucy Cannelloni',
          'Nutty Lasagna',
          'Tomato & Cheese Penne'
        ]
      },
      {
        title: 'Pizza, Soups & Salads',
        items: [
          'Pizza Dough',
          'Margherita Pizza',
          'Extravaganza Pizza',
          'Pomodoro sauce',
          'Tomato & Basil Soup',
          'Italian Macaroni Salad'
        ]
      }
    ]
  },

  {
    id: 'c6',
    images: ['img/Cooking/Pizza/1.webp', 'img/Cooking/Pizza/2.webp', 'img/Cooking/Pizza/3.webp', 'img/Cooking/Pizza/4.webp'],
    title: 'Pizza Workshop',
    price: '₹699',
    onlinePrice: '₹699',
    offlinePrice: '₹1,500',
    offlineDuration: '1 day',

    desc: 'A workshop to help you master bakery-style pizzas at home—from dough making to sauces and multiple delicious variations.',

    highlights: [
      'Lifetime Access to Recorded Session',
      'WhatsApp Support for Doubts',
      'Downloadable PDF Notes',
      'Learn Pizza Dough from Scratch',
      'Multiple Pizza Variations Included',
      'Covers Sauces & Baking Techniques'
    ],

    modules: [
      {
        title: 'Pizza Basics & Dough',
        items: [
          'Perfect Pizza Dough',
          'Baking Techniques',
          'Base Preparation'
        ]
      },
      {
        title: 'Pizza Variations',
        items: [
          'Thin Crust Pizza',
          'Cheese Burst Pizza',
          'Onion Pizza',
          'Sweet Corn Pizza',
          'Extra Veg Pizza',
          'Pesto Pizza'
        ]
      },
      {
        title: 'Sauces & Add-ons',
        items: [
          'Pomodoro Sauce',
          'Pesto Sauce'
        ]
      }
    ]
  },

  {
    id: 'c7',
    images: ['img/Cooking/Sandwiches/1.webp', 'img/Cooking/Sandwiches/2.webp', 'img/Cooking/Sandwiches/3.webp'],
    title: 'Sandwiches',
    price: '₹699',
    onlinePrice: '₹699',
    offlinePrice: '₹2,000',
    offlineDuration: '2 days',

    desc: 'Create a wide variety of sandwiches with homemade dressings, flavourful fillings, and small-business friendly combinations.',

    highlights: [
      'Lifetime Video Access',
      'Live Recorded Session (Facebook)',
      'Chef Support for Queries',
      'Master Recipes Included',
      'PDF Notes Provided',
      'Covers Sandwiches, Dressings & Sides'
    ],

    modules: [
      {
        title: 'Sandwich Varieties',
        items: [
          'Curd Sandwich',
          'Corn Cheese Sandwich',
          'CTC Sandwich',
          'Kids Clown Sandwich',
          'Veg Grilled Sandwich',
          'Mexican Sandwich',
          'Macaroni Subway Style Sandwich',
          'Barbecue Sandwich',
          'Club Sandwich',
          'Paneer Tikka Sandwich'
        ]
      },
      {
        title: 'Special Add-ons',
        items: [
          'Hot Dog Rolls',
          'Coleslaw Salad',
          'Pickled Salad',
          'Cocktail Dip'
        ]
      }
    ]
  },

  {
    id: 'c8',
    images: ['img/Cooking/gravy premixes/1.webp', 'img/Cooking/gravy premixes/2.webp', 'img/Cooking/gravy premixes/3.webp'],
    title: 'Gravy Premixes',
    price: '₹699',
    onlinePrice: '₹699',
    offlinePrice: '₹2,500',
    offlineDuration: '2 days',

    desc: 'A workshop to help you create instant, preservative-free gravy premixes that let you cook restaurant-style dishes in minutes.',

    highlights: [
      'Pre-recorded Sessions with Lifetime Access',
      'Learn Instant Gravy Premix Techniques',
      'No Preservatives or Artificial Additives',
      '6 Months Shelf-Life Recipes',
      'Perfect for Students & Working Professionals',
      'Cook Multiple Dishes from One Premix',
      'Application of 6 premixes'
    ],

    modules: [
      {
        title: 'Gravy Premixes',
        items: [
          'White Gravy Premix',
          'Green Gravy Premix',
          'Red Gravy Premix',
          'Golden Gravy Premix',
          'Jain Gravy Premix',
          'Mughlai Gravy Premix',
          'Pindi Chana Masala Premix',
          'Biryani Premix',
          'Dal Makhani Premix',
          'Naan Premix'
        ]
      },
      {
        title: 'Dishes You Can Prepare',
        items: [
          'Paneer Tikka Masala',
          'Mutter Paneer',
          'Paneer Butter Masala',
          'Veg Kolhapuri',
          'Pindi Chole',
          'Dal Makhani',
          'Mix Veg',
          'Malai Kofta',
          'Shahi Paneer',
          'Palak Paneer',
          'Sarson Ka Saag',
          'Dum Aloo',
          'Veg Korma',
          'Garlic Naan',
          'Stuffed Naan'
        ]
      }
    ]
  },

  {
    id: 'c9',
    images: ['img/Cooking/Chaap/1.webp', 'img/Cooking/Chaap/2.webp', 'img/Cooking/Chaap/3.webp'],
    title: 'Soya Chaap Special Workshop',
    price: '₹699',
    onlinePrice: '₹699',
    offlinePrice: '₹2,500',
    offlineDuration: '2 days',
    dur: '5 sessions',

    desc: 'A workshop to help you master a variety of flavorful soya chaap dishes, from street-style snacks to rich restaurant-style preparations.',

    highlights: [
      'Lifetime Video Access',
      'WhatsApp Group Support',
      'Uncut Full-Length Tutorials',
      'Detailed PDF Notes Included',
      'Covers Tikkas, Gravies, Rolls & Breads',
      'Perfect for Home Cooks & Small Food Businesses'
    ],

    modules: [
      {
        title: 'Soya Chaap Dishes',
        items: [
          'KFC Style Soya Chaap',
          'Masala Chaap Gravy',
          'Hariyali Chaap Roll',
          'Afghani Chaap Tikka',
          'Malai Chaap',
          'Tawa Chaap Masala',
          'Stuffed Achari Soya Chaap Tikka',
          'Boti Chaap'
        ]
      },
      {
        title: 'Sides & Accompaniments',
        items: [
          'Onion Relish',
          'Rumali Roti',
          'Dahi Chutney'
        ]
      }
    ]
  },

  {
    id: 'c10',
    images: ['img/Cooking/Donuts/1.webp', 'img/Cooking/Donuts/1.webp', 'img/Cooking/Donuts/1.webp'],
    title: 'Donuts',
    price: '₹699',
    onlinePrice: '₹699',
    offlinePrice: '₹2,000',
    offlineDuration: '1 day',
    dur: '5 sessions',

    desc: 'A comprehensive workshop covering classic yeast-risen and cake donuts with a variety of glazes and toppings.',

  highlights: [
    '24+ Donut Variations',
    'Soft & Fluffy Dough Techniques',
    'Classic & Gourmet Glazes',
    'Creative Fillings & Toppings',
    'Bakery-Style Finishing Skills',
    'Perfect for Home Bakers & Businesses',
    'Learn Endless Flavor Variations'
  ],

  modules: [
    {
      title: 'Classic & Glazed Donuts',
      items: [
        'Cake Donuts',
        'Classic Glazed Donut',
        'Glazed Cinnamon Donut',
        'Sugar Cinnamon Donut',
        'Sugar Glaze Donut',
        'Pista Sugar Glaze Donut'
      ]
    },
    {
      title: 'Chocolate & Truffle Donuts',
      items: [
        'Death by Chocolate Donut',
        'Mocha Truffle Donut',
        'Milk Chocolate Donut',
        'Chocolate Cherry Bomb',
        'Chocolate Iced Custard Donut',
        'Dark Fantasy Donut',
        'Double Trouble Donut'
      ]
    },
    {
      title: 'Premium & Fusion Flavours',
      items: [
        'Cookie Cream Donut',
        'Crunchy Rainbow Donut',
        'Cool Blue Ice Donut',
        'Red Velvet Donut',
        'Salted Caramel Dream Donut',
        'Strawberry Donut',
        'Fusion Donut',
        'Cotton Candy Donut',
        'Coconut Ganache Donut',
        'Rainbow Surprise Donut',
        'LimeLight Donut'
      ]
    }
  ],

  topics: [
    'Donut Dough Techniques',
    'Glazing & Decoration',
    'Bakery-Style Donuts',
    'Creative Flavor Pairing'
  ]
  },

  {
    id: 'c11',
    images: ['img/Cooking/Kulfi/1.webp', 'img/Cooking/Kulfi/2.webp', 'img/Cooking/Kulfi/3.webp'],
    title: 'Kulfi Falooda & Yogurt Ice Creams',
    price: '₹4,500',
    onlinePrice: '₹699',
    offlinePrice: '₹2,000',
    offlineDuration: '1 day',
    dur: '5 sessions',

    desc: 'Create kulfis, falooda, and yogurt-based ice creams with dairy and non-dairy methods.',

    highlights: [
      'Lifetime Video Tutorial Access',
      'Printed Recipe Notes Included',
      'WhatsApp Support for Queries',
      'Covers Dairy & Non-Dairy Ice Creams',
      'Learn Multiple Bases & Flavour Variations',
      'Perfect for Summer Treats & Home Businesses'
    ],

    modules: [
      {
        title: 'Kulfi Mastery',
        items: [
          '4 Types of Kulfi Bases',
          'Traditional Kulfi',
          'Butterscotch Kulfi',
          'Kulfi Premix',
          'Mother Dairy Style Smooth Kulfi',
          'Kulfi Premix Making & Storage',
          'Kesar Elaichi Kulfi',
          'Rose Kulfi',
          'Mango Kulfi',
          'Rabdi Kulfi',
          'Pista Kulfi',
          'Chocolate Kulfi',
          'Butterscotch Choco Bar Kulfi'
        ]
      },
      {
        title: 'Falooda & Syrups',
        items: [
          'Homemade Falooda',
          'Golden Syrup',
          'Rose Syrup'
        ]
      },
      {
        title: 'Yogurt Ice Creams',
        items: [
          'Yogurt Ice Cream Base (with Dairy Cream)',
          '2 Types of Yogurt Bases',
          'Flavour Variations & Customization Techniques'
        ]
      }
    ]
  },

  {
    id: 'c12',
    images: ['img/Cooking/Ice creams/1.webp', 'img/Cooking/Ice creams/2.webp', 'img/Cooking/Ice creams/3.webp'],
    title: 'Natural Exotic Ice Creams',
    price: '₹699',
    onlinePrice: '₹699',
    offlinePrice: '₹2,500',
    offlineDuration: '2 days',
    dur: '5 sessions',

    desc: 'A workshop to help you create 100% natural, preservative-free ice creams with dairy and non-dairy methods and a wide range of exotic flavours.',

    highlights: [
      'Lifetime Video Tutorial Access',
      'Pre-recorded Sessions',
      'WhatsApp Support for Queries',
      '3 Types of Ice Cream Bases (Dairy & Non-Dairy)',
      '100% Natural Recipes (No Preservatives or Chemicals)',
      '18 Exotic Flavours + 25+ Variations',
      'Includes Ice Cream Assembly & Sauces'
    ],

    modules: [
      {
        title: 'Ice Cream Bases & Flavours',
        items: [
          'Rose & Pista Ice Cream',
          'Giani\'s Special Ice Cream',
          'Exotic Paan Ice Cream',
          'Triple Chocolate Ice Cream',
          'Exotic Fruit Ice Cream',
          'Fig Ice Cream',
          'Rocky Road Ice Cream',
          'Kesar Pista Ice Cream',
          'Coffee Mocha Swirl',
          'Crunchy Oreo Ice Cream',
          'Red Velvet & Cookie Ice Cream',
          'Tender Coconut Ice Cream',
          'Orange Tutti Frutti Ice Cream',
          'Bubblegum Ice Cream',
          'Gulkand Ice Cream',
          'Butterscotch Ice Cream',
          'Strawberry, Mango, Pineapple & Mixed Berry Ice Creams'
        ]
      },
      {
        title: 'Ice Cream Assembly',
        items: [
          'Cassata',
          'Magic Balls',
          'Ripples',
          'Dreamy Sundae',
          'Chocolate Magic'
        ]
      },
      {
        title: 'Ice Cream Sauces',
        items: [
          'Tangy Pineapple Sauce',
          'Mango Mania Sauce',
          'Black Currant Sauce',
          'Chunky Strawberry Sauce',
          'Kiwi Sauce',
          'Chocolate Fudge Sauce',
          'Orange Sauce'
        ]
      }
    ]
  },

  {
    id: 'c13',
    images: ['img/Cooking/Lassi/1.webp', 'img/Cooking/Lassi/2.webp', 'img/Cooking/Lassi/3.webp'],
    title: 'Thick Market Style Lassi Workshop',
    price: '₹699',
    onlinePrice: '₹699',
    offlinePrice: '₹2,500',
    offlineDuration: '2 days',
    dur: '5 sessions',

    desc: 'This workshop will help you create thick, creamy, market-style lassi at home with a wide variety of refreshing flavours.',

    highlights: [
      'Lifetime Video Access',
      'Pre-recorded Online Workshop',
      'Learn Thick Market-Style Texture',
      '25+ Flavour Variations',
      'Ready in Just 5 Minutes',
      'Perfect for Summers & Fasting Recipes',
      'Ideal for Home Business Ideas'
    ],

    modules: [
      {
        title: 'Lassi Flavours',
        items: [
          'Punjabi Lassi',
          'Green Apple Lassi',
          'Shahi Rabri Lassi',
          'Black Currant Lassi',
          'Kesar Pista Lassi',
          'Chocolate Lassi',
          'Mango Lassi',
          'Fruit Punch Lassi',
          'Strawberry Lassi',
          'Jim Jam Lassi',
          'Custard Lassi',
          'Rose Lassi',
          'Banana Lassi',
          'Paan Lassi',
          'Thandai Lassi',
          'Rabri Lassi',
          'Shahi Lassi',
          'Maharaja Lassi',
          'Orange Lassi',
          'Bournvita Lassi',
          'Pineapple Lassi',
          'Nutella Lassi',
          'Masala Classic Lassi',
          'Mojito Lassi',
          'Pina Colada Lassi',
          'Blue Classic Lassi',
          'Shahi Afza Lassi'
        ]
      }
    ]
  },

  {
    id: 'c14',
    images: ['img/Cooking/Thick shakes/1.webp', 'img/Cooking/Thick shakes/2.webp', 'img/Cooking/Thick shakes/3.webp', 'img/Cooking/Thick shakes/4.webp'],
    title: 'Freaky Shakes Workshop',
    price: '₹699',
    onlinePrice: '₹699',
    offlinePrice: '₹3,000',
    offlineDuration: '2 days',
    dur: '5 sessions',

    desc: 'A comprehensive workshop on thick, Instagram-worthy freaky shakes with glass decoration techniques.',

    highlights: [
      'Lifetime Video Access',
      'Pre-recorded Sessions',
      'WhatsApp Support for Queries',
      'Includes Glass Decoration Techniques',
      '20+ Thick Shake Recipes',
      'Uncut Full-Length Tutorials',
      'PDF Notes',
      'Perfect for Starting a Home Business'
    ],

    modules: [
      {
        title: 'Thick Shake Flavours',
        items: [
          'Cad B Shake',
          'Hazelnut Chocolate Shake',
          'Oreo Shake',
          'Rose Almond Chocolate Shake',
          'Brownie Chocolate Shake',
          'Mango Melody Shake',
          'Strawberry Shake',
          'Ferrero Rocher Shake',
          'Cookies Twist Shake',
          'Cold Coffee Shake',
          'Pina Colada Shake',
          'Tender Coconut Shake',
          'Pista Elaichi Shake',
          'Pineapple Shake',
          'Rosy Shake',
          'Orange Sunrise Shake',
          'KitKat Shake',
          'Anjeer Badam Shake',
          'Mixed Fruit Punch Shake',
          'Jim Jam Shake'
        ]
      }
    ]
  },

  {
    id: 'c15',
    images: ['img/Cooking/Mocktails/1.webp', 'img/Cooking/Mocktails/2.webp', 'img/Cooking/Mocktails/3.webp', 'img/Cooking/Mocktails/4.webp'],
    title: 'Mocktails and Coolers',
    price: '₹699',
    onlinePrice: '₹699',
    offlinePrice: '₹1,500',
    offlineDuration: '1 day',
    dur: '5 sessions',

    desc: 'Make refreshing mocktails and coolers with signature syrups, layered flavours, and creative presentation.',

    highlights: [
      'Lifetime Video Access',
      'Pre-recorded Workshop',
      'Learn 5 Signature Syrups',
      'Wide Variety of Mocktails & Coolers',
      'Perfect for Summers & Parties',
      'Ideal for Home Business & Café Menus'
    ],

    modules: [
      {
        title: 'Classic & Exotic Mocktails',
        items: [
          'Pina Colada',
          'Mojito',
          'Shahi Sharbat',
          'Guava Chilli',
          'Mango Passion',
          'Rock Filler Special',
          'Sunrise Blossom',
          'Coffee Cream',
          'Five Star Punch',
          'Lemon Mint',
          'Cocoa Cream with Crushed Ice',
          'Green Avenue',
          'Orange Green Tea',
          'Mango Passion Fizz'
        ]
      },
      {
        title: 'Signature Syrups & Bases',
        items: [
          '5 Signature Syrups',
          'Flavour Balancing Techniques',
          'Mocktail Base Preparation'
        ]
      }
    ]
  },

  {
    id: 'c16',
    images: ['img/Cooking/Hampers/1.webp', 'img/Cooking/Hampers/2.webp', 'img/Cooking/Hampers/3.webp', 'img/Cooking/Hampers/4.webp'],
    title: 'Hamper Making Workshop',
    price: '₹699',
    onlinePrice: '₹699',
    offlinePrice: '₹2,500',
    offlineDuration: '2 days',
    dur: '5 sessions',

    desc: 'A workshop to help you create beautifully curated festive hampers with a mix of sweet and savoury treats—perfect for gifting or selling.',

    highlights: [
      'Live Recorded Sessions with 1-Month Access',
      'Written Notes Included',
      'Support for Queries & Doubts',
      'Learn Festive Hamper Creation',
      'Includes Sweet & Savoury Items',
      'Bonus: Packaging & Selling Tips'
    ],

    modules: [
      {
        title: 'Hamper Treats',
        items: [
          'Barbeque Punch Roasted Nuts Jar',
          '2-Flavour Cakesicles (Festive Theme)',
          'Dark Fantasy Treat',
          'Cheese Delight',
          'Berry Delight Mousse Jar Cake',
          'Salted Caramel Jar',
          'Chocolate Fudge (Rakhi Theme)',
          'Rakhi Chocolate Bar',
          'Chilli Cheese Crackers'
        ]
      },
      {
        title: 'Bonus & Business Tips',
        items: [
          'Hamper Packaging Techniques',
          'Gifting Presentation Ideas',
          'Selling & Pricing Tips'
        ]
      }
    ]
  },

  {
    id: 'c17',
    images: ['img/Cooking/Fillings and sauces/1.webp', 'img/Cooking/Fillings and sauces/2.webp', 'img/Cooking/Fillings and sauces/3.webp'],
    title: 'Fillings and Sauces',
    price: '₹699',
    onlinePrice: '₹699',
    offlinePrice: '₹2,500',
    offlineDuration: '2 days',
    dur: '5 sessions',

    desc: 'Master cake fillings, sauces, and dessert components that add flavour, texture, and professional polish.',

    highlights: [
      'Lifetime Video Access',
      'WhatsApp Support for Queries',
      'Learn Professional Fillings & Sauces',
      'Perfect for Cakes, Desserts & Baking Business',
      'Eggless & Easy-to-Follow Recipes',
      'High Value Add-on Skills for Bakers'
    ],

    modules: [
      {
        title: 'Creams, Curds & Ganache',
        items: [
          'Eggless Lemon Curd',
          'Eggless Vanilla Crème Pâtissière',
          'Eggless Chocolate Crème Pâtissière',
          'Milk Chocolate Whipped Ganache'
        ]
      },
      {
        title: 'Caramel, Praline & Specialty Sauces',
        items: [
          'Dulce de Leche',
          'Hazelnut Praline Paste',
          'Classic Salted Caramel Sauce',
          'Chocolate Caramel Sauce',
          'Strawberry Caramel Sauce',
          'Apple Cinnamon Caramel Sauce',
          'Pista Caramel Praline',
          'Hazelnut Chocolate Enrobage'
        ]
      },
      {
        title: 'Fruit Fillings & Compotes',
        items: [
          'Mixed Berry Compote',
          'Pineapple Filling',
          'Coffee Chocolate Filling',
          'Blueberry Filling',
          'Strawberry Filling'
        ]
      }
    ]
  },

  {
    id: 'c18',
    images: ['img/Cooking/Chocolate/1.webp', 'img/Cooking/Chocolate/2.webp', 'img/Cooking/Chocolate/3.webp'],
    title: 'Professional Chocolate Making and Tempering Workshop',
    price: '₹699',
    onlinePrice: '₹699',
    offlinePrice: '₹3,000',
    offlineDuration: '2 days',
    dur: '5 sessions',

    desc: 'A course to help you master handcrafted chocolates using professional techniques, including tempering couverture chocolate and creating a wide range of premium treats.',

    highlights: [
      'Lifetime Access to Recorded Tutorials',
      'WhatsApp Group Support',
      'Learn 35+ Chocolate Varieties',
      'Covers Couverture Chocolate Tempering',
      'No Compounds – Use of Pure Chocolate',
      'Includes Packaging & Selling Tips',
      'Perfect for Festive Hampers & Business'
    ],

    modules: [
      {
        title: 'Chocolate Basics & Techniques',
        items: [
          'Introduction to Couverture Chocolate',
          'Tempering Techniques',
          'Chocolate Handling & Storage',
          'Professional Finishing Techniques'
        ]
      },
      {
        title: 'Assorted & Flavoured Chocolates',
        items: [
          'Almond, Orange, Blueberry, Paan, Vanilla, Butterscotch Chocolates',
          'Custom Flavour Variations'
        ]
      },
      {
        title: 'Classic & Premium Chocolates',
        items: [
          'Chocopie',
          '5 Star Caramel Chocolate',
          'Ferrero Rocher',
          'Rum & Raisin Chocolate',
          'Bounty Chocolate',
          'Printed Chocolates',
          'Metallic Chocolate Bars',
          'Chocolate Pops & Candy',
          'Coloured Chocolates',
          'Milk, Dark & White Chocolate Basics'
        ]
      },
      {
        title: 'Special Chocolate Categories',
        items: [
          'Nutties (Almond, Walnut, Peanut, Crackle)',
          'Chocolate Rocks (Fruit & Nut, Crisp, Peanut, Butterscotch)',
          'Center-Filled Chocolates (Mint, Coconut, Marzipan, Fudge, Coffee)',
          'Chocolate Bars (Shahi Kesar, Rose, Red Velvet, Pista, Paan)',
          'Clusters (Almond, Blueberry, Rose Pista, Cashew Raisin)'
        ]
      },
      {
        title: 'Bonus & Business',
        items: [
          'Packaging & Gifting Ideas',
          'Selling & Pricing Tips',
          'Festive Hamper Concepts'
        ]
      }
    ]
  }
];

const allCourses = [...baking, ...cooking];

function imagePlaceholderMarkup() {
  return `
    <div class="thumb-placeholder-inner" aria-hidden="true">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
      </svg>
      <span>Image coming soon</span>
    </div>`;
}


/* ══════════════════════════════════
   BUILD CARD THUMBNAIL (with carousel or placeholder)
══════════════════════════════════ */
function buildThumb(c) {
  if (c.images && c.images.length > 0) {
    const imgs = c.images.map((src, i) =>
      `<img src="${src}" class="carousel-img${i === 0 ? ' active' : ''}" loading="eager" decoding="async" onload="this.classList.add('loaded')" />`
    ).join('');
    const dots = c.images.map((_, i) =>
      `<span class="carousel-dot${i === 0 ? ' active' : ''}" data-index="${i}"></span>`
    ).join('');
    return `
      <div class="card-carousel" data-id="${c.id}">
        ${imagePlaceholderMarkup()}
        ${imgs}
        ${c.images.length > 1 ? `
          <button class="carousel-btn carousel-prev" onclick="carouselMove(event,'${c.id}',-1)">&#8249;</button>
          <button class="carousel-btn carousel-next" onclick="carouselMove(event,'${c.id}',1)">&#8250;</button>
          <div class="carousel-dots">${dots}</div>
        ` : ''}
      </div>`;
  } else {
    return `
      <div class="card-thumb card-thumb--placeholder" style="background:${COURSE_PLACEHOLDER_BG}">
        ${imagePlaceholderMarkup()}
      </div>`;
  }
}

/* ══════════════════════════════════
   CARD CAROUSEL LOGIC
══════════════════════════════════ */
const carouselState = {};

function carouselMove(event, id, dir) {
  event.stopPropagation();
  const course = allCourses.find(c => c.id === id);
  if (!course || !course.images) return;
  const total = course.images.length;
  const container = document.querySelector(`.card-carousel[data-id="${id}"]`);
  if (!container) return;

  let current = carouselState[id] || 0;
  current = (current + dir + total) % total;
  carouselState[id] = current;

  container.querySelectorAll('.carousel-img').forEach((img, i) => img.classList.toggle('active', i === current));
  container.querySelectorAll('.carousel-dot').forEach((dot, i) => dot.classList.toggle('active', i === current));
}


/* ══════════════════════════════════
   BUILD A CARD
══════════════════════════════════ */
function getOnlinePrice(c) {
  return c.onlinePrice || c.price;
}

function getOfflinePrice(c) {
  return c.offlinePrice || '-';
}

function getOfflineDuration(c) {
  return c.offlineDuration || '- days';
}

function buildCard(c, delay = 0) {
  const onlinePrice = getOnlinePrice(c);
  const offlinePrice = getOfflinePrice(c);
  const offlineDuration = getOfflineDuration(c);

  return `
    <div class="course-card" onclick="openDetail('${c.id}')" style="animation-delay:${delay}ms"
         data-title="${c.title.toLowerCase()}"
         data-desc="${c.desc.toLowerCase()}"
         data-level="${c.level}">
      ${buildThumb(c)}
      <div class="card-body">
        <div class="card-title">${c.title}</div>
        <div class="card-desc">${c.desc}</div>
        <div class="card-footer-row">
          <div class="card-price-grid">
            <div class="card-price-col">
              <div class="card-price-label">Online</div>
              <div class="card-price">${onlinePrice}</div>
            </div>
            <div class="card-price-col">
              <div class="card-price-label">Offline</div>
              <div class="card-price">${offlinePrice}</div>
              <div class="card-price-sub">${offlineDuration}</div>
            </div>
          </div>
          <div class="card-arrow">→</div>
        </div>
      </div>
    </div>`;
}


/* ══════════════════════════════════
   BUILD DETAIL HERO CAROUSEL
══════════════════════════════════ */
function buildDetailHero(c) {
  const hero = document.getElementById('detHero');
  if (!hero) return;

  if (c.images && c.images.length > 0) {
    const imgs = c.images.map((src, i) =>
      `<img src="${src}" alt="${c.title}" class="det-carousel-img${i === 0 ? ' active' : ''}" data-index="${i}" onload="this.classList.add('loaded')" />`
    ).join('');
    const dots = c.images.map((_, i) =>
      `<span class="det-carousel-dot${i === 0 ? ' active' : ''}" data-index="${i}"></span>`
    ).join('');
    hero.innerHTML = `
      <div class="det-carousel" id="detCarousel">
        ${imagePlaceholderMarkup()}
        ${imgs}
        ${c.images.length > 1 ? `
          <button class="det-carousel-btn det-carousel-prev" onclick="detCarouselMove(-1)">&#8249;</button>
          <button class="det-carousel-btn det-carousel-next" onclick="detCarouselMove(1)">&#8250;</button>
          <div class="det-carousel-dots">${dots}</div>
        ` : ''}
      </div>`;
    window._detCarouselCurrent = 0;
    window._detCarouselTotal = c.images.length;
  } else {
    hero.style.background = COURSE_PLACEHOLDER_BG;
    hero.innerHTML = `<div class="det-hero-placeholder">${imagePlaceholderMarkup()}</div>`;
  }
}

function detCarouselMove(dir) {
  const total = window._detCarouselTotal || 1;
  let current = window._detCarouselCurrent || 0;
  current = (current + dir + total) % total;
  window._detCarouselCurrent = current;

  document.querySelectorAll('.det-carousel-img').forEach((img, i) => img.classList.toggle('active', i === current));
  document.querySelectorAll('.det-carousel-dot').forEach((dot, i) => dot.classList.toggle('active', i === current));
}


const cakeTileIndexes = {
  birthday: 0,
  wedding: 0,
  cupcake: 0
};

function moveCakeTile(id, direction) {
  const track = document.getElementById(
    `cake${id.charAt(0).toUpperCase() + id.slice(1)}Track`
  );

  const dotsWrap = document.getElementById(
    `cake${id.charAt(0).toUpperCase() + id.slice(1)}Dots`
  );

  if (!track || !dotsWrap) return;

  const slides = track.querySelectorAll(".cake-tile-slide");
  const dots = dotsWrap.querySelectorAll(".cake-carousel-dot");

  const total = slides.length;

  cakeTileIndexes[id] =
    (cakeTileIndexes[id] + direction + total) % total;

  track.style.transform =
    `translateX(-${cakeTileIndexes[id] * 100}%)`;

  dots.forEach((dot, i) => {
    dot.classList.toggle(
      "active",
      i === cakeTileIndexes[id]
    );
  });
}

document.querySelectorAll(".cake-tile-carousel").forEach(carousel => {
  let startX = 0;
  let endX = 0;

  carousel.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  }, { passive: true });

  carousel.addEventListener("touchmove", e => {
    endX = e.touches[0].clientX;
  }, { passive: true });

  carousel.addEventListener("touchend", () => {
    const diff = startX - endX;

    const tile = carousel.closest(".cake-tile");
    const cakeId = tile.dataset.cakeId;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        moveCakeTile(cakeId, 1);
      } else {
        moveCakeTile(cakeId, -1);
      }
    }
  });
});


/* ══════════════════════════════════
   PAGE DETECTION & RENDERING
══════════════════════════════════ */
const page = window.location.pathname.split('/').pop() || 'index.html';

if (document.getElementById('featuredBakingGrid')) {
  const fb = featuredBakingIds.map(id => baking.find(c => c.id === id)).filter(Boolean);
  const fc = featuredCookingIds.map(id => cooking.find(c => c.id === id)).filter(Boolean);
  document.getElementById('featuredBakingGrid').innerHTML  = fb.map((c, i) => buildCard(c, i * 80)).join('');
  document.getElementById('featuredCookingGrid').innerHTML = fc.map((c, i) => buildCard(c, i * 80)).join('');
}

if (document.getElementById('bakingGrid') && page === 'baking.html') {
  initFilterPage(baking, 'bakingGrid');
}

if (document.getElementById('cookingGrid') && page === 'cooking.html') {
  initFilterPage(cooking, 'cookingGrid');
}


/* ══════════════════════════════════
   SEARCH + FILTER LOGIC
══════════════════════════════════ */
function initFilterPage(courses, gridId) {
  const grid       = document.getElementById(gridId);
  const noResults  = document.getElementById('noResults');
  const countEl    = document.getElementById('filterCount');
  const searchEl   = document.getElementById('searchInput');
  const clearBtn   = document.getElementById('searchClear');
  const chips      = document.querySelectorAll('.chip');

  let activeLevel = 'all';
  let searchQuery = '';

  renderFiltered();

  searchEl.addEventListener('input', () => {
    searchQuery = searchEl.value.trim().toLowerCase();
    clearBtn.classList.toggle('visible', searchQuery.length > 0);
    renderFiltered();
  });

  clearBtn.addEventListener('click', () => {
    searchEl.value = '';
    searchQuery = '';
    clearBtn.classList.remove('visible');
    renderFiltered();
  });

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('chip--active'));
      chip.classList.add('chip--active');
      activeLevel = chip.dataset.level;
      renderFiltered();
    });
  });

  function renderFiltered() {
    const filtered = courses.filter(c => {
      const matchLevel = activeLevel === 'all' || c.level === activeLevel || c.level.toLowerCase().includes(activeLevel.toLowerCase());
      const moduleItems = (c.modules || []).flatMap(mod => [mod.title, ...(mod.items || [])]);
      const matchSearch = !searchQuery ||
        c.title.toLowerCase().includes(searchQuery) ||
        c.desc.toLowerCase().includes(searchQuery) ||
        moduleItems.some(item => item.toLowerCase().includes(searchQuery)) ||
        (c.highlights || []).some(h => h.toLowerCase().includes(searchQuery));
      return matchLevel && matchSearch;
    });

    grid.innerHTML = filtered.map((c, i) => buildCard(c, i * 30)).join('');
    noResults.style.display = filtered.length === 0 ? 'block' : 'none';

    if (countEl) {
      countEl.textContent = filtered.length === courses.length
        ? `${courses.length} classes`
        : `${filtered.length} of ${courses.length} classes`;
    }
  }
}

function resetFilters() {
  document.getElementById('searchInput').value = '';
  document.getElementById('searchClear').classList.remove('visible');
  document.querySelectorAll('.chip').forEach((c, i) => {
    c.classList.toggle('chip--active', i === 0);
  });
  const gridId = document.getElementById('bakingGrid') ? 'bakingGrid' : 'cookingGrid';
  const courses = document.getElementById('bakingGrid') ? baking : cooking;
  initFilterPage(courses, gridId);
}


/* ══════════════════════════════════
   DETAIL OVERLAY
══════════════════════════════════ */
function openDetail(id) {
  const c = allCourses.find(x => x.id === id);
  if (!c) return;
  const onlinePrice = getOnlinePrice(c);
  const offlinePrice = getOfflinePrice(c);
  const offlineDuration = getOfflineDuration(c);

  buildDetailHero(c);

  document.getElementById('detTitle').textContent = c.title;
  document.getElementById('detDesc').textContent  = c.desc;
  document.getElementById('detPrice').innerHTML   =
    `<div class="det-price-grid">
      <div class="det-price-col">
        <span class="det-price-label">Online</span>
        <span class="det-price-value">${onlinePrice}</span>
      </div>
      <div class="det-price-col">
        <span class="det-price-label">Offline</span>
        <span class="det-price-value">${offlinePrice}</span>
        <span class="det-price-sub">${offlineDuration}</span>
      </div>
    </div>`;
  document.getElementById('detChips').innerHTML   =
    `<div class="det-chip">Offline: ${offlineDuration}</div>`;

  document.getElementById('detTopics').innerHTML =
    (c.highlights || []).map(h => `<li class="dip-hl">${h}</li>`).join('');

  const bodyInner = document.querySelector('.detail-body-inner');
  let modEl = document.getElementById('diplomaModules');
  if (!modEl) {
    modEl = document.createElement('div');
    modEl.id = 'diplomaModules';
    bodyInner.appendChild(modEl);
  }
  if (c.modules) {
    modEl.innerHTML =
      `<div class="dip-mod-head">Curriculum</div>
       <div class="dip-mod-grid">` +
      c.modules.map((mod, i) => `
        <div class="dip-mod ${mod.items.length > 9 ? 'dip-mod--wide' : ''}">
          <div class="dip-mod-title">
            <span class="dip-mod-num">${i + 1}</span>${mod.title}
          </div>
          <ul class="dip-mod-items">
            ${mod.items.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>`).join('') +
      `</div>`;
  } else {
    modEl.innerHTML = '';
  }

  const msg = encodeURIComponent(
    `Hi! I'm interested in the "${c.title}" class (online ${onlinePrice}/person, offline ${offlinePrice}). Could you please share more details about the schedule?`
  );
  document.getElementById('detWa').href = `https://wa.me/${WA}?text=${msg}`;

  document.getElementById('overlay').classList.add('open');
  document.body.style.overflow = 'hidden';

  const scrollArea = document.getElementById('detScrollArea');
  requestAnimationFrame(() => {
    if (scrollArea) scrollArea.scrollTop = 0;
  });

  const titleEl = document.getElementById('detTitle');
  if (scrollArea && titleEl) {
    const onScroll = () => {
      titleEl.classList.toggle('stuck', scrollArea.scrollTop > 235);
    };
    scrollArea.removeEventListener('scroll', scrollArea._onScroll);
    scrollArea._onScroll = onScroll;
    scrollArea.addEventListener('scroll', onScroll);
  }
}

function closeDetail() {
  document.getElementById('overlay').classList.remove('open');
  document.body.style.overflow = '';
}

const overlay = document.getElementById('overlay');

if (overlay) {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeDetail();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeDetail();
  });
}
function closeDetail() {
  const overlay = document.getElementById('overlay');
  if (!overlay) return;

  overlay.classList.remove('open');
  document.body.style.overflow = '';
}


/* ══════════════════════════════════
   MOBILE NAV TOGGLE
══════════════════════════════════ */
const navToggle = document.getElementById('navToggle');
const mainNav   = document.getElementById('mainNav');
if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}


/* ══════════════════════════════════
   CUSTOM CAKE WHATSAPP BUTTON
══════════════════════════════════ */
const cakeMsg   = encodeURIComponent("Hi! I'd like to enquire about ordering a customised cake. Could you please share more details?");
const cakeWaBtn = document.getElementById('cakeWaBtn');
if (cakeWaBtn) cakeWaBtn.href = `https://wa.me/${WA}?text=${cakeMsg}`;


/* ══════════════════════════════════
   VIDEO TESTIMONIALS CAROUSEL
══════════════════════════════════ */
(function initVideoCarousel() {
  const track = document.getElementById('videoCarouselTrack');
  const prevBtn = document.getElementById('videoPrev');
  const nextBtn = document.getElementById('videoNext');
  const dotsContainer = document.getElementById('videoCarouselDots');
  if (!track) return;

  const cards = track.querySelectorAll('.video-card');
  const total = cards.length;
  let current = 0;

  function getVisible() {
    return window.innerWidth >= 900 ? 3 : window.innerWidth >= 600 ? 2 : 1;
  }

  function getMaxIndex() {
    return Math.max(0, total - getVisible());
  }

  // Build dots
  function buildDots() {
    if (!dotsContainer) return;
    const maxIdx = getMaxIndex();
    dotsContainer.innerHTML = '';
    for (let i = 0; i <= maxIdx; i++) {
      const dot = document.createElement('span');
      dot.className = 'video-dot' + (i === current ? ' active' : '');
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    }
  }

  function updateDots() {
    if (!dotsContainer) return;
    dotsContainer.querySelectorAll('.video-dot').forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function goTo(idx) {
    const maxIdx = getMaxIndex();
    current = Math.max(0, Math.min(idx, maxIdx));
    const cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(track).gap || 24);
    track.style.transform = `translateX(-${current * cardWidth}px)`;
    updateDots();
  }

  prevBtn && prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn && nextBtn.addEventListener('click', () => goTo(current + 1));

  window.addEventListener('resize', () => {
    current = Math.min(current, getMaxIndex());
    buildDots();
    goTo(current);
  });

  buildDots();
  goTo(0);
})();


/* ══════════════════════════════════
   VIDEO TESTIMONIALS MODAL
══════════════════════════════════ */
(function initVideoModal() {
  const modal = document.getElementById('videoModal');
  const player = document.getElementById('videoModalPlayer');
  const closeBtn = document.getElementById('videoModalClose');
  const thumbs = document.querySelectorAll('.video-thumb[data-video-src]');
  if (!modal || !player || !thumbs.length) return;

  function openVideo(src) {
    if (!src) return;
    player.src = src;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    player.play().catch(() => {});
  }

  function closeVideo() {
    player.pause();
    player.removeAttribute('src');
    player.load();
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => openVideo(thumb.dataset.videoSrc));
  });

  closeBtn && closeBtn.addEventListener('click', closeVideo);
  modal.querySelectorAll('[data-video-close]').forEach(el => {
    el.addEventListener('click', closeVideo);
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeVideo();
  });
})();
