import { defineField, defineType } from "sanity";

export default defineType({
  name: "mainHero",
  title: "MainHero",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "tel",
      title: "Tel",
      type: "string",
    }),
    // defineField({
    //   name: "mainImageFile",
    //   title: "Main Image Files",
    //   type: "array",
    //   of: [
    //     {
    //       type: "image",
    //       options: {
    //         hotspot: true,
    //       },
    //     },
    //   ],
    // }),
    defineField({
      name: "mainImageUrl",
      title: "Main Image URLs",
      type: "array",
      of: [
        {
          type: "url",
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
    prepare(selection) {
      return { ...selection };
    },
  },
});
