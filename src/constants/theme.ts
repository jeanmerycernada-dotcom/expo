import { avatar, profiles } from './images';

export const colors = {
  bg: '#17212B',
  surface: '#242F3D',
  surfaceAlt: '#202B36',
  border: '#2B3948',
  accent: '#229ED9',
  text: '#FFFFFF',
  textSecondary: '#8A9AA9',
  like: '#FF3B5C',
};

// Content is centered in a column this wide on tablets / web
export const MAX_CONTENT_WIDTH = 640;

export const stories = [
  { name: 'My Story', image: avatar },
  { name: 'Sendanan', image: profiles[0] },
  { name: 'Michael', image: profiles[2] },
  { name: 'Angela', image: profiles[3] },
  { name: 'John', image: profiles[4] },
  { name: 'Sophia', image: profiles[5] },
];
