export const subMenus = [
  { title: "EFSA", slug: "efsa" },
  { title: "FSSAI", slug: "fssai" },
];

export const headerMenus = [
  { title: "HOME", slug: "home", childItems: 0 },
  { title: "ABOUT", slug: "about", childItems: 0 },
  { title: "SERVICES", slug: "services", childItems: subMenus.length },
  { title: "FAQ", slug: "faq", childItems: 0 },
  { title: "CONTACT", slug: "contact", childItems: 0 },
];
