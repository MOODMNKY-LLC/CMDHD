import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Allow setState in useEffect for legitimate hydration patterns
      'react-hooks/set-state-in-effect': 'off',
      // Allow impure functions in useMemo/useState initializers  
      'react-hooks/purity': 'off',
    },
  },
];

export default eslintConfig;
