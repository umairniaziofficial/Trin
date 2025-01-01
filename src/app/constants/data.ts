import {
  BannerModel,
  CategoryModel,
  Product_Card_Model,
  Product_Model,
  Trending_Model,
} from '../models/index.type';

export const BANNER_ITEMS: BannerModel[] = [
  {
    imageSrc: 'assets/images/banner/Image1.png',
    headingText: 'Classy Sneakers Wear',
    description:
      'Step Up Your Style with Classy Sneakers Wear – Where Comfort Meets Elegance!',
    buttonText: 'Shop Now',
    textColor: '#000',
    buttonBackground: '#000000',
    buttonTextColor: '#fff',
    bannerBackgroundColor: '#f0e9dc',
    imageSide: 'right',
  },
  {
    imageSrc: 'assets/images/banner/Image2.png',
    headingText: 'Sports Shoes',
    description:
      'Push your limits with ultimate comfort and durability in every stride',
    buttonText: 'Shop Now',
    textColor: '#fff',
    buttonBackground: '#d9d9d9',
    buttonTextColor: '#000',
    bannerBackgroundColor: '#0a0a0a',
    imageSide: 'left',
  },
  {
    imageSrc: 'assets/images/banner/Image3.png',
    headingText: 'Modern Shoes',
    description:
      'Experience redefined style and unmatched comfort with every step you take',
    textColor: '#000',
    buttonText: 'Shop Now',
    buttonBackground: '#000',
    buttonTextColor: '#fff',
    bannerBackgroundColor: '#f2eae3',
    imageSide: 'left',
  },
  {
    imageSrc: 'assets/images/banner/Image4.png',
    headingText: 'Jogger Shoes',
    description:
      'Stay on track with lightweight shoes designed for your active lifestyle',
    textColor: '#000',
    buttonText: 'Shop Now',
    buttonBackground: '#000',
    buttonTextColor: '#fff',
    bannerBackgroundColor: '#ececec',
    imageSide: 'right',
  },
];

export const CATEGORY_ITEM: CategoryModel[] = [
  {
    categoryName: 'Sneakers',
    categoryDescription: 'Discover the latest sneakers styles and trends',
    categoryImageSrc: 'assets/images/categories/Sneakers.png',
  },
];

export const PRODUCT_CARD_ITEM: Product_Card_Model[] = [
  {
    title: 'Jogger Shoes',
    description:
      'Experience comfort and style with our jogger shoes, designed for both performance and everyday wear.',
    buttonBackground: '#000',
    buttonTextColor: '#fff',
    buttonText: 'Shop Jogger Shoes',
    imgSrc: 'assets/images/Jogger_Shoes.jpg',
    cardTextColor: '#000',
    link: '',
  },
  {
    title: 'Basketball Shoes',
    description:
      'Take control on the court with high-grip basketball shoes, designed to offer exceptional support and cushioning.',
    buttonBackground: '#000',
    buttonTextColor: '#fff',
    buttonText: 'Shop Basketball Shoes',
    imgSrc: 'assets/images/Basketball_Shoes.jpg',
    cardTextColor: '#000',
    link: 'https://example.com/basketball-shoes',
  },
];

export const TopPicks: Product_Model[] = [
  {
    imgUrl: 'assets/images/top_picks/1.jpg',
    ShoeName: 'Shoe 1',
    ShoePrice: '59.99',
    ShoeLink: '',
  },
  {
    imgUrl: 'assets/images/top_picks/2.jpg',
    ShoeName: 'Shoe 2',
    ShoePrice: '59.99',
    ShoeLink: '',
  },
  {
    imgUrl: 'assets/images/top_picks/3.jpg',
    ShoeName: 'Shoe 3',
    ShoePrice: '59.99',
    ShoeLink: '',
  },
];

export const Trending: Trending_Model[] = [
  {
    title: 'Futuristic Jogger Shoes: A Leap into the Future of Footwear',
    description:
      'These futuristic shoes boast a sleek, aerodynamic design with lightweight mesh and 3D-printed elements, offering both style and performance. The unique lattice structure enhances airflow and comfort.',
    imageUrl: 'assets/images/trending/futureistic_shoes.jpg',
    link: '',
  },
  {
    title: "Stride in Style: Premium Men's Sports Shoes",
    description:
      "Luxury meets performance in these sleek men's sports shoes, featuring premium materials, modern design, and a sophisticated navy and metallic finish",
    imageUrl: 'assets/images/trending/modern_shoes.jpg',
    link: '',
  },
  {
    title: 'Step into Confidence: How the Right Shoes Can Transform Your Day',
    description:
      'The right shoes boost confidence, ease, and style, empowering you to feel unstoppable and leave a lasting impression',
    imageUrl: 'assets/images/trending/man_tieing_Shoes.jpg',
    link: '',
  },
];


export const Latest_Product : Product_Model[] = [
  {
  imgUrl: 'assets/images/latest_products/1.jpg',
  ShoeName: 'Latest Product 1',
  ShoePrice: '99.99',
  ShoeLink: '',
},
  {
  imgUrl: 'assets/images/latest_products/2.jpg',
  ShoeName: 'Latest Product 1',
  ShoePrice: '99.99',
  ShoeLink: '',
},
  {
  imgUrl: 'assets/images/latest_products/3.jpg',
  ShoeName: 'Latest Product 1',
  ShoePrice: '99.99',
  ShoeLink: '',
},
  {
  imgUrl: 'assets/images/latest_products/4.jpg',
  ShoeName: 'Latest Product 1',
  ShoePrice: '99.99',
  ShoeLink: '',
},
  {
  imgUrl: 'assets/images/latest_products/5.jpg',
  ShoeName: 'Latest Product 1',
  ShoePrice: '99.99',
  ShoeLink: '',
},
  {
  imgUrl: 'assets/images/latest_products/6.jpg',
  ShoeName: 'Latest Product 1',
  ShoePrice: '99.99',
  ShoeLink: '',
},

]
