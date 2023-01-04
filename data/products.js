const products = [
  {
    "name": "Alberto Presto Pronta",
    "description": "Figura Impresa 3d 15 cm Ideal como regalo y decoración de oficina/mesa! -Impresa en 3D PLA plástico ecológico -Medidas: 15 cm de altura -Excelente figura con detalles en alta calidad -Consultar por mas colores, medidas y modelos!.",
    "price": 1890,
    "image": "https://http2.mlstatic.com/D_NQ_NP_2X_944492-MLA46557573816_062021-F.webp",
    "stock": 10,
    "category": "figure"
  },
  {
    "name": "Mate de Copa Mundial",
    "description": "En esta oportunidad estamos presentando un mate de Copa del Mundo. Impreso en PLA, pintado y laqueado. Medida Total: 27 DE ALTO POR 11 DE DIAMETRO Mate: 9cm DE ALTO POR 11cm DE DIAMETROInterior de polímero apto para consumo Bombilla de metal.",
    "price": 3000,
    "image": "https://http2.mlstatic.com/D_NQ_NP_2X_957171-MLA52972119431_122022-F.webp",
    "stock": 50,
    "category": "Mate cup"
  },
  {
    "name": "Porta celular",
    "description": "Con este portacelular podras cargar tu equipo donde desees y verlo ergonomicamente donde estes.",
    "price": 1320,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS45A76MbYWcPgusVsu-CZ9kkVfPeR80ThRFg&usqp=CAU",
    "stock": 5,
    "category": "mobile"
  },
  {
    "name": "Vestido Rojo",
    "description": "El vestido utiliza la tecnología textil cinemática de Nervous System, un sistema a través del cual las prendas son impresas en 3D de un material flexible como una sola pieza plegada. Se compone de 1600 piezas. Porque somos una empresa de Tecnologia a satisfacer las necesidades de clientes exigentes.",
    "price": 21000,
    "image": "https://n-e-r-v-o-u-s.com/projects/i.php?/001/040/Petals-Dress-Low-192,medium_large.2x.1456767582.jpg",
    "stock": 8,
    "category": "clothes"
  },
  {
    "name": "Vestido Negro",
    "description": "Compuesto por hexágonos de poliuretano que se adapta perfectamente a cualquier figura.",
    "price": 22500,
    "image": "https://img.blogs.es/anexom/wp-content/uploads/2017/08/Moda-3D-780x515.jpg",
    "stock": 3,
    "category": "clothes"
  },
  {
    "name": "Leonel Messi",
    "description": "Figura Impresa 3d 15 cm Ideal como regalo y decoración de tu espacio de trabajo, gano una mundial siendo capitan representando argentina y de los premios del munidal individuales gano el balon de oro (el mejor jugador del mundial) en el Mundial FIFA World Cup Qatar 2022.",
    "price": 8700,
    "image": "https://www.santafecultura.gob.ar/wp-content/uploads/sites/53/2022/05/DesafioMessi-recortada.jpg",
    "stock": 1,
    "category": "world cup"
  },
  {
    "name": "Kylian Mbappe",
    "description": "Figura Impresa 3d 15 cm Ideal como regalo y decoración de tu espacio, en el Mundial FIFA World Cup Qatar 2022 Mbappe gano en los premios individuales el botin de oro (el mejor goleador) y quedo en el segundo puesto del Mundial.",
    "price": 4000,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyIMSw2h03zYUY4NhHb9v7tDvnXJBD1zWHDGSOsl6Adz6QRkmbEsYc_y8SfUCgsF9oC3w&usqp=CAU",
    "stock": 1,
    "category": "world cup"
  },
  {
    "name": "Emiliano Martinez",
    "description": "Figura Impresa 3d 15 cm Ideal como regalo y decoración de tu espacio y gano el Mundial FIFA World Cup Qatar 2022 siendo arquero titular y de los premios individuales del Mundial gano el guante de oro (el mejor arquero).",
    "price": 6000,
    "image": "https://files.cults3d.com/uploaders/19099315/illustration-file/c51898a2-0736-4109-8f49-33ce6ccb22be/1.png",
    "stock": 1,
    "category": "world cup"
  },
  {
    "name": "La Copa del Mundo",
    "description": "Figura Impresa 3d 15 cm Ideal como regalo y decoración de tu espacio, la Copa del Mundial FIFA World Cup Qatar que la gano Argentina.",
    "price": 7500,
    "image": "https://http2.mlstatic.com/D_NQ_NP_2X_761599-MLA49592312419_042022-F.webp",
    "stock": 1,
    "category": "world cup"
  },
  {
    "name": "Botin de Oro del Mundial",
    "description": "Figura Impresa 3d 15 cm Ideal como regalo y decoración de tu espacio, el Botin de Oro del Mundial FIFA World Cup Qatar que lo gano Kylian Mbappe en los premios individuales.",
    "price": 6500,
    "image": "https://files.cults3d.com/uploaders/13345759/illustration-file/943d6de4-5591-4809-9bf7-d7c7715bcbd2/GOLDEN.jpg",
    "stock": 1,
    "category": "world cup"
  },
  {
    "name": "Guante de Oro del Mundial",
    "description": "Figura Impresa 3d 15 cm Ideal como regalo y decoración de tu espacio, el Guante de Oro del Mundial FIFA World Cup Qatar que lo gano Emiliano Martinez en los premios individuales.",
    "price": 6000,
    "image": "https://m.media-amazon.com/images/I/41h0bqEBQML._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
    "stock": 1,
    "category": "world cup"
  },
  {
    "name": "Balon de Plata del mundial",
    "description": "Figura Impresa 3d 15 cm Ideal como regalo y decoración de tu espacio, el Balon de Plata del Mundial FIFA World Cup Qatar que lo gano Enzo Fernandez en los premios individuales.",
    "price": 5500,
    "image": "https://static4.depositphotos.com/1002395/270/i/600/depositphotos_2700331-stock-photo-silver-soccer-ball-trophy-on.jpg",
    "stock": 1,
    "category": "world cup"
  },
  {
    "name": "Balon de Oro del mundial",
    "description": "Figura Impresa 3d 15 cm Ideal como regalo y decoración de tu espacio, el Balon de Oro del Mundial FIFA World Cup Qatar que lo gano Leonel Messi en los premios individuales.",
    "price": 7300,
    "image": "https://img.planetafobal.com/2022/11/adidas-qatar-2022-premios-individuales-balon-de-oro-fb.jpg",
    "stock": 1,
    "category": "world cup"
  },
  {

    "name": "Trunks - Dragon Ball Z",
    "description": "El mejor de Son Goten, mestizo entre humano terricola y Saiyayin hijo de Bulma y Vegeta.",
    "price": 6300,
    "image": "https://files.cults3d.com/uploaders/14056543/illustration-file/1d09412e-dbd3-4db9-8d8e-f6aa0ab298db/trunks02.jpg",
    "stock": 1,
    "category": "Anime"
  },
  {
    "name": "Goku baby - Dragon Ball Z",
    "description": "Goku cuando era bebe, para los fanaticos de Dragon Ball Z que desean tener todo la coleccion este elemento no puede faltar.",
    "price": 7300,
    "image": "https://files.cults3d.com/uploaders/14300305/illustration-file/fd749146-5bcf-43aa-a323-c674c2f44b3d/GB_1.png",
    "stock": 1,
    "category": "anime"
  },
  {
    "name": "Vegeta - Dragon Ball Z",
    "description": "- Material PLA. - 17 cm de altura. - Figura de exposición sin articulaciones. Pintada a mano y barnizada para lograr una máxima protección de la pintura.",
    "price": 7300,
    "image": "https://http2.mlstatic.com/D_NQ_NP_2X_937339-MLA49170115544_022022-F.webp",
    "stock": 1,
    "category": "anime"
  }

]

