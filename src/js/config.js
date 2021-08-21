export const API_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes/';
export const TIMEOUT_SEC = 10;
export const KEY = '687c78d9-b871-43e8-a1a9-324890f0fc00';
export const MODAL_CLOSE_SEC = 2.5;

const mediaQuery = window.matchMedia('(max-width: 600px)');
let value;
if (mediaQuery.matches) {
  value = 5;
} else {
  value = 10;
}
export const RES_PER_PAGE = value;
