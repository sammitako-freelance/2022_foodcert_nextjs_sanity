import { defineField, defineType } from "sanity";

export default defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({
      name: "address",
      title: "Address",
      type: "string",
    }),
    defineField({
      name: "registeration",
      title: "Registeration",
      type: "string",
    }),
    defineField({
      name: "tel",
      title: "Tel",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "address",
    },
    prepare(selection) {
      return { ...selection };
    },
  },
});
