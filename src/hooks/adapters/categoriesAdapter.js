
export default function categoriesAdapter (categories) {
  if (!Array.isArray(categories)) return categories
  return categories.map(category => {
    return {
      id: category.id,
      name: category.name,
      image: category.image
    }
  })
}
