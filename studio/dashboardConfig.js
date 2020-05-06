export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb2ca3b3c1961fca1a2e907',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-ycdvfzap',
                  apiId: '1fc31ed6-7dc3-4db4-82d4-febf3db0f34f'
                },
                {
                  buildHookId: '5eb2ca3b7de8c2cb2173a7f7',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-gn82gfht',
                  apiId: 'd7bb7319-d857-4f9e-873c-c0ced09bb788'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/enesefes/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-gn82gfht.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
