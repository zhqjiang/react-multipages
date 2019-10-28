module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
  },
  "extends": "react-app",
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": ["react-hooks"],
  "rules": {
    "indent": [
      "error", 2, { "SwitchCase": 1 }
    ],
    "react/jsx-indent": [
      "error", 2
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "arrow-parens": [
      "error",
      "as-needed"
    ],
    "linebreak-style": "off", // 由git或svn控制换行
    "no-console": "off",
    "react/jsx-filename-extension": "off"
  }
};