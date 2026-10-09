---
sidebar_position: 3
title: Exportar o inventário em CSV
description: Como exportar a lista de produtos e quantidades do Estoque Simples para uma planilha.
---

{/* MODELO: substitua por uma amostra sua. Mantenha a ficha no topo. */}

<FichaAmostra
  publico="Gerentes de loja que usam o painel do Estoque Simples no dia a dia."
  problema="O suporte recebia muitos chamados sobre arquivos que abriam com acentos quebrados no Excel."
  contribuicao="Guia curto, com a solução para o problema dos acentos no ponto exato em que o leitor precisa dela."
  ferramentas={['Markdown', 'Docusaurus', 'Vale']}
/>

Exporte o inventário quando precisar analisar o estoque em uma planilha ou enviar a contagem para a contabilidade. O arquivo traz todos os produtos ativos com as quantidades do momento da exportação.

## Exportar o arquivo

1. No painel, abra **Relatórios > Inventário**.
2. Em **Período**, escolha a data de referência. Para o estoque atual, deixe **Hoje**.
3. Clique em **Exportar CSV**.

O download começa em alguns segundos. Inventários com mais de 10 mil produtos são enviados por e-mail, em até 15 minutos.

## Abrir no Excel sem erros de acentuação

Se você abrir o arquivo com dois cliques, o Excel pode exibir caracteres trocados, como `CerÃ¢mica` no lugar de `Cerâmica`. Para evitar isso, importe o arquivo:

1. No Excel, abra a guia **Dados** e clique em **De Texto/CSV**.
2. Selecione o arquivo exportado.
3. Em **Origem do arquivo**, escolha **65001: Unicode (UTF-8)**.
4. Clique em **Carregar**.

:::tip
No Google Planilhas, a acentuação já funciona: use **Arquivo > Importar**.
:::

## Colunas do arquivo

| Coluna | Conteúdo |
| --- | --- |
| `sku` | Código do produto definido pela loja. |
| `nome` | Nome do produto. |
| `quantidade` | Unidades em estoque na data escolhida. |
| `atualizado_em` | Data e hora da última movimentação, no fuso de Brasília. |
