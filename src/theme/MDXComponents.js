// Registra componentes para usar em qualquer arquivo .md/.mdx sem `import`.
import MDXComponents from '@theme-original/MDXComponents';
import FichaAmostra from '@site/src/components/FichaAmostra';
import Revisao from '@site/src/components/Revisao';

export default {
  ...MDXComponents,
  FichaAmostra,
  Revisao,
};
