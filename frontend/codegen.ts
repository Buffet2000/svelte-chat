import type { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: 'http://localhost:3000/graphql',
  documents: './src/queries/**/*.ts',
  generates: {
    './src/generated.ts': {
      plugins: ['typescript', 'typescript-operations', 'graphql-codegen-svelte-apollo']
    }
  },
  config: {
    clientPath: './client'
  } 
}
export default config;
