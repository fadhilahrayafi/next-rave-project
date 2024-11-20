import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
    projectId: 'hgzhbyg5',
    dataset: 'production',
    title: 'rave project',
    apiVersion: '2024-12-16',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: {types: schemas}
});

export default config;