import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemas';
import { visionTool } from '@sanity/vision';

const config = defineConfig({
  name: 'default',
  title: '',

  basePath: '/studio',
  projectId: 'p03ymsld',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) => {
        return S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Resume')
              .child(
                S.editor()
                  .id('resume')
                  .schemaType('resume')
                  .documentId('resume')
              ),
          ]);
      },
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});

export default config;
