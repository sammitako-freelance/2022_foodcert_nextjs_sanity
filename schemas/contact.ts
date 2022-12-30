import { defineField, defineType } from "sanity";

export default defineType({
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "subTitle",
      title: "Sub Title",
      type: "string",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "geopoint",
    }),
  ],

  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      return { ...selection };
    },
  },
});
