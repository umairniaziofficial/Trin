export type Trending_Model= {
  title : string;
  description : string;
  imageUrl: string;
  link: string;
}


export type Product_Model = {
  imgUrl : string;
  ShoeName: string;
  ShoePrice: string;
  ShoeLink: string;
}

export type Product_Card_Model = {
  imgSrc : string;
  cardTextColor: string;
  title: string;
  description: string;
  buttonBackground: string;
  buttonTextColor: string;
  buttonText: string;
  link: string;
};

export type CategoryModel = {
  categoryName: string;
  categoryDescription: string;
  categoryImageSrc : string;
}

export type BannerModel = {
  imageSrc: string;
  headingText: string;
  description: string;
  buttonText: string;
  buttonBackground: string;
  textColor: string;
  buttonTextColor: string;
  bannerBackgroundColor: string;
  imageSide: 'left' | 'right';
}
