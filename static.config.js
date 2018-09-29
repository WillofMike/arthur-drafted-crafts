import { request } from 'graphql-request'

const GRAPHCMS_API = 'https://api-uswest.graphcms.com/v1/cjjuzla4806ku01ck1muh0mdd/master'

const query = `{
  furnitures{
    id
    title
    description
    price
    image {
      url
    }
  }
  cardses{
    id
		title
    description
    price
    cardImage {
      url
    }
  }
  engravingses{
    id
		title
    description
    price
    laserImage {
      url
    }
  }
  taleTimberses{
    id
    title
    description
    timberImage {
      url
    }
  }
}`

export default {
  getRoutes: async () => {
    const {
      furnitures, 
      cardses,
      engravingses,
      taleTimberses
    } = await request(GRAPHCMS_API, query)

    return [
      {
        path: '/about',
        component: 'src/pages/About',
        getData: () => ({
          cardses,
        }),
      },
      {
        path: '/',
        component: 'src/pages/Home',
        getData: () => ({
          furnitures,
          cardses, 
          taleTimberses
        }),
      },
      {
        path: '/furniture',
        component: 'src/pages/Furniture',
        getData: () => ({
          furnitures,
        }),
        children: furnitures.map(post => ({
          path: `/post/${post.id}`,
          component: 'src/containers/FurniturePost',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        path: '/cards',
        component: 'src/pages/Cards',
        getData: () => ({
          cardses,
        }),
        children: cardses.map(post => ({
          path: `/post/${post.id}`,
          component: 'src/containers/CardsPost',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        path: '/engravings',
        component: 'src/pages/Engravings',
        getData: () => ({
          engravingses,
        }),
        children: engravingses.map(post => ({
          path: `/post/${post.id}`,
          component: 'src/containers/EngravingsPost',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/pages/404',
      },
      ]
  },
}
