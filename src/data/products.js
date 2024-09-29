const products = [
  {
    category: "Oferta",
    product: {
      id: 1,
      name: "Family Bundle",
      description: "2 chicken Gyros, 2 fries, 2 coca cola",
      price: 900,

      imageUrl:
        "https://images.weserv.nl/?url=lh3.googleusercontent.com/0kTcEH3IPDOqnsvGBar2Si4NMY9Jj_lnWOW-k281TeyjoIso1OMXv2NWMwQWLO_u0qcb-8ovzV3G3xVPZ-0JfrJTr15DeN51hZA",
    },
  },
  {
    category: "Oferta",
    product: {
      id: 2,
      name: "Flavor Fiesta",
      description: "1 chicken skepasti, 1 coca cola",
      price: 490,
      imageUrl:
        "https://images.weserv.nl/?url=lh3.googleusercontent.com/jK8faHDZ4MBsbl0gpnvvdXr_z7AFVMfXXtrkT_l8_VH20uC6hbCt_tLL_AfmKo-hmeiqh2VJNahsa8pgGJZK-puu1iguZpjeNk2MRg",
    },
  },
  {
    category: "Combo",
    product: {
      id: 3,
      name: "Pork Gyro Party",
      description: "pork gyros, french fries, coca cola",
      price: 540,
      imageUrl:
        "https://images.weserv.nl/?url=lh3.googleusercontent.com/PjYkc21yDpzT4bvDuWo5_-lyeWVEJjuZ7t1JFSCS4ztXs1zzU-0MkRzfD6X-_-JVOcTBy41lgAcltW9vT4J8muDtcqS-l_3iJSY",
    },
  },
  {
    category: "Combo",
    product: {
      id: 4,
      name: "Chicken Gyro Party",
      description: "chicken gyros, french fries, coca cola",
      price: 530,
      imageUrl:
        "https://images.weserv.nl/?url=lh3.googleusercontent.com/VTbUXdtuiloCLUKDhUZEbMiIg5D5l-XC2tKhCJT-2iT6pZpgE_WTD0qhm4SK3InFevbFGLqNlWJs9KFGK-mgmQMHORX3B4mln8q5Og",
    },
  },
  {
    category: "Combo",
    product: {
      id: 5,
      name: "Schnitzel Pita Party",
      description: "Schnitzel pita, french fries, coca cola",
      price: 530,
      imageUrl:
        "https://images.weserv.nl/?url=lh3.googleusercontent.com/bENIrvWyTPUZ1zK8gVsxQoWxqY_O8jVCUf4OhQbRH6SMAZ9CTIDhB3KjRaLuOwd3xdD6yOUnnKvb1h85CiweMzR4RwDzi0wxHcRb",
    },
  },
  {
    category: "Combo",
    product: {
      id: 6,
      name: "Beef Skepasti, French Fries, Coca Cola",
      description: "beef skepasti, french fries, coca cola",
      price: 890,
      imageUrl:
        "https://images.weserv.nl/?url=lh3.googleusercontent.com/YcmaCK25e-2Tt-_cX48I9Jxk89YPtTunr45qM2y2_aQvQli4f9WBPRa6pJqXbUJVuFPeraJRVRaTHdsQXg296y0Y-Vh7bEHZ2uea",
    },
  },
  {
    category: "Combo",
    product: {
      id: 7,
      name: "Mushroom Pita Combo",
      description: "2 chicken Gyros, 2 fries, 2 coca cola",
      price: 620,
      imageUrl:
        "https://images.weserv.nl/?url=lh3.googleusercontent.com/TqcuV0atTagNSZsSNvOeXUFbZNVihHM6oCgoNH0GPyJzrJK1P4924dOHENbnGswkvwbgGGc9caxeojEfmFLGEG9oEfCwtfjypzat",
    },
  },
  {
    category: "Specials",
    product: {
      id: 8,
      name: "Beef Skepasti",
      description: "salcë kosi,kofshe vici,domate,qepë e kuqe,patate,Salce BBQ",
      price: 790,
      imageUrl:
        "https://images.weserv.nl/?url=storage.googleapis.com/baboon-images/menu-item/opa20beef20skepasti20white_item-20231115124345814.png",
    },
  },
  {
    category: "Specials",
    product: {
      id: 9,
      name: "Minced Beef Skepasti",
      description: "Qofte viçi, salce pikante, domate, qepe te kuqe, kastravec turshi, paprika, patate, BBQ",
      price: 690,
      imageUrl:
        "https://images.weserv.nl/?url=storage.googleapis.com/baboon-images/menu-item/opa20minced20beef20skepasti20white_item-20231115124404114.png",
    },
  },
  {
    category: "Pitas",
    product: {
      id: 10,
      name: "Pork Gyros",
      description: "Pita, tzatziki, domate, qepë, patate,paprika",
      price: 300,
      imageUrl:
        "https://images.weserv.nl/?url=storage.googleapis.com/baboon-images/menu-item/opa20pork20gyros20white_item-20231115124356832.png",
    },
  },
  {
    category: "Pitas",
    product: {
      id: 11,
      name: "Chicken Gyros",
      description: "pita, gjiro pule, sallatë romane, salcë maya, domate, patate",
      price: 290,
      imageUrl:
        "https://images.weserv.nl/?url=storage.googleapis.com/baboon-images/menu-item/opa20chicken20gyros20white_item-20231115124445458.png",
    },
  },
  {
    category: "Pitas",
    product: {
      id: 12,
      name: "Mushroom Pita",
      description: "Majonezë, qepë, domate, uthull balsamike, kërpurdha, patate",
      price: 380,
      imageUrl:
        "https://images.weserv.nl/?url=lh3.googleusercontent.com/ekVHLj6HFTYhK9I0syFJeLk7rxtLUB66x0oKwl0H-6CHd8I-6E2bf-xvXe_o5q-ex_owssSH7Vz31bbf5DzfwH9wWcwF6u-40Zs",
    },
  },
  {
    category: "Pitas",
    product: {
      id: 13,
      name: "Schnitzel Pita",
      description: "Pulë e skuqur, sallatë lakër dhe karrotë, sallate romane, salcë hudhre",
      price: 290,
      imageUrl:
        "https://images.weserv.nl/?url=storage.googleapis.com/baboon-images/menu-item/opa20schnitzel20white_item-20231115140116715.png",
    },
  },
  {
    category: "Pitas",
    product: {
      id: 14,
      name: "Falafel Pita",
      description: "Falafel kungulli, speca të pjekur, sallatë romaine, domate, qepë, paprika, salcë patëllxhani",
      price: 270,
      imageUrl:
        "https://images.weserv.nl/?url=storage.googleapis.com/baboon-images/menu-item/opa20falafel20white_item-20231115125950816.png",
    },
  },
  {
    category: "Pitas",
    product: {
      id: 15,
      name: "Halloumi Pita",
      description: "djath halloumi, pate ulliri, domate, sallatë romaine, tzatziki, speca te pjekur, mente",
      price: 390,
      imageUrl:
        "https://images.weserv.nl/?url=storage.googleapis.com/baboon-images/menu-item/opa20halloumi20white_item-20231115143657326.png",
    },
  },
  {
    category: "Pitas",
    product: {
      id: 16,
      name: "Kebab Pita",
      description: "Qofte viçi, salcë kosi, pikante, domate, paprika, qepë e kuqe, BBQ, kastraveca turshi",
      price: 450,
      imageUrl:
        "https://images.weserv.nl/?url=storage.googleapis.com/baboon-images/menu-item/opa20kebab20white_item-20231115124400339.png",
    },
  },
  {
    category: "Pitas",
    product: {
      id: 17,
      name: "Pork Gyros Dopio Pita",
      description: "Dopio Pita, tzatziki, domate, qepë, patate",
      price: 330,
      imageUrl:
        "https://images.weserv.nl/?url=lh3.googleusercontent.com/PLYlF3rQowSH1RQOP3skZvlNT1JLkCrofcxxQrWTlzYAyVlaz8ohPvZGuDK2yNeHTtgx1qasL2E7mIcoCNyhKK_6u72-ygEyOlU",
    },
  },
  {
    category: "Bowls",
    product: {
      id: 18,
      name: "Chicken Gyros Bowl(Fries)",
      description: "gjiro pule, patate, sallate greke, salce sos",
      price: 550,
      imageUrl:
        "https://images.weserv.nl/?url=lh3.googleusercontent.com/jU4VyOLogc_cUOduRBlUvABNc55kI-xliBwjZbqtWJrSLSNcOGg7yW5BCPqYUtGkziGPN38gJnJAYYK1S1Y2nexMiff7kZkCSNU-",
    },
  },
  {
    category: "Bowls",
    product: {
      id: 19,
      name: "Chicken Skewers Bowl(Fries)",
      description: "shishqebab pule, patate, sallat greke, salce sos, lemon",
      price: 550,
      imageUrl:
        "https://images.weserv.nl/?url=lh3.googleusercontent.com/BjW0J9_-K8NV9_6K8Nb-msjvwIkKkRtc9AlCcYq375RcDaISKJWw4eHvj6qfH_MzpWLs6_6p4IMLjZYX-nmwPw3BNnJ44q0uWcX8",
    },
  },
  {
    category: "Bowls",
    product: {
      id: 20,
      name: "Schnitzel Bowl(Fries)",
      description: "gjoks pule krokant, sallate laker karrota, salce hudhre, patate, lemon",
      price: 550,
      imageUrl:
        "https://images.weserv.nl/?url=lh3.googleusercontent.com/AcKrqNiIryu5ZCLxc0oHv-s1s1niWclcnVWLtWUxUMQq1kB-RA47VdBLIjcLkoCNWklgepwZ4ahtD8I_7TCmZn-RzsIUXtbAsR4",
    },
  },
  {
    category: "Salads",
    product: {
      id: 21,
      name: "Caesar Salad",
      description: "Sallatë romane, bukë krokante, salcë Caesar, djathë i grirë",
      price: 350,
      imageUrl:
        "https://images.weserv.nl/?url=storage.googleapis.com/baboon-images/menu-item/opa20greek20caesar20salad20white_item-20231115140117993.png",
    },
  },
  {
    category: "Salads",
    product: {
      id: 22,
      name: "Greek Salad",
      description: "Domate të prera, kastravec, qepë e kuqe, ullinj, djathë feta",
      price: 480,
      imageUrl:
        "https://images.weserv.nl/?url=storage.googleapis.com/baboon-images/menu-item/opa20greek20salad20white_item-20231115124353091.png",
    },
  },
  {
    category: "Salads",
    product: {
      id: 23,
      name: "Avocado Salad",
      description: "Romaine lettuce, dill, mustard dressing, avocado, roasted garlic bread",
      price: 480,
      imageUrl:
        "https://images.weserv.nl/?url=storage.googleapis.com/baboon-images/menu-item/opa20avocado20salad20white_item-20231115125951487.png",
    },
  },
  {
    category: "Starters",
    product: {
      id: 24,
      name: "Hummus",
      description: "Krem qiqrash, hudhër, erëza, vaj ulliri ekstra i virgjër",
      price: 200,
      imageUrl:
        "https://images.weserv.nl/?url=storage.googleapis.com/baboon-images/menu-item/opa20hummus20white_item-20231115124339781.png",
    },
  },
  {
    category: "Starters",
    product: {
      id: 25,
      name: "Tzatziki",
      description: "Yogurt grek, kastravec, hudhër",
      price: 190,
      imageUrl:
        "https://images.weserv.nl/?url=storage.googleapis.com/baboon-images/menu-item/opa20tzatziki20white_item-20231115124327623.png",
    },
  },
  {
    category: "Ëmbëlsira",
    product: {
      id: 26,
      name: "Loukoumades Me Mjaltë Dhe Arra 4 Copë",
      description: "Me mjaltë, kanellë, arra",
      price: 200,
      imageUrl:
        "https://images.weserv.nl/?url=storage.googleapis.com/baboon-images/menu-item/opa20loukoumades20white_item-20231115124405438.png",
    },
  },
  {
    category: "Ëmbëlsira",
    product: {
      id: 27,
      name: "Yogurt",
      description: "Me mjaltë, arra",
      price: 350,
      imageUrl:
        "https://images.weserv.nl/?url=storage.googleapis.com/baboon-images/menu-item/opa20yogurt20white_item-20231115124406066.png",
    },
  },
  {
    category: "Ëmbëlsira",
    product: {
      id: 28,
      name: "Pistachio Baklava",
      description: "Pistachio, Baklava",
      price: 250,
      imageUrl:
        "https://images.weserv.nl/?url=storage.googleapis.com/baboon-images/menu-item/opa20pistachio20baklava20white_item-20231115124404738.png",
    },
  },
  {
    category: "Pije Freskuese",
    product: {
      id: 29,
      name: "Ujë I Gazuar Tepelena",
      description: "Ujë i gazuar 500ml Tepelena",
      price: 100,
      imageUrl:
        "https://images.weserv.nl/?url=lh3.googleusercontent.com/6DAOtn4R2oEq4-l_IiVfOS3J1wBmnwxG6Xa7rRaj_9aJt183PFWqzQp7Z6UpFcWCsif5R38i98xxGWr7ctyFS9aIBAlAdBZLQO95",
    },
  },
  {
    category: "Pije Freskuese",
    product: {
      id: 30,
      name: "Coca Cola",
      description: "Coca Cola 0.33",
      price: 150,
      imageUrl:
        "https://images.weserv.nl/?url=lh3.googleusercontent.com/TNmKNkkOVwhva3vEeMu67HUd6xiKrpAMO1NzG9DzeFhA_SacHJKULiv-izAj2CMRfy1zFOWxL5t4nt6NyflzLW1vLxgJLoMEhmir",
    },
  },
  {
    category: "Pije Freskuese",
    product: {
      id: 31,
      name: "Lemon Soda",
      description: "Lemon Soda",
      price: 150,
      imageUrl:
        "https://images.weserv.nl/?url=lh3.googleusercontent.com/-Jvm7uqcWOLNsT8IObR-qk55spgrFWjMWt89ZX6vrBv_QaDZ1tCp_cB-2WNPuZ7U1sizoISeW6QiKTMc61POUJ0sDF6TQ_Hni585",
    },
  },
  {
    category: "Pije Freskuese",
    product: {
      id: 32,
      name: "Schweppes Tonic Water",
      description: "Scheweppes Tonic 0.33",
      price: 150,
      imageUrl:
        "https://images.weserv.nl/?url=lh3.googleusercontent.com/tM__b9IZemQEM-in0Y_c_WA11XGz7LMKupOs8d7regcwt8LlT93UvP9oLVkAvLGY_epfbfNc1O1wETVQ76xusmapwuhtO81E97x7",
    },
  },
  {
    category: "Pije Alkolike",
    product: {
      id: 33,
      name: "Amstel",
      description: "0.33l",
      price: 250,
      imageUrl:
        "https://images.weserv.nl/?url=storage.googleapis.com/baboon-images/menu-item/birre20amstel_item-20231115124407530.jpg",
    },
  },
  {
    category: "Pije Alkolike",
    product: {
      id: 34,
      name: "Heineken",
      description: "Heineken me shishe qelqi",
      price: 300,
      imageUrl:
        "https://images.weserv.nl/?url=lh3.googleusercontent.com/GOVzy67CTFYmD_mAY59k_gfU2zIKWMe-P1Zwaq21HeRgWIAZfDfFRGjfke07TOC_iWLbD2M3BI7HFDS-5jt3V38sBBoYx4htnUM",
    },
  },
  {
    category: "Pije Alkolike",
    product: {
      id: 35,
      name: "Paulaner",
      description: "0.5l",
      price: 500,
      imageUrl:
        "https://images.weserv.nl/?url=storage.googleapis.com/baboon-images/menu-item/paulanerjpg_item-20231115124407860.jpg",
    },
  },
];

export default products;
