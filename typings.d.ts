// 1:24:55
import { AuthStoreOptions, Reference } from "sanity";

export type Base = {
  _id: string;
  _type: string;
  _createdAt: string;
  _rev: string;
  _updatedAt: string;
};
export interface MainHero extends MainHeroData {
  _id: string;
  _type: "mainHero";
  _createdAt: string;
  _rev: string;
  _updatedAt: string;
}

export type MainHeroData = {
  title: Array<string>;
  email: string;
  tel: string;
  imageFile?: string;
  imageUrl?: string;
};

export interface MainService extends MainServiceData {
  _id: string;
  _type: "mainService";
  _createdAt: string;
  _rev: string;
  _updatedAt: string;
}

export type MainServiceData = {
  categories: Category;
  title: string;
  list: Array<string>;
};

export interface News extends NewsData {
  _id: string;
  _type: "news";
  _createdAt: string;
  _rev: string;
  _updatedAt: string;
}

export type NewsData = {
  title: string;
  slug: Slug;
  author: Author;
  categories: Category;
  summary: string;
  file: File[];
  publishedAt: string;
  body: Block[];
  image: Image[];
};

export interface FaqData extends Faq {
  _id: string;
  _type: "faq";
  _createdAt: string;
  _rev: string;
  _updatedAt: string;
}

export type Faq = {
  question: string;
  answer: string;
};

export interface MainContact extends MainContactData {
  _id: string;
  _type: "mainContact";
  _createdAt: string;
  _rev: string;
  _updatedAt: string;
}

export type MainContactData = {
  title: string;
  subTitle: string;
};

export interface ServicePage extends Service {
  _id: string;
  _type: "service";
  _createdAt: string;
  _rev: string;
  _updatedAt: string;
}

export type Service = {
  title: string;
  subTitle: Array<string>;
  documentationTitle: string;
  documentationList: Array<Object>;
  categories: Category;
  slug: Slug;
  mainImageFile: Image;
  mainImageUrl: string;
  labeling: Array<string>;
};

export interface ContactPage extends ContactData {
  _id: string;
  _type: "contact";
  _createdAt: string;
  _rev: string;
  _updatedAt: string;
}

export type ContactData = {
  title: string;
  subTitle: string;
  location: Location;
};

export interface Author extends Base {
  bio: Block[];
  image: Image;
  name: string;
  slug: Slug;
}

export interface Image {
  _type: "image";
  asset: Reference;
}

export interface Reference {
  _ref: string;
  _type: "reference";
}
export interface Slug {
  _type: "slug";
  current: string;
}

export interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

export interface Span {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
}

export interface Category extends Base {
  title: string;
  description: string;
}

export interface MainImage {
  _type: "image";
  asset: Reference;
}

export interface Title {
  _type: "string";
  current: string;
}

export interface File extends Base {
  _type: "file";
  asset: Reference;
  title: string;
}

export interface Location {
  _type: "geopoint";
  lat: number;
  lng: number;
  alt: number;
}
