
export default function categoriesAdapter (categories) {
  if (Array.isArray(categories) && categories.length === 0) return []
  return categories.map(category => {
    return {
      id: category.id,
      name: category.name,
      image: category.image
    }
  })
}
