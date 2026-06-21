export const travelerReviews = {
  1: {
    rating: 5,
    tour: 'Tre Cime Sunrise Trek',
    imageUrl: 'https://unsplash.com/photos/wdiGpO6h6CA/download?force=true&w=1400',
    imageAlt: 'Tre Cime di Lavaredo glowing at golden hour',
    review:
      'The sunrise over Tre Cime felt unreal. Our guide knew the quiet paths, the best lake viewpoints, and the perfect mountain hut for warm apple strudel afterward.',
  },
  2: {
    rating: 4,
    tour: 'Lago di Braies Escape',
    imageUrl: 'https://unsplash.com/photos/b-L7Y7EzGDo/download?force=true&w=1400',
    imageAlt: 'Lago di Braies surrounded by forest and snowy peaks',
    review:
      'A peaceful and beautifully organized tour. The lake was clear, the forest paths were easy to follow, and every stop felt like a postcard coming to life.',
  },
  3: {
    rating: 5,
    tour: 'Val Gardena Alpine Villages',
    imageUrl: 'https://unsplash.com/photos/S6X1PIQT0ww/download?force=true&w=1400',
    imageAlt: 'Cortina d Ampezzo town square with Dolomite peaks behind it',
    review:
      'I loved the mix of dramatic peaks and charming villages. The pace was relaxed, the views were endless, and the local food recommendations were fantastic.',
  },
  4: {
    rating: 5,
    tour: 'Seceda Ridge Adventure',
    imageUrl: 'https://unsplash.com/photos/ByIuHYRmokg/download?force=true&w=1400',
    imageAlt: 'Seceda ridge in the Dolomites at sunrise',
    review:
      'Walking along Seceda was the highlight of my trip to Italy. The ridge views were breathtaking, and the whole day felt adventurous without being rushed.',
  },
  5: {
    rating: 4,
    tour: 'Dolomites Scenic Road Trip',
    imageUrl: 'https://unsplash.com/photos/x6zKRlXqyic/download?force=true&w=1400',
    imageAlt: 'Dolomite mountain range at sunset near Cortina d Ampezzo',
    review:
      'The route was stunning from beginning to end. Mountain passes, turquoise lakes, and little cafes made it such an easy way to fall in love with the Dolomites.',
  },
  6: {
    rating: 5,
    tour: 'Cortina Mountain Weekend',
    imageUrl: 'https://unsplash.com/photos/QYPBn8jzFsg/download?force=true&w=1400',
    imageAlt: 'Lakeside alpine house reflected in calm Dolomite water',
    review:
      'Cortina was elegant, cozy, and surrounded by incredible scenery. The tour balanced hiking, photography stops, and village time perfectly.',
  },
  7: {
    rating: 3,
    tour: 'Alpe di Siusi Meadow Walk',
    imageUrl: 'https://unsplash.com/photos/zWAWHLCGzos/download?force=true&w=1400',
    imageAlt: 'Hiker standing on a grassy Dolomite trail in summer',
    review:
      'The meadows were beautiful and very calm. I would have liked a little more hiking time, but the scenery and guide were both wonderful.',
  },
  8: {
    rating: 5,
    tour: 'Hidden Lakes of the Dolomites',
    imageUrl: 'https://unsplash.com/photos/X8gvD5NHPdI/download?force=true&w=1400',
    imageAlt: 'Lake Carezza reflecting pine forest and Dolomite mountains',
    review:
      'Every lake felt different and magical. I especially loved the reflections in the morning and the way the guide shared stories about each valley.',
  },
  9: {
    rating: 4,
    tour: 'Mountain Hut Food Trail',
    imageUrl: 'https://unsplash.com/photos/m41uew-oMlU/download?force=true&w=1400',
    imageAlt: 'Mountain refuge glowing at night beneath Dolomite peaks',
    review:
      'This was such a delicious way to explore the mountains. The views were beautiful, and every hut had something warm, local, and memorable to try.',
  },
  10: {
    rating: 5,
    tour: 'Dolomites Photography Journey',
    imageUrl: 'https://unsplash.com/photos/5-P_43Nw6H0/download?force=true&w=1400',
    imageAlt: 'Twilight over rugged Dolomite peaks and a mountain trail',
    review:
      'A dream trip for photography lovers. We reached the best viewpoints at golden hour, and I came home with my favorite travel photos ever.',
  },
};

export function getTravelerReview(id) {
  return travelerReviews[id] ?? {
    rating: 4,
    tour: 'Dolomites Discovery Tour',
    imageUrl: 'https://unsplash.com/photos/3i-UY3fnQBU/download?force=true&w=1400',
    imageAlt: 'Small Dolomite village with mountain peaks in the background',
    review:
      'A memorable journey through alpine landscapes, peaceful villages, and mountain views that made every moment feel special.',
  };
}
