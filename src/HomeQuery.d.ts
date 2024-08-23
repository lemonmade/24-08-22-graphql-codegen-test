import * as Types from './types';

export type HomeQueryVariables = Types.Exact<{
  country?: Types.InputMaybe<Types.CountryCode>;
  language?: Types.InputMaybe<Types.LanguageCode>;
}>;


export type HomeQuery = { __typename?: 'QueryRoot', menu?: { __typename?: 'Menu', id: string, title: string, items: Array<{ __typename?: 'MenuItem', id: string, title: string, url?: any | null, resource?: { __typename: 'Article' } | { __typename: 'Blog' } | { __typename: 'Collection' } | { __typename: 'Metaobject' } | { __typename: 'Page' } | { __typename: 'Product', id: string } | { __typename: 'ShopPolicy' } | null }> } | null, collections: { __typename?: 'CollectionConnection', nodes: Array<{ __typename?: 'Collection', id: string, title: string, handle: string, image?: { __typename?: 'Image', id?: string | null, url: any, altText?: string | null, width?: number | null, height?: number | null } | null }> }, products: { __typename?: 'ProductConnection', nodes: Array<{ __typename?: 'Product', id: string, title: string, handle: string, priceRange: { __typename?: 'ProductPriceRange', minVariantPrice: { __typename?: 'MoneyV2', amount: any, currencyCode: Types.CurrencyCode } }, featuredImage?: { __typename?: 'Image', id?: string | null, url: any, altText?: string | null, width?: number | null, height?: number | null } | null }> } };
