// productData.js
import { Icon } from '@rneui/themed';

export const categories = [
    {
      id: 1,
      name: 'Snacks',
      icon:  <Icon
      reverse
      name='fast-food'
      type='ionicon'
      color='#517fa4'
    />,
      products: [
        {
          id: 1,
          name: 'Potato Chips',
          image: require('./src/assets/chips.png'),
          price: 2.99,
        },
        {
          id: 2,
          name: 'Popcorn',
          image: require('./src/assets/popcorn.png'),
          price: 1.49,
        },
        {
          id: 3,
          name: 'Pretzels',
          image: require('./src/assets/pretzels.png'),
          price: 2.25,
        },
        {
          id: 4,
          name: 'Chocolate Bars',
          image: require('./src/assets/chocolate.png'),
          price: 1.99,
        },
      ],
    },
    {
      id: 2,
      name: 'Beverages',
      icon: <Icon
      reverse
      name='local-drink'
      type='ionicon'
      color='#517fa4'
    />,
      products: [
        {
          id: 5,
          name: 'Soda',
          image: require('./src/assets/soda.png'),
          price: 1.99,
        },
        {
          id: 6,
          name: 'Water Bottle',
          image: require('./src/assets/water.png'),
          price: 0.99,
        },
        {
          id: 7,
          name: 'Coffee',
          image: require('./src/assets/coffee.png'),
          price: 3.49,
        },
        {
          id: 8,
          name: 'Juice',
          image: require('./src/assets/juice.png'),
          price: 2.75,
        },
      ],
    },
    // Add more categories and products if needed
  ];
  