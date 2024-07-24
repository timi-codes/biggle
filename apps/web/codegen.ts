import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: "http://localhost:4000/graphql", //TODO: use environment varaiable
    documents: ['src/**/*.{ts,tsx}'],
    generates: {
        './src/__generated__/': {
            preset: 'client',
            plugins: [],
            presetConfig: {
                gqlTagName: 'gql',
            }
        }
    },
    ignoreNoDocuments: true,
};

export default config;