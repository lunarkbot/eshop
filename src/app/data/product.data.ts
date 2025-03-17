import {Product} from '../types/card';

export const product: Product = {
  id: 1,
  company: 'Google',
  title: 'Google Pixel 9 Pro – Android-Smartphone mit Gemini ohne SIM-Lock',
  image: '/assets/phone.png',
  rating: {
    value: 5,
    reviews: 4,
  },
  price: {
    value: 1099,
    discount: 0.2,
  },
  deliveryOptions: {
    delivery: 'morgen',
    packstation: true,
    available: 1,
  },
  badge: {
    color: '#198038',
    text: 'Best offer',
  },
  colors: [
    {
      color: 'Hazel',
      image: '/assets/phone.png',
    },
    {
      color: 'Rose Quartz',
      image: 'assets/phone-rose.png',
    }
  ]
}
