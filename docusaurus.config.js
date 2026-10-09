// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

// ---------------------------------------------------------------------------
// EDITE AQUI: seus dados. O resto do site lê destas constantes.
// ---------------------------------------------------------------------------
const NOME = 'Seu Nome';
const USUARIO_GITHUB = 'JessicaTechWriter';
const LINKEDIN = 'https://www.linkedin.com/in/seu-perfil/';
const EMAIL = 'voce@exemplo.com';
const DESCRICAO =
  'Portfólio de Technical Writing: tutoriais, referências de API e guias de uso.';
// ---------------------------------------------------------------------------

// Endereços do GitHub Pages usam o usuário em letras minúsculas.
const DOMINIO = USUARIO_GITHUB.toLowerCase();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: NOME,
  tagline: DESCRICAO,
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  // Para o repositório <usuario>.github.io, o site fica na raiz do domínio.
  url: `https://${DOMINIO}.github.io`,
  baseUrl: '/',
  organizationName: USUARIO_GITHUB,
  projectName: `${DOMINIO}.github.io`,
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  customFields: {
    nome: NOME,
    usuarioGithub: USUARIO_GITHUB,
    linkedin: LINKEDIN,
    email: EMAIL,
  },

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap',
      type: 'text/css',
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // As amostras ficam em /amostras/... e os estudos em /estudos-de-caso/...
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Mostra o link "Editar esta página": quem avalia vê o Markdown-fonte.
          editUrl: `https://github.com/${USUARIO_GITHUB}/${DOMINIO}.github.io/tree/main/`,
        },
        // Blog desativado. Para publicar artigos, troque false por {} e crie a pasta blog/.
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{name: 'description', content: DESCRICAO}],
      colorMode: {
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {hideable: true},
      },
      navbar: {
        title: NOME,
        logo: {
          alt: '',
          src: 'img/logo.svg',
          srcDark: 'img/logo-escuro.svg',
        },
        items: [
          {type: 'docSidebar', sidebarId: 'amostras', position: 'left', label: 'Amostras'},
          {type: 'docSidebar', sidebarId: 'casos', position: 'left', label: 'Estudos de caso'},
          {to: '/sobre', label: 'Sobre', position: 'left'},
          {
            href: `https://github.com/${USUARIO_GITHUB}`,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {label: 'LinkedIn', href: LINKEDIN},
          {label: 'GitHub', href: `https://github.com/${USUARIO_GITHUB}`},
          {label: 'E-mail', href: `mailto:${EMAIL}`},
        ],
        copyright: `© ${new Date().getFullYear()} ${NOME}. Escrito em Markdown, versionado no Git e publicado com Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.vsDark,
        additionalLanguages: ['bash'],
      },
    }),
};

export default config;
