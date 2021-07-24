const offers = [
  {
    author: {
      avatar: 'img/avatars/user04.png',
    },
    offer: {
      title: 'Квартира студия в престижном районе',
      address: 'Chiyoda-ku, Tōkyō-to 102-0091',
      price: 88000,
      type: 'bungalow',
      rooms: 6,
      guests: 5,
      checkin: '7:00',
      checkout: '10:00',
      features: [
        'wifi',
        'washer',
        'elevator',
        'parking',
        'dishwasher',
        'conditioner',
      ],
      description:
        'Комната в трёхкомнатной квартире, подойдёт молодым путешественникам.',
      photos: [
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/cameron-venti-R64qgQ6rr_o.jpg',
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
      ],
    },
    location: {
      lat: 35.66478515199194,
      lng: 139.7046871667523,
    },
  },
  {
    author: {
      avatar: 'img/avatars/user03.png',
    },
    offer: {
      title: 'Тихая квартирка недалеко от метро',
      address: '105-0016 Tōkyō-to, Chiyoda-ku, 14-9',
      price: 10000,
      type: 'bungalow',
      rooms: 3,
      guests: 2,
      checkin: '17:00',
      checkout: '10:00',
      features: ['conditioner', 'dishwasher', 'washer', 'elevator', 'parking'],
      description:
        'У нас тут все ништяк. Ларек за углом. Шава 24 часа. Приезжайте! Интернетов нет!',
      photos: [
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/felix-fuchs-PXAcac16eJQ.jpg',
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
      ],
    },
    location: {
      lat: 35.65068759389131,
      lng: 139.71753727983852,
    },
  },
  {
    author: {
      avatar: 'img/avatars/user11.png',
    },
    offer: {
      title: 'Императорский дворец в центре Токио',
      address: '105-0003 Tōkyō-to, Minato-ku, Nishishinbashi, 2 Chome−3',
      price: 27000,
      type: 'bungalow',
      rooms: 5,
      guests: 10,
      checkin: '8:00',
      checkout: '3:00',
      features: ['conditioner', 'parking', 'washer'],
      photos: [
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/scott-webb-1ddol8rgUH8.jpg',
      ],
    },
    location: {
      lat: 35.67039568834063,
      lng: 139.74113813395178,
    },
  },
  {
    author: {
      avatar: 'img/avatars/user11.png',
    },
    offer: {
      title: 'Небольшая бюджетная комната для студентов',
      address: '102-0075 Tōkyō-to, Chiyoda-ku, Sanbanchō',
      price: 73000,
      type: 'hotel',
      rooms: 3,
      guests: 10,
      checkin: '5:00',
      checkout: '6:00',
      description: 'Хейтеров просьба не беспокоить.',
      photos: [
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/felix-fuchs-PXAcac16eJQ.jpg',
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
      ],
    },
    location: {
      lat: 35.688038167634964,
      lng: 139.73420525913917,
    },
  },
  {
    author: {
      avatar: 'img/avatars/user11.png',
    },
    offer: {
      title: 'Уютное гнездышко для молодоженов',
      address: '102-0080 Tōkyō-to, Chiyoda-ku, 14-7',
      price: 45000,
      type: 'bungalow',
      rooms: 1,
      guests: 10,
      checkin: '8:00',
      checkout: '19:00',
      features: ['dishwasher', 'parking', 'wifi'],
      description:
        'Великолепная лавочка прямо в центре парка. Подходит для всех кто любит спать на свежем воздухе.',
      photos: [
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/felix-fuchs-PXAcac16eJQ.jpg',
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
      ],
    },
    location: {
      lat: 35.674179397379945,
      lng: 139.7568731836693,
    },
  },
  {
    author: {
      avatar: 'img/avatars/user05.png',
    },
    offer: {
      title: 'Стандартная квартира в центре',
      address: '105-0003 Tōkyō-to, Minato-ku, Nishishinbashi, 2 Chome−3',
      price: 76000,
      type: 'house',
      rooms: 9,
      guests: 3,
      checkin: '21:00',
      checkout: '10:00',
      features: ['wifi', 'dishwasher'],
      description:
        'Замечательный дворец в старинном центре города. Только для тех кто может себе позволить дворец. Лакеев и прочих жокеев просим не беспокоить.',
    },
    location: {
      lat: 35.658486463795285,
      lng: 139.74498845891335,
    },
  },
  {
    author: {
      avatar: 'img/avatars/user10.png',
    },
    offer: {
      title: 'Милое гнездышко для фанатов Анимэ',
      address: '1-1 Chiyoda, Chiyoda-ku, Tōkyō-to 100-8111',
      price: 74000,
      type: 'house',
      rooms: 9,
      guests: 7,
      checkin: '7:00',
      checkout: '19:00',
      description:
        'Маленькая чистая квратира на краю парка. Без интернета, регистрации и СМС.',
      photos: [
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/gabriel-beaudry-WuQME0I_oZA.jpg',
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/gracia-dharma-qTlbO6mkQH0.jpg',
      ],
    },
    location: {
      lat: 35.69515067615251,
      lng: 139.74188599791196,
    },
  },
  {
    author: {
      avatar: 'img/avatars/user03.png',
    },
    offer: {
      title: 'Хостел «Для друзей»',
      address: '1-1 Chiyoda, Chiyoda-ku, Tōkyō-to 100-8111',
      price: 44000,
      type: 'bungalow',
      rooms: 3,
      guests: 9,
      checkin: '0:00',
      checkout: '9:00',
      features: ['washer'],
      description:
        'Квартира на первом этаже. Соседи тихие. Для всех, кто терпеть не может шума и суеты.',
    },
    location: {
      lat: 35.69450377726495,
      lng: 139.70630522985968,
    },
  },
  {
    author: {
      avatar: 'img/avatars/user03.png',
    },
    offer: {
      title: 'Императорский дворец в центре Токио',
      address: '102-0082 Tōkyō-to, Chiyoda-ku, Ichibanchō, 14−3',
      price: 29000,
      type: 'flat',
      rooms: 8,
      guests: 10,
      checkin: '0:00',
      checkout: '1:00',
      features: ['parking', 'elevator'],
      description:
        'Замечательный дворец в старинном центре города. Только для тех кто может себе позволить дворец. Лакеев и прочих жокеев просим не беспокоить.',
    },
    location: {
      lat: 35.66691787209495,
      lng: 139.77520634400122,
    },
  },
  {
    author: {
      avatar: 'img/avatars/user01.png',
    },
    offer: {
      title: 'Отель-музей',
      address: '102-0082 Tōkyō-to, Chiyoda-ku, Ichibanchō, 14−3',
      price: 6000,
      type: 'hotel',
      rooms: 5,
      guests: 11,
      checkin: '16:00',
      checkout: '15:00',
      features: ['dishwasher', 'washer', 'elevator', 'parking'],
      description: 'Хейтеров просьба не беспокоить.',
      photos: [
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/gabriel-beaudry-WuQME0I_oZA.jpg',
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/gracia-dharma-qTlbO6mkQH0.jpg',
      ],
    },
    location: {
      lat: 35.68009070681535,
      lng: 139.7389404212978,
    },
  },
  {
    author: {
      avatar: 'img/avatars/default.png',
    },
    offer: {
      title: 'Загородный дом для спокойного отдыха',
      address: '102-0082 Tōkyō-to, Chiyoda-ku, Ichibanchō, 17−4',
      price: 80000,
      type: 'palace',
      rooms: 9,
      guests: 8,
      checkin: '13:00',
      checkout: '18:00',
      features: ['conditioner', 'elevator'],
      description:
        'Квартира на первом этаже. Соседи тихие. Для всех, кто терпеть не может шума и суеты.',
      photos: [
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/scott-webb-1ddol8rgUH8.jpg',
      ],
    },
    location: {
      lat: 35.66699707628906,
      lng: 139.74788479787486,
    },
  },
  {
    author: {
      avatar: 'img/avatars/user10.png',
    },
    offer: {
      title: 'Небольшая бюджетная комната для студентов',
      address: 'Chiyoda-ku, Tōkyō-to 102-0082',
      price: 56000,
      type: 'hotel',
      rooms: 3,
      guests: 11,
      checkin: '5:00',
      checkout: '5:00',
      features: ['wifi'],
      description:
        'Великолепная квартира-студия в центре Токио. Подходит как туристам, там и бизнесменам. Квартира полностью укомплектована и имеет свежий ремонт.',
      photos: [
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/greg-rosenke-HHgnQFBVs6o.jpg',
      ],
    },
    location: {
      lat: 35.656899760017765,
      lng: 139.72057153835743,
    },
  },
  {
    author: {
      avatar: 'img/avatars/default.png',
    },
    offer: {
      title: 'Квартира студия в престижном районе',
      address: '105-0016 Tōkyō-to, Minato-ku',
      price: 68000,
      type: 'flat',
      rooms: 8,
      guests: 1,
      checkin: '13:00',
      checkout: '6:00',
      features: [
        'elevator',
        'parking',
        'washer',
        'dishwasher',
        'conditioner',
        'wifi',
      ],
      description:
        'Маленькая квартирка на чердаке. Для самых не требовательных.',
      photos: [
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/edvin-johansson-rlwE8f8anOc.jpg',
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/erik-mclean-1H_tipvmM60.jpg',
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/ducminh-nguyen-hG3H6N6VwCY.jpg',
      ],
    },
    location: {
      lat: 35.654819768981255,
      lng: 139.7077577166909,
    },
  },
  {
    author: {
      avatar: 'img/avatars/user03.png',
    },
    offer: {
      title: 'Чёткая хата',
      address: '105-0016 Tōkyō-to, Minato-ku',
      price: 66000,
      type: 'bungalow',
      rooms: 8,
      guests: 2,
      checkin: '20:00',
      checkout: '13:00',
      features: ['conditioner'],
      description:
        'Великолепная квартира-студия в центре Токио. Подходит как туристам, там и бизнесменам. Квартира полностью укомплектована и имеет свежий ремонт.',
    },
    location: {
      lat: 35.659560358680395,
      lng: 139.76260612901496,
    },
  },
  {
    author: {
      avatar: 'img/avatars/default.png',
    },
    offer: {
      title: 'Милое гнездышко для фанатов Анимэ',
      address: '105-0003 Tōkyō-to, Minato-ku, Nishishinbashi, 2 Chome−3',
      price: 54000,
      type: 'palace',
      rooms: 4,
      guests: 7,
      checkin: '6:00',
      checkout: '3:00',
      features: ['washer', 'elevator', 'conditioner', 'parking', 'wifi'],
      description:
        'Великолепная лавочка прямо в центре парка. Подходит для всех кто любит спать на свежем воздухе.',
      photos: [
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/cameron-venti-R64qgQ6rr_o.jpg',
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
      ],
    },
    location: {
      lat: 35.65024042738934,
      lng: 139.7225761109036,
    },
  },
  {
    author: {
      avatar: 'img/avatars/user08.png',
    },
    offer: {
      title: 'Тихая квартирка недалеко от метро',
      address: 'Chiyoda-ku, Tōkyō-to 102-0082',
      price: 52000,
      type: 'bungalow',
      rooms: 1,
      guests: 7,
      checkin: '3:00',
      checkout: '18:00',
      features: [
        'wifi',
        'elevator',
        'parking',
        'washer',
        'conditioner',
        'dishwasher',
      ],
      description:
        'У нас тут все ништяк. Ларек за углом. Шава 24 часа. Приезжайте! Интернетов нет!',
      photos: [
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/earvin-huang-a8danBUbgw0.jpg',
      ],
    },
    location: {
      lat: 35.650528423840775,
      lng: 139.70441846062903,
    },
  },
  {
    author: {
      avatar: 'img/avatars/user06.png',
    },
    offer: {
      title: 'Отель-музей',
      address: '105-0003 Tōkyō-to, Chiyoda-ku, Ichibanchō',
      price: 96000,
      type: 'bungalow',
      rooms: 4,
      guests: 3,
      checkin: '10:00',
      checkout: '15:00',
      description:
        'Маленькая квартирка на чердаке. Для самых не требовательных.',
      photos: [
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/scott-webb-1ddol8rgUH8.jpg',
      ],
    },
    location: {
      lat: 35.69011020938311,
      lng: 139.7962102761978,
    },
  },
  {
    author: {
      avatar: 'img/avatars/user02.png',
    },
    offer: {
      title: 'Стандартная квартира в центре',
      address: '102-0081 Tōkyō-to, Chiyoda-ku, Yonbanchō, 5−6',
      price: 51000,
      type: 'hotel',
      rooms: 4,
      guests: 8,
      checkin: '2:00',
      checkout: '19:00',
      description:
        'Отель для ценителей истории. Почуствуй себя героем из прошлого.',
      photos: [
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/ashim-d-silva-zL_urJ_3bDM.jpg',
      ],
    },
    location: {
      lat: 35.67506969125206,
      lng: 139.70871386146933,
    },
  },
  {
    author: {
      avatar: 'img/avatars/user06.png',
    },
    offer: {
      title: 'Маленькая квартирка рядом с парком',
      address: '1-1 Chiyoda, Chiyoda-ku, Tōkyō-to 100-8111',
      price: 54000,
      type: 'house',
      rooms: 7,
      guests: 1,
      checkin: '8:00',
      checkout: '2:00',
      features: ['elevator', 'parking', 'conditioner', 'wifi'],
      description:
        'У нас тут все ништяк. Ларек за углом. Шава 24 часа. Приезжайте! Интернетов нет!',
      photos: [
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/edvin-johansson-rlwE8f8anOc.jpg',
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/erik-mclean-1H_tipvmM60.jpg',
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/ducminh-nguyen-hG3H6N6VwCY.jpg',
      ],
    },
    location: {
      lat: 35.664217929459426,
      lng: 139.7398093374356,
    },
  },
  {
    author: {
      avatar: 'img/avatars/user10.png',
    },
    offer: {
      title: 'Милое гнездышко для фанатов Анимэ',
      address: 'Chiyoda-ku, Tōkyō-to 102-0082',
      price: 60000,
      type: 'hotel',
      rooms: 5,
      guests: 3,
      checkin: '18:00',
      checkout: '14:00',
      features: ['conditioner', 'wifi', 'dishwasher'],
      description:
        'Один из лучших хостелов для душевного общения. Ужинаем вместе и играем в «Мафию» по вечерам, вкусно готовим. Ежедневная уборка, бесплатный Wi-Fi, чистое постельное белье.',
      photos: [
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/gabriel-beaudry-WuQME0I_oZA.jpg',
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/gracia-dharma-qTlbO6mkQH0.jpg',
      ],
    },
    location: {
      lat: 35.68065015881459,
      lng: 139.7228357205187,
    },
  },
  {
    author: {
      avatar: 'img/avatars/user10.png',
    },
    offer: {
      title: 'Тихая квартирка недалеко от метро',
      address: '105-0016 Tōkyō-to, Chiyoda-ku, 14-9',
      price: 61000,
      type: 'flat',
      rooms: 6,
      guests: 8,
      checkin: '8:00',
      checkout: '2:00',
      features: ['dishwasher', 'conditioner', 'elevator', 'washer'],
      description:
        'Маленькая чистая квратира на краю парка. Без интернета, регистрации и СМС.',
      photos: [
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/felix-fuchs-PXAcac16eJQ.jpg',
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
      ],
    },
    location: {
      lat: 35.653821639312824,
      lng: 139.77683941558632,
    },
  },
  {
    author: {
      avatar: 'img/avatars/user11.png',
    },
    offer: {
      title: 'Уютное гнездышко для молодоженов',
      address: '1-1 Chiyoda, Chiyoda-ku, Tōkyō-to 100-8111',
      price: 37000,
      type: 'flat',
      rooms: 7,
      guests: 7,
      checkin: '15:00',
      checkout: '10:00',
      features: ['elevator', 'washer'],
      description:
        'Комната в трёхкомнатной квартире, подойдёт молодым путешественникам.',
      photos: [
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/felix-fuchs-PXAcac16eJQ.jpg',
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
      ],
    },
    location: {
      lat: 35.660506244299725,
      lng: 139.7058591087774,
    },
  },
  {
    author: {
      avatar: 'img/avatars/user07.png',
    },
    offer: {
      title: 'Маленькая квартирка рядом с парком',
      address: '105-0016 Tōkyō-to, Chiyoda-ku, 14-9',
      price: 75000,
      type: 'hotel',
      rooms: 8,
      guests: 7,
      checkin: '1:00',
      checkout: '11:00',
      features: ['parking', 'elevator'],
      description:
        'Маленькая квартирка на чердаке. Для самых не требовательных.',
      photos: [
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/cameron-venti-R64qgQ6rr_o.jpg',
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
      ],
    },
    location: {
      lat: 35.68605846472139,
      lng: 139.74290004429028,
    },
  },
  {
    author: {
      avatar: 'img/avatars/user11.png',
    },
    offer: {
      title: 'Уютное гнездышко для молодоженов',
      address: '105-0003 Tōkyō-to, Chiyoda-ku, Ichibanchō',
      price: 8000,
      type: 'house',
      rooms: 5,
      guests: 4,
      checkin: '11:00',
      checkout: '15:00',
      features: ['elevator', 'dishwasher', 'washer', 'conditioner', 'wifi'],
      description:
        'Отель для ценителей истории. Почуствуй себя героем из прошлого.',
      photos: [
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/scott-webb-1ddol8rgUH8.jpg',
      ],
    },
    location: {
      lat: 35.66263319498885,
      lng: 139.7566128495493,
    },
  },
  {
    author: {
      avatar: 'img/avatars/user10.png',
    },
    offer: {
      title: 'Милое гнездышко для фанатов Анимэ',
      address: '102-0080 Tōkyō-to, Chiyoda-ku, 14-7',
      price: 28000,
      type: 'palace',
      rooms: 5,
      guests: 9,
      checkin: '6:00',
      checkout: '6:00',
      features: [
        'wifi',
        'parking',
        'washer',
        'dishwasher',
        'elevator',
        'conditioner',
      ],
      description:
        'У нас тут все ништяк. Ларек за углом. Шава 24 часа. Приезжайте! Интернетов нет!',
      photos: [
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/cameron-venti-R64qgQ6rr_o.jpg',
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
      ],
    },
    location: {
      lat: 35.67123063597489,
      lng: 139.7428683795686,
    },
  },
  {
    author: {
      avatar: 'img/avatars/user03.png',
    },
    offer: {
      title: 'Уютное гнездышко для молодоженов',
      address: '105-0003 Tōkyō-to, Chiyoda-ku, Ichibanchō',
      price: 63000,
      type: 'bungalow',
      rooms: 5,
      guests: 2,
      checkin: '14:00',
      checkout: '21:00',
      features: ['parking', 'elevator', 'wifi', 'conditioner', 'dishwasher'],
      description:
        'Комната в трёхкомнатной квартире, подойдёт молодым путешественникам.',
      photos: [
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/greg-rosenke-HHgnQFBVs6o.jpg',
      ],
    },
    location: {
      lat: 35.68506828433097,
      lng: 139.71080545431474,
    },
  },
  {
    author: {
      avatar: 'img/avatars/default.png',
    },
    offer: {
      title: 'Загородный дом для спокойного отдыха',
      address: '105-0003 Tōkyō-to, Minato-ku, Nishishinbashi, 2 Chome−3',
      price: 30000,
      type: 'flat',
      rooms: 9,
      guests: 9,
      checkin: '14:00',
      checkout: '3:00',
      description:
        'Один из лучших хостелов для душевного общения. Ужинаем вместе и играем в «Мафию» по вечерам, вкусно готовим. Ежедневная уборка, бесплатный Wi-Fi, чистое постельное белье.',
      photos: [
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/greg-rosenke-HHgnQFBVs6o.jpg',
      ],
    },
    location: {
      lat: 35.65932776476756,
      lng: 139.76436967988957,
    },
  },
  {
    author: {
      avatar: 'img/avatars/user01.png',
    },
    offer: {
      title: 'Стандартная квартира в центре',
      address: '102-0094 Tōkyō-to, Chiyoda-ku, Kioichō, 3',
      price: 93000,
      type: 'palace',
      rooms: 8,
      guests: 3,
      checkin: '12:00',
      checkout: '10:00',
      features: ['parking', 'washer', 'dishwasher', 'conditioner'],
      description:
        'Тут красиво, светло и уютно. Есть где разместиться компании из 5 человек. Кофе и печеньки бесплатно.',
    },
    location: {
      lat: 35.66128837665592,
      lng: 139.755270567897,
    },
  },
  {
    author: {
      avatar: 'img/avatars/default.png',
    },
    offer: {
      title: 'Стандартная квартира в центре',
      address: '105-0016 Tōkyō-to, Minato-ku',
      price: 52000,
      type: 'flat',
      rooms: 4,
      guests: 1,
      checkin: '3:00',
      checkout: '19:00',
      features: ['parking', 'elevator', 'conditioner'],
      photos: [
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/earvin-huang-a8danBUbgw0.jpg',
      ],
    },
    location: {
      lat: 35.688227562231994,
      lng: 139.75703257610647,
    },
  },
  {
    author: {
      avatar: 'img/avatars/user02.png',
    },
    offer: {
      title: 'Стандартная квартира в центре',
      address: '105-0003 Tōkyō-to, Chiyoda-ku, Ichibanchō',
      price: 80000,
      type: 'flat',
      rooms: 2,
      guests: 8,
      checkin: '8:00',
      checkout: '12:00',
      features: ['elevator', 'wifi', 'washer', 'dishwasher'],
      description:
        'Комната в трёхкомнатной квартире, подойдёт молодым путешественникам.',
      photos: [
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/earvin-huang-a8danBUbgw0.jpg',
      ],
    },
    location: {
      lat: 35.68721555599947,
      lng: 139.77307338012938,
    },
  },
  {
    author: {
      avatar: 'img/avatars/user02.png',
    },
    offer: {
      title: 'Стандартная квартира в центре',
      address: '105-0016 Tōkyō-to, Chiyoda-ku, 14-9',
      price: 93000,
      type: 'palace',
      rooms: 2,
      guests: 7,
      checkin: '18:00',
      checkout: '2:00',
      features: ['elevator', 'wifi', 'conditioner'],
      description:
        'Великолепная лавочка прямо в центре парка. Подходит для всех кто любит спать на свежем воздухе.',
      photos: [
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/andrea-davis-7Wg_9Dq17_U.jpg',
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/andrea-davis-8xT51zPdsjY.jpg',
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/andrea-davis-nbI8gqbBaHo.jpg',
      ],
    },
    location: {
      lat: 35.66660206945305,
      lng: 139.78075026914757,
    },
  },
  {
    author: {
      avatar: 'img/avatars/user11.png',
    },
    offer: {
      title: 'Стандартная квартира в центре',
      address: '102-0094 Tōkyō-to, Chiyoda-ku, Kioichō, 3',
      price: 77000,
      type: 'hotel',
      rooms: 4,
      guests: 7,
      checkin: '4:00',
      checkout: '11:00',
      features: ['washer'],
      description:
        'Комната в трёхкомнатной квартире, подойдёт молодым путешественникам.',
    },
    location: {
      lat: 35.68972737712999,
      lng: 139.7194031600913,
    },
  },
  {
    author: {
      avatar: 'img/avatars/user01.png',
    },
    offer: {
      title: 'Милейший чердачок',
      address: '102-0080 Tōkyō-to, Chiyoda-ku, 14-7',
      price: 21000,
      type: 'palace',
      rooms: 3,
      guests: 9,
      checkin: '12:00',
      checkout: '18:00',
      features: [
        'conditioner',
        'wifi',
        'dishwasher',
        'elevator',
        'parking',
        'washer',
      ],
      description:
        'Маленькая чистая квратира на краю парка. Без интернета, регистрации и СМС.',
      photos: [
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/scott-webb-1ddol8rgUH8.jpg',
      ],
    },
    location: {
      lat: 35.688690234586495,
      lng: 139.74077790377447,
    },
  },
  {
    author: {
      avatar: 'img/avatars/user02.png',
    },
    offer: {
      title: 'Стандартная квартира в центре',
      address: '102-0081 Tōkyō-to, Chiyoda-ku, Yonbanchō, 5−6',
      price: 50000,
      type: 'hotel',
      rooms: 4,
      guests: 9,
      checkin: '0:00',
      checkout: '9:00',
      features: ['washer', 'wifi', 'dishwasher', 'parking', 'elevator'],
      description:
        'Замечательный дворец в старинном центре города. Только для тех кто может себе позволить дворец. Лакеев и прочих жокеев просим не беспокоить.',
      photos: [
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/edvin-johansson-rlwE8f8anOc.jpg',
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/erik-mclean-1H_tipvmM60.jpg',
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/ducminh-nguyen-hG3H6N6VwCY.jpg',
      ],
    },
    location: {
      lat: 35.67722580876846,
      lng: 139.79925180702307,
    },
  },
  {
    author: {
      avatar: 'img/avatars/user07.png',
    },
    offer: {
      title: 'Загородный дом для спокойного отдыха',
      address: '105-0003 Tōkyō-to, Minato-ku, Nishishinbashi, 2 Chome−3',
      price: 45000,
      type: 'flat',
      rooms: 1,
      guests: 4,
      checkin: '16:00',
      checkout: '19:00',
      features: [
        'washer',
        'wifi',
        'conditioner',
        'elevator',
        'parking',
        'dishwasher',
      ],
      description:
        'Один из лучших хостелов для душевного общения. Ужинаем вместе и играем в «Мафию» по вечерам, вкусно готовим. Ежедневная уборка, бесплатный Wi-Fi, чистое постельное белье.',
      photos: [
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/scott-webb-1ddol8rgUH8.jpg',
      ],
    },
    location: {
      lat: 35.67514246556982,
      lng: 139.73790946194188,
    },
  },
  {
    author: {
      avatar: 'img/avatars/user05.png',
    },
    offer: {
      title: 'Милое гнездышко для фанатов Анимэ',
      address: '105-0003 Tōkyō-to, Chiyoda-ku, Ichibanchō',
      price: 12000,
      type: 'hotel',
      rooms: 6,
      guests: 6,
      checkin: '7:00',
      checkout: '3:00',
      features: [
        'dishwasher',
        'wifi',
        'parking',
        'elevator',
        'washer',
        'conditioner',
      ],
      description:
        'Замечательный дворец в старинном центре города. Только для тех кто может себе позволить дворец. Лакеев и прочих жокеев просим не беспокоить.',
      photos: [
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/edvin-johansson-rlwE8f8anOc.jpg',
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/erik-mclean-1H_tipvmM60.jpg',
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/ducminh-nguyen-hG3H6N6VwCY.jpg',
      ],
    },
    location: {
      lat: 35.69127597780553,
      lng: 139.74302644486204,
    },
  },
  {
    author: {
      avatar: 'img/avatars/user10.png',
    },
    offer: {
      title: 'Уютное гнездышко для молодоженов',
      address: '102-0081 Tōkyō-to, Chiyoda-ku, Yonbanchō, 5−6',
      price: 12000,
      type: 'flat',
      rooms: 3,
      guests: 10,
      checkin: '6:00',
      checkout: '17:00',
      features: ['washer', 'dishwasher', 'conditioner', 'parking', 'wifi'],
      description:
        'Тут красиво, светло и уютно. Есть где разместиться компании из 5 человек. Кофе и печеньки бесплатно.',
      photos: [
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/greg-rosenke-HHgnQFBVs6o.jpg',
      ],
    },
    location: {
      lat: 35.69211615861548,
      lng: 139.70927400994734,
    },
  },
  {
    author: {
      avatar: 'img/avatars/user06.png',
    },
    offer: {
      title: 'Тихая квартирка недалеко от метро',
      address: '105-0016 Tōkyō-to, Chiyoda-ku, 14-9',
      price: 21000,
      type: 'palace',
      rooms: 6,
      guests: 2,
      checkin: '14:00',
      checkout: '19:00',
      features: [
        'dishwasher',
        'parking',
        'wifi',
        'elevator',
        'conditioner',
        'washer',
      ],
      description:
        'Комната в трёхкомнатной квартире, подойдёт молодым путешественникам.',
    },
    location: {
      lat: 35.69190345473966,
      lng: 139.75767176664849,
    },
  },
  {
    author: {
      avatar: 'img/avatars/user05.png',
    },
    offer: {
      title: 'Небольшая бюджетная комната для студентов',
      address: '102-0081 Tōkyō-to, Chiyoda-ku, Yonbanchō, 5−6',
      price: 34000,
      type: 'flat',
      rooms: 1,
      guests: 7,
      checkin: '0:00',
      checkout: '13:00',
      features: ['conditioner'],
      description:
        'Один из лучших хостелов для душевного общения. Ужинаем вместе и играем в «Мафию» по вечерам, вкусно готовим. Ежедневная уборка, бесплатный Wi-Fi, чистое постельное белье.',
    },
    location: {
      lat: 35.690074580784454,
      lng: 139.76785012326965,
    },
  },
  {
    author: {
      avatar: 'img/avatars/user10.png',
    },
    offer: {
      title: 'Маленькая квартирка рядом с парком',
      address: 'Chiyoda-ku, Tōkyō-to 102-0091',
      price: 9000,
      type: 'house',
      rooms: 5,
      guests: 7,
      checkin: '7:00',
      checkout: '4:00',
      features: ['wifi', 'elevator', 'washer', 'parking', 'dishwasher'],
      description:
        'Один из лучших хостелов для душевного общения. Ужинаем вместе и играем в «Мафию» по вечерам, вкусно готовим. Ежедневная уборка, бесплатный Wi-Fi, чистое постельное белье.',
      photos: [
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/andrea-davis-7Wg_9Dq17_U.jpg',
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/andrea-davis-8xT51zPdsjY.jpg',
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/andrea-davis-nbI8gqbBaHo.jpg',
      ],
    },
    location: {
      lat: 35.675466680840785,
      lng: 139.72985567774185,
    },
  },
  {
    author: {
      avatar: 'img/avatars/default.png',
    },
    offer: {
      title: 'Квартира студия в престижном районе',
      address: '102-0094 Tōkyō-to, Chiyoda-ku, Kioichō, 3',
      price: 86000,
      type: 'hotel',
      rooms: 8,
      guests: 4,
      checkin: '6:00',
      checkout: '0:00',
      features: ['conditioner', 'elevator', 'wifi'],
      description:
        'Замечательный дворец в старинном центре города. Только для тех кто может себе позволить дворец. Лакеев и прочих жокеев просим не беспокоить.',
    },
    location: {
      lat: 35.65602203281235,
      lng: 139.73939578889403,
    },
  },
  {
    author: {
      avatar: 'img/avatars/user08.png',
    },
    offer: {
      title: 'Императорский дворец в центре Токио',
      address: '105-0016 Tōkyō-to, Minato-ku',
      price: 99000,
      type: 'bungalow',
      rooms: 3,
      guests: 2,
      checkin: '18:00',
      checkout: '21:00',
      description: 'Хейтеров просьба не беспокоить.',
      photos: [
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/greg-rosenke-HHgnQFBVs6o.jpg',
      ],
    },
    location: {
      lat: 35.67329667224152,
      lng: 139.78887174384909,
    },
  },
  {
    author: {
      avatar: 'img/avatars/user07.png',
    },
    offer: {
      title: 'Милейший чердачок',
      address: '105-0003 Tōkyō-to, Minato-ku, Nishishinbashi, 2 Chome−3',
      price: 60000,
      type: 'flat',
      rooms: 4,
      guests: 6,
      checkin: '7:00',
      checkout: '13:00',
      features: ['wifi', 'conditioner', 'elevator', 'washer', 'dishwasher'],
      description:
        'Великолепная лавочка прямо в центре парка. Подходит для всех кто любит спать на свежем воздухе.',
      photos: [
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/scott-webb-1ddol8rgUH8.jpg',
      ],
    },
    location: {
      lat: 35.659669063340296,
      lng: 139.71559728110677,
    },
  },
  {
    author: {
      avatar: 'img/avatars/user02.png',
    },
    offer: {
      title: 'Загородный дом для спокойного отдыха',
      address: '1-1 Chiyoda, Chiyoda-ku, Tōkyō-to 100-8111',
      price: 99000,
      type: 'palace',
      rooms: 9,
      guests: 10,
      checkin: '16:00',
      checkout: '11:00',
      features: ['washer'],
      description:
        'Квартира на первом этаже. Соседи тихие. Для всех, кто терпеть не может шума и суеты.',
      photos: [
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/andrea-davis-7Wg_9Dq17_U.jpg',
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/andrea-davis-8xT51zPdsjY.jpg',
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/andrea-davis-nbI8gqbBaHo.jpg',
      ],
    },
    location: {
      lat: 35.673665230160076,
      lng: 139.71521647366498,
    },
  },
  {
    author: {
      avatar: 'img/avatars/user03.png',
    },
    offer: {
      title: 'Маленькая квартирка рядом с парком',
      address: '105-0003 Tōkyō-to, Minato-ku, Nishishinbashi, 2 Chome−3',
      price: 47000,
      type: 'hotel',
      rooms: 4,
      guests: 6,
      checkin: '17:00',
      checkout: '5:00',
      features: [
        'wifi',
        'parking',
        'washer',
        'conditioner',
        'elevator',
        'dishwasher',
      ],
      photos: [
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/gabriel-beaudry-WuQME0I_oZA.jpg',
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/gracia-dharma-qTlbO6mkQH0.jpg',
      ],
    },
    location: {
      lat: 35.65693331669119,
      lng: 139.76054560044335,
    },
  },
  {
    author: {
      avatar: 'img/avatars/user11.png',
    },
    offer: {
      title: 'Милое гнездышко для фанатов Анимэ',
      address: '102-0094 Tōkyō-to, Chiyoda-ku, Kioichō, 3',
      price: 47000,
      type: 'flat',
      rooms: 9,
      guests: 5,
      checkin: '10:00',
      checkout: '17:00',
      features: ['elevator', 'wifi', 'parking', 'washer', 'conditioner'],
      description:
        'Квартира на первом этаже. Соседи тихие. Для всех, кто терпеть не может шума и суеты.',
    },
    location: {
      lat: 35.687361222423604,
      lng: 139.70950450119528,
    },
  },
  {
    author: {
      avatar: 'img/avatars/user03.png',
    },
    offer: {
      title: 'Уютное гнездышко для молодоженов',
      address: 'Chiyoda-ku, Tōkyō-to 102-0082',
      price: 21000,
      type: 'bungalow',
      rooms: 9,
      guests: 8,
      checkin: '5:00',
      checkout: '22:00',
      description: 'Хейтеров просьба не беспокоить.',
    },
    location: {
      lat: 35.662639054547974,
      lng: 139.7321581123119,
    },
  },
  {
    author: {
      avatar: 'img/avatars/user03.png',
    },
    offer: {
      title: 'Небольшая бюджетная комната для студентов',
      address: '105-0016 Tōkyō-to, Chiyoda-ku, 14-9',
      price: 5000,
      type: 'flat',
      rooms: 3,
      guests: 2,
      checkin: '9:00',
      checkout: '20:00',
      features: [
        'parking',
        'dishwasher',
        'conditioner',
        'elevator',
        'wifi',
        'washer',
      ],
      photos: [
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/scott-webb-1ddol8rgUH8.jpg',
      ],
    },
    location: {
      lat: 35.658306866740936,
      lng: 139.754560738098,
    },
  },
  {
    author: {
      avatar: 'img/avatars/user04.png',
    },
    offer: {
      title: 'Императорский дворец в центре Токио',
      address: 'Chiyoda-ku, Tōkyō-to 102-0082',
      price: 97000,
      type: 'flat',
      rooms: 7,
      guests: 7,
      checkin: '7:00',
      checkout: '9:00',
      features: ['washer'],
      description:
        'Великолепная лавочка прямо в центре парка. Подходит для всех кто любит спать на свежем воздухе.',
      photos: [
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/greg-rosenke-HHgnQFBVs6o.jpg',
      ],
    },
    location: {
      lat: 35.677258887423726,
      lng: 139.757697686358,
    },
  },
  {
    author: {
      avatar: 'img/avatars/user04.png',
    },
    offer: {
      title: 'Загородный дом для спокойного отдыха',
      address: 'Chiyoda-ku, Tōkyō-to 102-0091',
      price: 7000,
      type: 'bungalow',
      rooms: 5,
      guests: 7,
      checkin: '8:00',
      checkout: '13:00',
      description: 'Хейтеров просьба не беспокоить.',
      photos: [
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/scott-webb-1ddol8rgUH8.jpg',
      ],
    },
    location: {
      lat: 35.659930480634166,
      lng: 139.78955119922574,
    },
  },
];
export default offers;
