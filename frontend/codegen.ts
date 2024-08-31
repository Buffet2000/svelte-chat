import type { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: 'http://localhost:3000/graphql',
  documents: './src/queries/**/*.ts',
  generates: {
    './src/generated.ts': {
      plugins: ['typescript', 'typescript-operations', 'typed-document-node', '@kitql/graphql-codegen']
    }
  },
  config: {
    clientPath: 'src/client.ts'
  } 
}
export default config;
