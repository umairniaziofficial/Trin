import {
  BannerModel,
  CategoryModel,
  Product_Card_Model,
  Product_Model,
  TestimonialModel,
  Trending_Model,
  TrustBadgeModel,
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
    categoryName: 'Winter Shoes',
    categoryDescription: '',
    categoryImageSrc: 'assets/images/categories/winter_shoe.jpg',
  },
  {
    categoryName: 'Sports Shoes',
    categoryDescription: '',
    categoryImageSrc: 'assets/images/categories/sports_shoe.jpg',
  },
  {
    categoryName: 'Basketball Shoes',
    categoryDescription: '',
    categoryImageSrc: 'assets/images/categories/basketball_shoe.jpg',
  },
  {
    categoryName: 'Running Shoes',
    categoryDescription: '',
    categoryImageSrc: 'assets/images/categories/running_shoe.jpg',
  },
  {
    categoryName: 'Sneaker Shoes',
    categoryDescription: '',
    categoryImageSrc: 'assets/images/categories/sneaker_shoe.jpg',
  },
  {
    categoryName:'Training Shoes',
    categoryDescription:'',
    categoryImageSrc:'assets/images/categories/training_shoe.jpg'
  }

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

export const Latest_Product: Product_Model[] = [
  {
    imgUrl: 'assets/images/latest_products/1.png',
    ShoeName: 'Latest Product 1',
    ShoePrice: '99.99',
    ShoeLink: '',
  },
  {
    imgUrl: 'assets/images/latest_products/2.png',
    ShoeName: 'Latest Product 1',
    ShoePrice: '99.99',
    ShoeLink: '',
  },
  {
    imgUrl: 'assets/images/latest_products/3.png',
    ShoeName: 'Latest Product 1',
    ShoePrice: '99.99',
    ShoeLink: '',
  },
  {
    imgUrl: 'assets/images/latest_products/4.png',
    ShoeName: 'Latest Product 1',
    ShoePrice: '99.99',
    ShoeLink: '',
  },
  {
    imgUrl: 'assets/images/latest_products/5.png',
    ShoeName: 'Latest Product 1',
    ShoePrice: '99.99',
    ShoeLink: '',
  },
  {
    imgUrl: 'assets/images/latest_products/6.png',
    ShoeName: 'Latest Product 1',
    ShoePrice: '99.99',
    ShoeLink: '',
  },
];

export const Testimonial: TestimonialModel[] = [
  {
    imageSrc: 'https://randomuser.me/api/portraits/men/1.jpg',
    name: 'Michael Chen',
    description:
      "TRIN shoes have completely transformed my running experience. The comfort and support are unmatched, and I've seen a significant improvement in my performance. Best athletic shoes I've ever owned!",
    rating: 5,
  },
  {
    imageSrc: 'https://randomuser.me/api/portraits/women/1.jpg',
    name: 'Sarah Martinez',
    description:
      "As someone who spends long hours standing at work, finding comfortable shoes was crucial. TRIN's professional collection offers both style and comfort. My feet don't hurt anymore after a long shift!",
    rating: 5,
  },
  {
    imageSrc: 'https://randomuser.me/api/portraits/men/2.jpg',
    name: 'James Wilson',
    description:
      "The quality of TRIN shoes is exceptional. I've had my pair for over a year now, and they still look and feel as good as new. The customer service is also outstanding. Highly recommend!",
    rating: 4,
  },
];

export const NAV_LINKS: { path: string; label: string }[] = [
  { path: '/new', label: 'New' },
  { path: '/trending', label: 'Trending' },
  { path: '/running-shoe', label: 'Running Shoes' },
  { path: '/basketball-shoe', label: 'Basketball Shoes' },
  { path: '/casual-sneaker', label: 'Casual Sneaker' },
  { path: '/winter', label: 'Winter' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact-us', label: 'Contact Us' }
];
