import { defineField, defineType } from "sanity";

export default defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({
      name: "categories",
      title: "Categories",
      type: "reference",
      to: { type: "category" },
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    // defineField({
    //   name: "mainImageFile",
    //   title: "Main Image File",
    //   type: "image",
    //   options: {
    //     hotspot: true,
    //   },
    // }),
    defineField({
      name: "mainImageUrl",
      title: "Main Image URL",
      type: "url",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "text",
    }),
    defineField({
      name: "subTitle",
      title: "Sub Title",
      type: "array",
      of: [{ type: "text" }],
    }),
    defineField({
      name: "documentationTitle",
      title: "Documentation Title",
      type: "text",
    }),
    defineField({
      name: "documentationList",
      title: "Documentation List",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", type: "text", title: "Documentation Name" },
            { name: "info", type: "text", title: "Documentation Info" },
          ],
        },
      ],
    }),
    defineField({
      name: "labeling",
      title: "Labeling",
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
