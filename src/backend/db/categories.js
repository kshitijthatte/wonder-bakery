import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Cakes",
    imgURL: "https://source.unsplash.com/vdx5hPQhXFk",
  },
  {
    _id: uuid(),
    categoryName: "Cookies",
    imgURL: "https://source.unsplash.com/YDvfndOs4IQ",
  },
  {
    _id: uuid(),
    categoryName: "Doughnuts",
    imgURL: "https://source.unsplash.com/qZ6uvJHLHFc",
  },
  {
    _id: uuid(),
    categoryName: "Breads",
    imgURL: "https://source.unsplash.com/zYsB2mezSnA",
  },
];
