import nextConfig from "eslint-config-next";

export default [
  { ignores: [".next/**", "node_modules/**"] },
  ...nextConfig,
  {
    rules: {
      "react-hooks/purity": "warn",
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/static-components": "warn",
    },
  },
];
