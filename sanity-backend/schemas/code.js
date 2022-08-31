export default {
  name: "code",
  type: "document",
  title: "Code",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      title: "info",
      name: "description",
      type: "string",
    },
    {
      title: "Link",
      name: "href",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
        }),
    },
  ],
};
