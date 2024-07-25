const productos = [
  // *GAMER
  // ID 1
  {
    "id": 1,
    "nombre": "DELL VOSTRO 14 3400 – i5-1135G7 – SSD 256 GB + HDD 1TB – 32 GB RAM – 14″ HD – MX330",
    "precio_base": 1170428,
    "descripcion": 'Nibh montes orci fames aliquet quis sed sollicitudin nascetur aptent dictum, tempor malesuada eget est turpis dis pulvinar duis velit, cras vel lacus rhoncus class pharetra porttitor eros vehicula.',
    "stock": 45,
    "categoria": "Gamer",
    "imagen": "/public/catalogo/ID_1.jpg",
    "alt__img": "ID_x",
    "almacenamiento": [
      {
        "opcion": "256GB",
        "ajuste_precio": 0
      },
      {
        "opcion": "1TB",
        "ajuste_precio": 20
      }
    ],
    "ram": [
      {
        "opcion": "32GB",
        "ajuste_precio": 0
      },
      {
        "opcion": "64GB",
        "ajuste_precio": 20
      }
    ]
  },
  // ID 2
  {
    "id": 2,
    "nombre": "LENOVO IDEAPAD GAMING 3 15ACH6 – RYZEN 5 5500H – SSD 512 GB – 16 GB RAM – 15.6″ FHD IPS 144hz – RTX 2050",
    "precio_base": 1224000,
    "descripcion": 'Nibh montes orci fames aliquet quis sed sollicitudin nascetur aptent dictum, tempor malesuada eget est turpis dis pulvinar duis velit, cras vel lacus rhoncus class pharetra porttitor eros vehicula.',
    "stock": 23,
    "categoria": "Gamer",
    "imagen": '/public/catalogo/ID_2.jpg',
    "alt__img": "ID_x",
    "almacenamiento": [
      {
        "opcion": "512GB",
        "ajuste_precio": 0
      },
      {
        "opcion": "1TB",
        "ajuste_precio": 20
      }
    ],
    "ram": [
      {
        "opcion": "16GB",
        "ajuste_precio": 0
      },
      {
        "opcion": "32GB",
        "ajuste_precio": 10
      },
      {
        "opcion": "64GB",
        "ajuste_precio": 15
      }
    ]
  },
  // ID 3
  {
    "id": 3,
    "nombre": "HP VICTUS 15-FB1013DX – RYZEN 5 7535HS – SSD 512 GB – 16 GB RAM DDR5 – 15.6″ FHD IPS – RTX 2050",
    "precio_base": 1280970,
    "descripcion": 'Nibh montes orci fames aliquet quis sed sollicitudin nascetur aptent dictum, tempor malesuada eget est turpis dis pulvinar duis velit, cras vel lacus rhoncus class pharetra porttitor eros vehicula.',
    "stock": 19,
    "categoria": "Gamer",
    "imagen": '/public/catalogo/ID_3.jpg',
    "alt__img": "ID_x",
    "almacenamiento": [
      {
        "opcion": "512GB",
        "ajuste_precio": 0
      },
      {
        "opcion": "1TB",
        "ajuste_precio": 10
      },
      {
        "opcion": "2TB",
        "ajuste_precio": 15
      }
    ],
    "ram": [
      {
        "opcion": "16GB",
        "ajuste_precio": 0
      },
      {
        "opcion": "32GB",
        "ajuste_precio": 15
      },
      {
        "opcion": "64GB",
        "ajuste_precio": 20
      }
    ]
  },
  // ID 4
  {
    "id": 4,
    "nombre": "MSI GF63 THIN 12UCX – i5-12450H – SSD 512 GB – 16 GB RAM – 15.6″ FHD IPS 144hz – RTX 2050",
    "precio_base": 1310904,
    "descripcion": 'Nibh montes orci fames aliquet quis sed sollicitudin nascetur aptent dictum, tempor malesuada eget est turpis dis pulvinar duis velit, cras vel lacus rhoncus class pharetra porttitor eros vehicula.',
    "stock": 43,
    "categoria": "Gamer",
    "imagen": '/public/catalogo/ID_4.jpg',
    "alt__img": "ID_x",
    "almacenamiento": [
      {
        "opcion": "512GB",
        "ajuste_precio": 0
      },
      {
        "opcion": "1TB",
        "ajuste_precio": 20
      }
    ],
    "ram": [
      {
        "opcion": "16GB",
        "ajuste_precio": 0
      },
      {
        "opcion": "32GB",
        "ajuste_precio": 10
      },
      {
        "opcion": "64GB",
        "ajuste_precio": 15
      }
    ]
  },
  // *EMPRESARIAL
  // ID 5
  {
    "id": 5,
    "nombre": "HP PAVILION 15-EH2085CL – RYZEN 7 5825U – SSD 512 GB – 16 GB RAM – 15.6″ FHD IPS",
    "precio_base": 1408880,
    "descripcion": 'Nibh montes orci fames aliquet quis sed sollicitudin nascetur aptent dictum, tempor malesuada eget est turpis dis pulvinar duis velit, cras vel lacus rhoncus class pharetra porttitor eros vehicula.',
    "stock": 39,
    "categoria": "Empresarial",
    "imagen": '/public/catalogo/ID_5.jpg',
    "alt__img": "ID_x",
    "almacenamiento": [
      {
        "opcion": "512GB",
        "ajuste_precio": 0
      },
      {
        "opcion": "1TB",
        "ajuste_precio": 20
      }
    ],
    "ram": [
      {
        "opcion": "16GB",
        "ajuste_precio": 0
      },
      {
        "opcion": "32GB",
        "ajuste_precio": 10
      },
    ]
  },
  // ID 6
  {
    "id": 6,
    "nombre": "HP 15-FC0040CA – RYZEN 7 7730 – SSD 1TB – 32 GB RAM – 15.6″ FHD",
    "precio_base": 1475971,
    "descripcion": 'Nibh montes orci fames aliquet quis sed sollicitudin nascetur aptent dictum, tempor malesuada eget est turpis dis pulvinar duis velit, cras vel lacus rhoncus class pharetra porttitor eros vehicula.',
    "stock": 14,
    "categoria": "Empresarial",
    "imagen": '/public/catalogo/ID_6.jpg',
    "alt__img": "ID_x",
    "almacenamiento": [
      {
        "opcion": "1TB",
        "ajuste_precio": 0
      }
    ],
    "ram": [
      {
        "opcion": "32GB",
        "ajuste_precio": 0
      },
      {
        "opcion": "64GB",
        "ajuste_precio": 10
      }
    ]
  },
  // ID 7
  {
    "id": 7,
    "nombre": "ASUS VIVOBOOK M1405Y – RYZEN 7 7730U – SSD 1TB – 40 GB RAM – 14″ WUXGA",
    "precio_base": 1300000,
    "descripcion": 'Nibh montes orci fames aliquet quis sed sollicitudin nascetur aptent dictum, tempor malesuada eget est turpis dis pulvinar duis velit, cras vel lacus rhoncus class pharetra porttitor eros vehicula.',
    "stock": 13,
    "categoria": "Empresarial",
    "imagen": '/public/catalogo/ID_7.jpg',
    "alt__img": "ID_x",
    "almacenamiento": [
      {
        "opcion": "1TB",
        "ajuste_precio": 0
      }
    ],
    "ram": [
      {
        "opcion": "40GB",
        "ajuste_precio": 0
      }
    ]
  },
  // ID 8
  {
    "id": 8,
    "nombre": "LENOVO THINKPAD X13 GEN 2 – i5-1135G7 – SSD 256 GB – 8 GB RAM – 13.3″ WUXGA IPS",
    "precio_base": 966810,
    "descripcion": 'Nibh montes orci fames aliquet quis sed sollicitudin nascetur aptent dictum, tempor malesuada eget est turpis dis pulvinar duis velit, cras vel lacus rhoncus class pharetra porttitor eros vehicula.',
    "stock": 96,
    "categoria": "Empresarial",
    "imagen": '/public/catalogo/ID_8.jpg',
    "alt__img": "ID_x",
    "almacenamiento": [
      {
        "opcion": "256GB",
        "ajuste_precio": 0
      },
      {
        "opcion": "512GB",
        "ajuste_precio": 10
      },
      {
        "opcion": "1TB",
        "ajuste_precio": 15
      }
    ],
    "ram": [
      {
        "opcion": "8GB",
        "ajuste_precio": 0
      },
    ]
  },
  // *DISEÑO
  // ID 9
  {
    "id": 9,
    "nombre": "LENOVO V14 G4 AMN – RYZEN 5 7520U – SSD 256 GB – 8 GB RAM DDR5 – 14″ FHD",
    "precio_base": 708900,
    "descripcion": 'Nibh montes orci fames aliquet quis sed sollicitudin nascetur aptent dictum, tempor malesuada eget est turpis dis pulvinar duis velit, cras vel lacus rhoncus class pharetra porttitor eros vehicula.',
    "stock": 70,
    "categoria": "Diseño",
    "imagen": '/public/catalogo/ID_9.jpg',
    "alt__img": "ID_x",
    "almacenamiento": [
      {
        "opcion": "256GB",
        "ajuste_precio": 0
      }
    ],
    "ram": [
      {
        "opcion": "8GB",
        "ajuste_precio": 0
      }
    ]
  },
  // ID 10
  {
    "id": 10,
    "nombre": "HP 15-DY2795WM – i5-1135G7 – SSD 512 GB – 32 GB RAM – 15.6″ FHD",
    "precio_base": 1140523,
    "descripcion": 'Nibh montes orci fames aliquet quis sed sollicitudin nascetur aptent dictum, tempor malesuada eget est turpis dis pulvinar duis velit, cras vel lacus rhoncus class pharetra porttitor eros vehicula.',
    "stock": 11,
    "categoria": "Diseño",
    "imagen": '/public/catalogo/ID_10.jpg',
    "alt__img": "ID_x",
    "almacenamiento": [
      {
        "opcion": "512GB",
        "ajuste_precio": 0
      },
      {
        "opcion": "1TB",
        "ajuste_precio": 10
      }
    ],
    "ram": [
      {
        "opcion": "32GB",
        "ajuste_precio": 0
      },
      {
        "opcion": "64GB",
        "ajuste_precio": 10
      }
    ]
  },
  // ID 11
  {
    "id": 11,
    "nombre": "LENOVO IDEAPAD 1 15IAU7 – i5-1235U – SSD 512 GB – 16 GB RAM – 15.6″ FHD",
    "precio_base": 918000,
    "descripcion": 'Nibh montes orci fames aliquet quis sed sollicitudin nascetur aptent dictum, tempor malesuada eget est turpis dis pulvinar duis velit, cras vel lacus rhoncus class pharetra porttitor eros vehicula.',
    "stock": 91,
    "categoria": "Diseño",
    "imagen": '/public/catalogo/ID_11.jpg',
    "alt__img": "ID_x",
    "almacenamiento": [
      {
        "opcion": "512GB",
        "ajuste_precio": 0
      },
      {
        "opcion": "1TB",
        "ajuste_precio": 20
      }
    ],
    "ram": [
      {
        "opcion": "16GB",
        "ajuste_precio": 0
      },
      {
        "opcion": "24GB",
        "ajuste_precio": 0
      },
    ]
  },
  // ID 12
  {
    "id": 12,
    "nombre": "LENOVO THINKPAD L13 GEN 2 – i5-1135G7 – SSD 512 GB – 8 GB RAM – 13.3″ FHD IPS",
    "precio_base": 1020000,
    "descripcion": 'Nibh montes orci fames aliquet quis sed sollicitudin nascetur aptent dictum, tempor malesuada eget est turpis dis pulvinar duis velit, cras vel lacus rhoncus class pharetra porttitor eros vehicula.',
    "stock": 10,
    "categoria": "Diseño",
    "imagen": '/public/catalogo/ID_12.jpg',
    "alt__img": "ID_x",
    "almacenamiento": [
      {
        "opcion": "512GB",
        "ajuste_precio": 0
      },
      {
        "opcion": "1TB",
        "ajuste_precio": 10
      }
    ],
    "ram": [
      {
        "opcion": "8GB",
        "ajuste_precio": 0
      },
    ]
  },
  // *HOGAR
  // ID 13
  {
    "id": 13,
    "nombre": "GATEWAY – RYZEN 3 3250U – SSD 128 GB – 4 GB RAM – 15.6″ FHD",
    "precio_base": 101199,
    "descripcion": 'Nibh montes orci fames aliquet quis sed sollicitudin nascetur aptent dictum, tempor malesuada eget est turpis dis pulvinar duis velit, cras vel lacus rhoncus class pharetra porttitor eros vehicula.',
    "stock": 10,
    "categoria": "Hogar",
    "imagen": '/public/catalogo/ID_13.jpg',
    "alt__img": "ID_x",
    "almacenamiento": [
      {
        "opcion": "128GB",
        "ajuste_precio": 0
      }
    ],
    "ram": [
      {
        "opcion": "4GB",
        "ajuste_precio": 0
      }
    ]
  },
  // ID 14
  {
    "id": 14,
    "nombre": "HP 15-FC0018NIA – RYZEN 3 7320U – SSD 256 GB – 4 GB RAM DDR5 – 15.6″ FHD",
    "precio_base": 568712,
    "descripcion": 'Nibh montes orci fames aliquet quis sed sollicitudin nascetur aptent dictum, tempor malesuada eget est turpis dis pulvinar duis velit, cras vel lacus rhoncus class pharetra porttitor eros vehicula.',
    "stock": 56,
    "categoria": "Hogar",
    "imagen": '/public/catalogo/ID_14.jpg',
    "alt__img": "ID_x",
    "almacenamiento": [
      {
        "opcion": "256GB",
        "ajuste_precio": 0
      },
      {
        "opcion": "512GB",
        "ajuste_precio": 10
      }
    ],
    "ram": [
      {
        "opcion": "4GB",
        "ajuste_precio": 0
      }
    ]
  },
  // ID 15
  {
    "id": 15,
    "nombre": "DELL INSPIRON 15 3511 – i3-1115G4 – SSD 256 GB – 8 GB RAM – 15.6″ FHD",
    "precio_base": 724829,
    "descripcion": 'Nibh montes orci fames aliquet quis sed sollicitudin nascetur aptent dictum, tempor malesuada eget est turpis dis pulvinar duis velit, cras vel lacus rhoncus class pharetra porttitor eros vehicula.',
    "stock": 72,
    "categoria": "Hogar",
    "imagen": '/public/catalogo/ID_15.jpg',
    "alt__img": "ID_x",
    "almacenamiento": [
      {
        "opcion": "256GB",
        "ajuste_precio": 0
      },
      {
        "opcion": "512GB",
        "ajuste_precio": 10
      },
      {
        "opcion": "1TB",
        "ajuste_precio": 15
      }
    ],
    "ram": [
      {
        "opcion": "8GB",
        "ajuste_precio": 0
      },
      {
        "opcion": "16GB",
        "ajuste_precio": 10
      },
    ]
  },
  // ID 16
  {
    "id": 16,
    "nombre": "ASUS X1400E – i3-1115G4 – SSD 256 GB – 12 GB RAM – 14″ HD",
    "precio_base": 740462,
    "descripcion": 'Nibh montes orci fames aliquet quis sed sollicitudin nascetur aptent dictum, tempor malesuada eget est turpis dis pulvinar duis velit, cras vel lacus rhoncus class pharetra porttitor eros vehicula.',
    "stock": 74,
    "categoria": "Hogar",
    "imagen": '/public/catalogo/ID_16.jpg',
    "alt__img": "ID_x",
    "almacenamiento": [
      {
        "opcion": "256GB",
        "ajuste_precio": 0
      },
      {
        "opcion": "512GB",
        "ajuste_precio": 10
      },
      {
        "opcion": "1TB",
        "ajuste_precio": 15
      }
    ],
    "ram": [
      {
        "opcion": "12GB",
        "ajuste_precio": 0
      },
      {
        "opcion": "16GB",
        "ajuste_precio": 10
      },
    ]
  },
]


export default productos;