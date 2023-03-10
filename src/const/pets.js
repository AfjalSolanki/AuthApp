const pets = [
  {
    pet: 'cats',
    pets: [
      {
        id: '1',
        name: 'Lily',
        image: require('../assets/images/cat1.png'),
        type: 'Chausie',
        age: '5 years old',
      },
      {
        id: '2',
        name: 'Lucy',
        image: require('../assets/images/cat2.png'),
        type: 'Bobtail',
        age: '2 years old',
      },
      {
        id: '3',
        name: 'Nala',
        image: require('../assets/images/cat3.png'),
        type: 'Ragamuffin',
        age: '2 years old',
      },
    ],
  },
  {
    pet: 'dogs',
    pets: [
      {
        id: '1',
        name: 'Bally',
        image: require('../assets/images/dog1.png'),
        type: 'German Shepherd',
        age: '2 years old',
      },
      {
        id: '2',
        name: 'Max',
        image: require('../assets/images/dog2.png'),
        type: 'Foxhound',
        age: '2 years old',
      },
    ],
  },
  {
    pet: 'birds',
    pets: [
      {
        id: '1',
        name: 'Coco',
        image: require('../assets/images/bird1.png'),
        type: 'Parrot',
        age: '2 years old',
      },
      {
        id: '2',
        name: 'Alfie',
        image: require('../assets/images/bird2.png'),
        type: 'Parrot',
        age: '4 years old',
      },
    ],
  },
  {
    pet: 'bunnies',
    pets: [
      {
        id: '1',
        name: 'Boots',
        image: require('../assets/images/bunny1.png'),
        type: 'Angora',
        age: '1 years old',
      },
      {
        id: '2',
        name: 'Pookie',
        image: require('../assets/images/bunny2.png'),
        type: 'Angora',
        age: '1 years old',
      },
    ],
  },
];

export default pets;
