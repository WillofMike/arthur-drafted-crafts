import { request } from 'graphql-request'

const GRAPHCMS_API = 'https://api-uswest.graphcms.com/v1/cjjuzla4806ku01ck1muh0mdd/master'

const query = `{
  furnitures{
    title
    description
    image {
      url
    }
  }
  cardses{
		title
    description
    cardImage {
      url
    }
  }
}`

export default {
  getRoutes: async () => {
    const {
      furnitures, 
      cardses
    } = await request(GRAPHCMS_API, query)

    return [
      {
        path: '/',
        component: 'src/pages/Home',
        getData: () => ({
          furnitures,
        }),
        children: furnitures.map(post => ({
          path: `/post/${post.slug}`,
          component: 'src/pages/Post',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        path: '/about',
        component: 'src/pages/About',
        getData: () => ({
          cardses,
        }),
      },
      {
        is404: true,
        component: 'src/pages/404',
      },
    ]
  },
}
