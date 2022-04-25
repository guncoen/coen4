export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '6265f3a63dfcf01867b5188a',
                  title: 'Sanity Studio',
                  name: 'coen-4-studio',
                  apiId: 'b3a28785-f8df-493b-baad-6f28bdd0a37b'
                },
                {
                  buildHookId: '6265f3a660fece1597e523bb',
                  title: 'Landing pages Website',
                  name: 'coen-4',
                  apiId: '8b6d8be2-1fc3-4bd7-9184-5ef2007455fe'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/guncoen/coen4',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://coen-4.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
