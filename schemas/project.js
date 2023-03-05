import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "featured",
      title: "Featured",
      type: "boolean"
    },
    {
      name: "description",
      title: "Description",
      type: "string"
    },
    {
      name: "projectPic",
      title: "ProjectPic",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{type: "reference", to: {type: "skill"}}], 
    },
    {
      name: "youtube",
      title: "Youtube",
      type: "url"
    },
    {
      name: "github",
      title: "Github",
      type: "url"
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{type: "string"}],
    },
  ],
})
