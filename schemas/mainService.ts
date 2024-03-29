import { defineField, defineType } from "sanity";

export default defineType({
  name: "mainService",
  title: "MainService",
  type: "document",
  fields: [
    defineField({
      name: "categories",
      title: "Categories",
      type: "reference",
      to: { type: "category" },
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "text",
    }),
    defineField({
      name: "list",
      title: "List",
      type: "array",
      of: [{ type: "text" }],
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
