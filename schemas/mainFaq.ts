import { defineField, defineType } from "sanity";

export default defineType({
  name: "faq",
  title: "Faq",
  type: "document",
  fields: [
    defineField({
      name: "question",
      title: "Question",
      type: "text",
    }),
    defineField({
      name: "answer",
      title: "Answer",
      type: "text",
    }),
  ],

  preview: {
    select: {
      title: "question",
    },
    prepare(selection) {
      return { ...selection };
    },
  },
});
