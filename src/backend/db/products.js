import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Mocha Cupcake",
    price: 180,
    rating: "4.5",
    categoryName: "Cakes",
    imgURL: "https://source.unsplash.com/B6kBrzkl3YQ",
  },
  {
    _id: uuid(),
    title: "Chocochip Cookies",
    price: 400,
    rating: "4.5",
    categoryName: "Cookies",
    imgURL: "https://source.unsplash.com/04yMqTmUeHQ",
  },
  {
    _id: uuid(),
    title: "Glazed Doughnuts",
    price: 79,
    rating: "4.5",
    categoryName: "Doughnuts",
    imgURL: "https://source.unsplash.com/DmK5aEw6Tmc",
    description:
      "The original melt-in-your-mouth donut, dunked in a sugary glaze.",
  },
  {
    _id: uuid(),
    title: "White Choco & Strawberry Eclair",
    price: 99,
    rating: "4.5",
    categoryName: "Doughnuts",
    imgURL: "https://source.unsplash.com/odPZS4jJj8I",
    description:
      "Two flavours one donut , make up party eclairs to surprise you",
  },
  {
    _id: uuid(),
    title: "Pear Almond Tart",
    price: 340,
    rating: "4.1",
    categoryName: "Cakes",
    imgURL: "https://source.unsplash.com/aX_ljOOyWJY",
    description:
      "Whole golden pears mixed with creamy almond custard on a vanilla cookie crust.",
  },
  {
    _id: uuid(),
    title: "Rainbow Crunch",
    price: 99,
    rating: "4.4",
    categoryName: "Doughnuts",
    imgURL: "https://source.unsplash.com/ww8hljWABIE",
    description:
      "Ring donut topped with strawberry compound , oreo cookie , white compound & choco coated crispies",
  },
  {
    _id: uuid(),
    title: "Blueberry Cream Cake",
    price: 270,
    rating: "4.0",
    categoryName: "Cakes",
    imgURL: "https://source.unsplash.com/aq1HBABkd_Y",
    description:
      "Moist blueberry cake layered with blueberry cream & topped with sweet and bites of blueberry fruit filling.",
  },
  {
    _id: uuid(),
    title: "Oatmeal Raisin",
    price: 160,
    rating: "3.9",
    categoryName: "Cookies",
    imgURL: "https://source.unsplash.com/5cVa82Bx6gc",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio",
  },
  {
    _id: uuid(),
    title: "Choco-Crisp",
    price: 99,
    rating: "4.2",
    categoryName: "Doughnuts",
    imgURL: "https://source.unsplash.com/1qubXlkKnSM",
    description:
      "Made with Munch: Shell donut filled with dark chocolate , coated with delicious chocolate compound",
  },
  {
    _id: uuid(),
    title: "Garlic Loaf",
    price: 55,
    rating: "4.0",
    categoryName: "Breads",
    imgURL: "https://source.unsplash.com/BRMvT4sw-4c",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio",
  },
  {
    _id: uuid(),
    title: "Almond Fingers",
    price: 185,
    rating: "3.7",
    categoryName: "Cookies",
    imgURL: "https://source.unsplash.com/2c6_d8svbkY",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio",
  },
  {
    _id: uuid(),
    title: "Premium Butter",
    price: 80,
    rating: "4.1",
    categoryName: "Breads",
    imgURL: "https://source.unsplash.com/yLbmZLbNILg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio",
  },
  {
    _id: uuid(),
    title: "Jelly Filled",
    price: 69,
    rating: "3.9",
    categoryName: "Doughnuts",
    imgURL: "https://source.unsplash.com/wwRCtXViSeI",
    description: "Rich, dreamy choco on top and silky, molten choco inside.",
  },
  {
    _id: uuid(),
    title: "Rainbow Pop",
    price: 89,
    rating: "4.3",
    categoryName: "Doughnuts",
    imgURL: "https://source.unsplash.com/_qS0EQGn6qg",
    description: "Ring donut topped with vibrant multi coloured sprinkles",
  },
  {
    _id: uuid(),
    title: "Fresh Strawberry Cake",
    price: 300,
    rating: "4.3",
    categoryName: "Cakes",
    imgURL: "https://source.unsplash.com/hXqbSgOPjSI",
    description:
      "Moist vanilla cake layered with fresh strawberries, house made whipped cream & decorated with slivered almonds. ",
  },
  {
    _id: uuid(),
    title: "Crispy Bite",
    price: 99,
    rating: "4.2",
    categoryName: "Doughnuts",
    imgURL: "https://source.unsplash.com/ZmH0g1ievTg",
    description: "Bite into the crispiness, with delicious sweetness",
  },
  {
    _id: uuid(),
    title: "Choco Pop",
    price: 89,
    rating: "3.8",
    categoryName: "Doughnuts",
    imgURL: "https://source.unsplash.com/3MRjt70KhEk",
    description:
      "Ring donut coated with dark compound chocolate and coated with colourful strands",
  },
  {
    _id: uuid(),
    title: "Black Forest Cake",
    price: 240,
    rating: "4.4",
    categoryName: "Cakes",
    imgURL: "https://source.unsplash.com/LcfX-wo4RkY",
    description:
      "Dark chocolate cake layered with house made whipped cream, cherries & cherry jam. Topped with whipped cream, chocolate shavings & maraschinio cherries.",
  },
  {
    _id: uuid(),
    title: "Cookies Peanut Butter",
    price: 175,
    rating: "4.2",
    categoryName: "Cookies",
    imgURL: "https://source.unsplash.com/Kx3_xGEvBQU",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio",
  },
  {
    _id: uuid(),
    title: "Dark Choco & Strawberry",
    price: 99,
    rating: "4.5",
    categoryName: "Doughnuts",
    imgURL: "https://source.unsplash.com/6SMF42-JTAc",
    description:
      "Two flavours one donut , make up party eclairs to surprise you",
  },
  {
    _id: uuid(),
    title: "Death By Choco",
    price: 89,
    rating: "4.5",
    categoryName: "Doughnuts",
    imgURL: "https://source.unsplash.com/CgF1eeY99_I",
    description: "Rich, dreamy choco on top and silky, molten choco inside.",
  },
  {
    _id: uuid(),
    title: "Mandarin Orange Cake",
    price: 290,
    rating: "4.0",
    categoryName: "Cakes",
    imgURL: "https://source.unsplash.com/YrfFcrLmA8k",
    description:
      "Vanilla cake with layers of mandarin orange cream topped with house made whipped cream & mandarin oranges. ",
  },
  {
    _id: uuid(),
    title: "Cookies Pure Butter",
    price: 175,
    rating: "4.2",
    categoryName: "Cookies",
    imgURL: "https://source.unsplash.com/8rgwgZ76oFc",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio",
  },
  {
    _id: uuid(),
    title: "Fresh Fruit Tart",
    price: 410,
    rating: "4.4",
    categoryName: "Cakes",
    imgURL: "https://source.unsplash.com/YbVyjucGKXU",
    description:
      "Fresh strawberry, kiwi, mandarin orange & blueberry on vanilla cookie crust filled with house made vanilla cream & an apricot glaze.",
  },
  {
    _id: uuid(),
    title: "Raspberry Cheesecake Tart",
    price: 370,
    rating: "4.2",
    categoryName: "Cakes",
    imgURL: "https://source.unsplash.com/2u12Qy0hEGE",
    description:
      "Vanilla cookie crust filled with a layer of sweet cream cheese, raspberry jam & lattice crust top.",
  },
  {
    _id: uuid(),
    title: "Boston Crème",
    price: 89,
    rating: "3.1",
    categoryName: "Doughnuts",
    imgURL: "https://source.unsplash.com/YfL8dJEcMHk",
    description:
      "A rich boston crème filled donut, covered in delicious choco icing.",
  },
  {
    _id: uuid(),
    title: "Tiramisu",
    price: 450,
    rating: "4.2",
    categoryName: "Cakes",
    imgURL: "https://source.unsplash.com/4El3DUkQs2g",
    description:
      "Dark chocolate cake, layered with coffee cream. Decorated with cocoa nibs, whipped cream and candied espresso beans.",
  },
  {
    _id: uuid(),
    title: "Jeera Cookies",
    price: 125,
    rating: "4.2",
    categoryName: "Cookies",
    imgURL: "https://source.unsplash.com/ZS3OfU40CQU",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio",
  },
  {
    _id: uuid(),
    title: "Cookies 100% Whole Wheat",
    price: 160,
    rating: "4.0",
    categoryName: "Cookies",
    imgURL: "https://source.unsplash.com/SpmxmZmpBvE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio",
  },
  {
    _id: uuid(),
    title: "Cookie Cart Wheel",
    price: 89,
    rating: "3.9",
    categoryName: "Doughnuts",
    imgURL: "https://source.unsplash.com/gEM83KLcAEU",
    description:
      "Crunchy chocolate cookie bits layered over a delicious fresh donut.",
  },
  {
    _id: uuid(),
    title: "Crispy Crunch",
    price: 99,
    rating: "4.0",
    categoryName: "Doughnuts",
    imgURL: "https://source.unsplash.com/dnYUzPBlcmI",
    description:
      "Shell donut frosted with dark compound & topped with choco coated crispies with bavarian filing inside",
  },
  {
    _id: uuid(),
    title: " 100% Whole Wheat",
    price: 57,
    rating: "4.1",
    categoryName: "Breads",
    imgURL: "https://source.unsplash.com/rsWZ-P9FbQ4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio",
  },
  {
    _id: uuid(),
    title: "Chocotella",
    price: 99,
    rating: "4.4",
    categoryName: "Doughnuts",
    imgURL: "https://source.unsplash.com/CgF1eeY99_I",
    description:
      "Fresh shell donut filled with choco hazelnut filling, topped with milk choco coating and dressed with choco crispies.",
  },
  {
    _id: uuid(),
    title: "White Fruit Mousse",
    price: 480,
    rating: "4.3",
    categoryName: "Cakes",
    imgURL: "https://source.unsplash.com/k4vY9_iBVXY",
    description:
      "Vanilla cake with layers of house made whipped cream & mixed fruit.",
  },
  {
    _id: uuid(),
    title: "Dark Chocolate Mousse",
    price: 420,
    rating: "4.5",
    categoryName: "Cakes",
    imgURL: "https://source.unsplash.com/coodx5jF2f0",
    description:
      "Dense chocolate cake, dark chocolate cream topped with whipped cream & chocolate pieces.",
  },
  {
    _id: uuid(),
    title: "Lemon Mousse",
    price: 350,
    rating: "4.2",
    categoryName: "Cakes",
    imgURL: "https://source.unsplash.com/OrkEasJeY74",
    description:
      "Moist vanilla cake layered with lemon cream. Topped with lemon fruit filling & whipped cream.",
  },
  {
    _id: uuid(),
    title: "Double Chocolate Chip",
    price: 170,
    rating: "4.5",
    categoryName: "Cookies",
    imgURL: "https://source.unsplash.com/98Kk8vwPbgs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio",
  },
  {
    _id: uuid(),
    title: "French Heart",
    price: 125,
    rating: "4.4",
    categoryName: "Cookies",
    imgURL: "https://source.unsplash.com/_jsi2i8B9Jw",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio",
  },
  {
    _id: uuid(),
    title: "Choco Berry Bomb",
    price: 99,
    rating: "4.2",
    categoryName: "Doughnuts",
    imgURL: "https://source.unsplash.com/O-AkFwwUE68",
    description:
      "Shell donut coated with dark chocolate, topped with white and pink chocolate compound",
  },
  {
    _id: uuid(),
    title: "Milk Bread",
    price: 50,
    rating: "4.0",
    categoryName: "Breads",
    imgURL: "https://source.unsplash.com/HAf-cOayGiQ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio",
  },
  {
    _id: uuid(),
    title: "Choco Overdose",
    price: 89,
    rating: "4.2",
    categoryName: "Doughnuts",
    imgURL: "https://source.unsplash.com/gqxSUgngBPA",
    description:
      "Shell donut coated with dark chocolate compound and topped with chocolate syrup",
  },
  {
    _id: uuid(),
    title: "Raspberry Cream",
    price: 360,
    rating: "4.4",
    categoryName: "Cakes",
    imgURL: "https://source.unsplash.com/IAYQuCqD00g",
    description:
      "Vanilla cake layered with whipped cream & raspberry. Topped with white chocolate.",
  },
  {
    _id: uuid(),
    title: "Peanut Butter Island",
    price: 99,
    rating: "4.1",
    categoryName: "Doughnuts",
    imgURL: "https://source.unsplash.com/mxDI5CW7yJo",
    description:
      "Shell donut coated with peanut butter , topped with dark chocolate",
  },
  {
    _id: uuid(),
    title: "Very Very Strawberry",
    price: 89,
    rating: "4.3",
    categoryName: "Doughnuts",
    imgURL: "https://source.unsplash.com/CDyLU74k4Bk",
    description:
      "Strawberry Flavored Choco surrounding a delicious strawberry center",
  },
  {
    _id: uuid(),
    title: "Choc-o-Choc",
    price: 99,
    rating: "4.1",
    categoryName: "Doughnuts",
    imgURL: "https://source.unsplash.com/XjyH9_hXEyA",
    description:
      "Made with Bar one: Shell donut filled with dark chocolate , coated with delicious chocolate compound",
  },
  {
    _id: uuid(),
    title: "Chocolate Raspberry Delice",
    price: 390,
    rating: "4.4",
    categoryName: "Cakes",
    imgURL: "https://source.unsplash.com/s7Vh1kg-clM",
    description:
      "Dark chocolate cake with alternating layers of raspberry & vanilla cream. Topped with raspberry fruit filling & fresh raspberry.",
  },
  {
    _id: uuid(),
    title: "Shrewsbury",
    price: 185,
    rating: "4.0",
    categoryName: "Cookies",
    imgURL: "https://source.unsplash.com/5DnXEZ6wH4A",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio",
  },
  {
    _id: uuid(),
    title: "Chocolate Chip",
    price: 170,
    rating: "4.5",
    categoryName: "Cookies",
    imgURL: "https://source.unsplash.com/3jNTCCeC7gI",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio",
  },
  {
    _id: uuid(),
    title: "Whole Wheat Multigrain",
    price: 80,
    rating: "4.3",
    categoryName: "Breads",
    imgURL: "https://source.unsplash.com/RXySkOTi3kk",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio",
  },
  {
    _id: uuid(),
    title: "Coffee Swiss Roll",
    price: 350,
    rating: "4.1",
    categoryName: "Cakes",
    imgURL: "https://source.unsplash.com/nhwTvI1LIFo",
    description:
      "Chocolate cake, coffee cream, chocolate shavings, candied espresso beans & dusted with powdered sugar.",
  },
  {
    _id: uuid(),
    title: "Alive By Choco",
    price: 89,
    rating: "4.0",
    categoryName: "Doughnuts",
    imgURL: "https://source.unsplash.com/XGCzERl2Mu0",
    description:
      "A soft donut covered with choco cookie crumbs and filled with gooey molten choco.",
  },
  {
    _id: uuid(),
    title: "Masala Cookies",
    price: 150,
    rating: "3.7",
    categoryName: "Cookies",
    imgURL: "https://source.unsplash.com/wW1ArQLnmgI",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio",
  },
  {
    _id: uuid(),
    title: "Mango Cream Cake",
    price: 290,
    rating: "4.1",
    categoryName: "Cakes",
    imgURL: "https://source.unsplash.com/qr-lTDgOzQM",
    description:
      "Vanilla cake, layers of mango cream. Topped with diced mango and house made whipped cream.",
  },
  {
    _id: uuid(),
    title: "Gemmy",
    price: 99,
    rating: "4.4",
    categoryName: "Doughnuts",
    imgURL: "https://source.unsplash.com/TyV8uETpfOg",
    description: "Shell donut frosted with milk éclair & topped with lintels",
  },
];
