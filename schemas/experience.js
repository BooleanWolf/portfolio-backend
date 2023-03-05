import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: "company",
      title: "Company",
      type: "string"
    },
    {
      name: "role",
      title: "Role",
      type: "string"
    },
    {
      name: "companyLogo",
      title: "CompanyLogo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "isCurrentlyHere",
      title: "IsCurrentlyHere",
      type: "boolean"
    },
    {
      name: "dateStarted",
      title: "DateStarted",
      type: "date"
    },
    {
      name: "dateEnded",
      title: "DateEnded",
      type: "date"
    },
    {
      name: "points",
      title: "Points",
      type: "array",
      of: [{type: "string"}],
    },
  ],
})
