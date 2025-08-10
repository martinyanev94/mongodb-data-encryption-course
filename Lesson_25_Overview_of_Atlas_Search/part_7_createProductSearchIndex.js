db.products.createSearchIndex({
  mappings: {
    dynamic: true,
    fields: {
      name: { type: "string" },
      description: { type: "string" },
      price: { type: "number" }
    }
  }
})
