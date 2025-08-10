db.articles.createSearchIndex({
  index: {
    wildcard: "*",
    fields: {
      title: { type: "string" },
      content: { type: "string" }
    }
  }
});
