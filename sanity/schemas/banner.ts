import { defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "banner",
  title: "Banner",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Banner",
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      description: "Banner Image",
      validation: (rule) => rule.required(),
      options: {
        hotspot: true,
      },
      preview: {
        select: {
          imageUrl: "asset.url",
          title: "caption",
        },
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
});
