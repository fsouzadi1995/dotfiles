module.exports = {
  '**/*.{json,md,yml,html,css,sass,scss}': ['prettier --write'],
  '**/*.{js,jsx,ts,tsx}': ['prettier --write', 'eslint --cache --fix'],
};
