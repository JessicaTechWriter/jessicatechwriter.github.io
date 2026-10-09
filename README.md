# Portfólio de Technical Writing

Site pessoal feito com [Docusaurus](https://docusaurus.io/) e publicado no GitHub Pages. As páginas são escritas em Markdown, versionadas no Git e revisadas automaticamente pelo [Vale](https://vale.sh/).

## Publicar pela primeira vez

1. No GitHub, crie um repositório público chamado `seu-usuario.github.io`, trocando `seu-usuario` pelo seu nome de usuário.
2. Em `docusaurus.config.js`, preencha as constantes do bloco **EDITE AQUI**: nome, usuário do GitHub, LinkedIn, e-mail e descrição.
3. Envie os arquivos para a branch `main`:

   ```bash
   git init
   git add .
   git commit -m "Primeira versão do portfólio"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/seu-usuario.github.io.git
   git push -u origin main
   ```

4. No repositório, abra **Settings > Pages** e, em **Source**, escolha **GitHub Actions**.
5. Abra a guia **Actions** e aguarde o fluxo **Publicar no GitHub Pages** terminar.

O site fica disponível em `https://seu-usuario.github.io`. A cada push na `main`, ele é publicado de novo.

## Ver o site no seu computador

Requisito: [Node.js](https://nodejs.org/) 20 ou superior.

```bash
npm install
npm start
```

O site abre em `http://localhost:3000` e se atualiza sozinho quando você salva um arquivo.

## Antes de divulgar o link

As amostras incluídas documentam um produto fictício e servem de modelo. Revise esta lista:

- [ ] Dados pessoais preenchidos em `docusaurus.config.js`.
- [ ] Texto de abertura, revisão em destaque e lista de amostras ajustados em `src/pages/index.js`.
- [ ] Página `src/pages/sobre.md` sem trechos entre colchetes.
- [ ] Amostras em `docs/amostras/` substituídas pelas suas ou adaptadas.
- [ ] Estudo de caso em `docs/estudos-de-caso/` substituído por um caso real.
- [ ] Nenhum conteúdo confidencial de empregadores ou clientes.

## Onde fica cada coisa

| Caminho | Conteúdo |
| --- | --- |
| `docusaurus.config.js` | Seus dados, menu, rodapé e configurações do site. |
| `src/pages/index.js` | Página inicial. |
| `src/pages/sobre.md` | Página Sobre. |
| `docs/amostras/` | Amostras de documentação. |
| `docs/estudos-de-caso/` | Estudos de caso. |
| `src/components/` | Componentes `FichaAmostra` e `Revisao`. |
| `src/css/custom.css` | Cores e tipografia. Altere as variáveis `--pf-*`. |
| `.github/workflows/` | Publicação automática e verificações de pull request. |
| `.vale.ini` e `.github/styles/` | Guia de estilo verificado pelo Vale. |

## Adicionar uma amostra

1. Crie um arquivo `.md` em `docs/amostras/`. Ele aparece sozinho no menu lateral.
2. No cabeçalho, defina `title`, `description` e `sidebar_position`.
3. Comece a página com a ficha de contexto:

   ```mdx
   <FichaAmostra
     publico="Para quem você escreveu."
     problema="Qual problema a documentação resolve."
     contribuicao="O que você fez e quais decisões tomou."
     ferramentas={['Markdown', 'Docusaurus']}
   />
   ```

4. Para mostrar uma revisão, use o componente `Revisao`. A contagem de palavras é automática:

   ```mdx
   <Revisao
     antes="Texto original."
     depois="Texto revisado."
     nota="Por que você mudou."
   />
   ```

5. Para destacar a amostra na página inicial, inclua-a na lista `AMOSTRAS` em `src/pages/index.js`.

## Revisão de estilo com o Vale

Em cada pull request, o fluxo **Verificar documentação** roda o Vale e gera o site para encontrar links quebrados. As regras ficam em `.github/styles/Portfolio/`:

| Regra | O que verifica |
| --- | --- |
| `Minimizadores` | Palavras como "simplesmente" e "basta". |
| `LinkGenerico` | Textos de link como "clique aqui". |
| `Gerundismo` | Construções como "vou estar enviando". |
| `FaleComOLeitor` | Instruções que falam de "o usuário" em vez de "você". |

Para rodar no seu computador, [instale o Vale](https://vale.sh/docs/install) e execute:

```bash
vale docs src/pages
```

Trabalhar com pull requests, mesmo sozinho, deixa o histórico de revisões visível para quem avalia o portfólio.
