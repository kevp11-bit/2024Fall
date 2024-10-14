import data from '../data/products.json'

export function getAll() {
  return {
    items: data.items,
    total: data.total
  }
}
