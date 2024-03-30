import { type SchemaTypeDefinition } from 'sanity'
import banner from './schemas/banner'
import products from './schemas/products'
import category from './schemas/category'
import blockContent from './schemas/blockContent'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [banner,products,category,blockContent],
}
