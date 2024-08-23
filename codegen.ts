import type { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: './schema.graphql',
  documents: 'src/**/*.graphql',
  generates: {
    'src/types.ts': { plugins: ['typescript'] },
    'src/': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.d.ts',
        baseTypesPath: 'types.ts',
      },
      plugins: ['typescript-operations'],
      config: {
        futureProofUnions: true,
        // skipTypename: true,
      },
    },
  },
}
export default config
