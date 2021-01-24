export default {
  widgets: [
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
                  buildHookId: '600d7ecabd7fe4ad717ec8cd',
                  title: 'Sanity Studio',
                  name: 'aifos-animation-studio-site-studio',
                  apiId: '2688d4b2-ccac-4862-88cc-6d3177cc3cd7'
                },
                {
                  buildHookId: '600d7ecabbfca795c279d71a',
                  title: 'Blog Website',
                  name: 'aifos-animation-studio-site',
                  apiId: '23047bac-2c9f-4b66-abdd-23b929f69538'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lolzzz992/aifos-animation-studio-site',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://aifos-animation-studio-site.netlify.app', category: 'apps'}
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
