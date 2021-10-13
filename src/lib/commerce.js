import Commerce from '@chec/commerce.js';

// we import it from .env because .env is hidden and will not be commited to github
export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);