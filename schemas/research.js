import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'research',
  title: 'Research',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "description",
      title: "Description",
      type: "string"
    },
    {
      name: "conference",
      title: "Conference",
      type: "string"
    },
    {
      name: "drive",
      title: "Drive",
      type: "url"
    },
    {
      name: "authors",
      title: "Authors",
      type: "array",
      of: [{type: "string"}],
    },
  ],
})
