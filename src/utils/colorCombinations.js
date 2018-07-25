export const primaryColorPieces = ['r', 'y', 'blu'];
export const secondaryColorPieces = ['o', 'g', 'p'];
export const primaryAndSecondaryColorPieces = ['r', 'o', 'y', 'g', 'blu', 'p'];

export const collapsableCombinations = {
  r: primaryColorPieces,
  y: primaryColorPieces,
  blu: primaryColorPieces,
  o: secondaryColorPieces,
  g: secondaryColorPieces,
  p: secondaryColorPieces,
  bla: ['bla'],
  empty: [],
};

export const collisionResults = {
  r: {
    r: 'r',
    y: 'o',
    blu: 'p',
  },
  o: {
    o: 'o',
    g: 'bla',
    p: 'bla',
  },
  y: {
    y: 'y',
    r: 'o',
    blu: 'g',
  },
  g: {
    g: 'g',
    o: 'bla',
    p: 'bla',
  },
  blu: {
    blu: 'blu',
    r: 'p',
    y: 'g',
  },
  p: {
    p: 'p',
    o: 'bla',
    g: 'bla',
  },
  bla: {
    bla: 'bla',
  },
};
