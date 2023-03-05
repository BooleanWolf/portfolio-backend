import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'achievement',
  title: 'Achievement',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "contest",
      title: "Contest",
      type: "string"
    },
    {
      name: "summary",
      title: "Summary",
      type: "string"
    },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{type: "reference", to: {type: "skill"}}], 
    },
    {
      name: "pic",
      title: "Pic",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "date",
      title: "Date",
      type: "date"
    },
  ],
})
