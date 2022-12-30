export interface MainHero extends MainHeroData {
  _id: string;
  _type: "mainHero";
  _createdAt: string;
  _rev: string;
  _updatedAt: string;
}

export type MainHeroData = {
  title: string;
  email: string;
  tel: string;
  imageFile?: string;
  imageUrl?: string;
};
