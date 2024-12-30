import { BannerModel } from '../models/banner.type';
import { CategoryModel } from '../models/category.type';
import { Product_Card_Model } from '../models/product_card.type';

export const BANNER_ITEMS: BannerModel[] = [
  {
    imageSrc: 'assets/images/banner/Image1.png',
    headingText: 'Classy Sneakers Wear',
    description: 'Step Up Your Style with Classy Sneakers Wear – Where Comfort Meets Elegance!',
    buttonText: 'Shop Now',
    textColor: "#000",
    buttonBackground: '#000000',
    buttonTextColor: '#fff',
    bannerBackgroundColor: '#f0e9dc',
    imageSide: 'right',
  },
  {
    imageSrc: 'assets/images/banner/Image2.png',
    headingText: 'Sports Shoes',
    description: 'Push your limits with ultimate comfort and durability in every stride',
    buttonText: 'Shop Now',
    textColor: "#fff",
    buttonBackground: '#d9d9d9',
    buttonTextColor: '#000',
    bannerBackgroundColor: '#0a0a0a',
    imageSide: 'left',
  },
  {
    imageSrc: 'assets/images/banner/Image3.png',
    headingText: 'Modern Shoes',
    description: 'Experience redefined style and unmatched comfort with every step you take',
    textColor: "#000",
    buttonText: 'Shop Now',
    buttonBackground: '#000',
    buttonTextColor: '#fff',
    bannerBackgroundColor: '#f2eae3',
    imageSide: 'left',
  },
  {
    imageSrc: 'assets/images/banner/Image4.png',
    headingText: 'Jogger Shoes',
    description: 'Stay on track with lightweight shoes designed for your active lifestyle',
    textColor: "#000",
    buttonText: 'Shop Now',
    buttonBackground: '#000',
    buttonTextColor: '#fff',
    bannerBackgroundColor: '#ececec',
    imageSide: 'right',
  },
];


export const CATEGORY_ITEM : CategoryModel[] = [
  {
    categoryName: 'Sneakers',
    categoryDescription: 'Discover the latest sneakers styles and trends',
    categoryImageSrc: 'assets/images/categories/Sneakers.png',
  }
]


export const PRODUCT_CARD_ITEM: Product_Card_Model[] = [
  {
    title: "Jogger Shoes",
    description: "Experience comfort and style with our jogger shoes, designed for both performance and everyday wear. Whether you're running, walking, or just enjoying a casual outing, these shoes offer lightweight cushioning, superior breathability, and flexibility to keep your feet supported and comfortable throughout the day.",
    buttonBackground: "#000",
    buttonTextColor: "#fff",
    buttonText: "Shop Jogger Shoes",
    imgSrc: "assets/images/Jogger_Shoes.jpg",
    cardTextColor: "#ffffff",
    link: "https://example.com/jogger-shoes"
  },
  {
    title: "Basketball Shoes",
    description: "Take control on the court with high-grip basketball shoes, designed to offer exceptional support and cushioning. Built to endure the most demanding moves, these shoes will enhance your speed, stability, and comfort, ensuring that you perform your best in every game.",
    buttonBackground: "#707676",
    buttonTextColor: "#fff",
    buttonText: "Shop Basketball Shoes",
    imgSrc: "assets/images/Basketball_Shoes.jpg",
    cardTextColor: "#ffffff",
    link: "https://example.com/basketball-shoes"
  }
];
