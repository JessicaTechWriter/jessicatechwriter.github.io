---
sidebar_position: 5
title: Mensagens de erro reescritas
description: Antes e depois de três mensagens de erro do painel do Estoque Simples.
---

{/* MODELO: substitua pelos seus exemplos. O componente Revisao conta as palavras sozinho. */}

<FichaAmostra
  publico="Gerentes de loja que usam o painel, muitas vezes no celular e com pressa."
  problema="As mensagens descreviam a falha do ponto de vista do sistema e não diziam o que fazer em seguida."
  contribuicao="Revisão de 40 mensagens com um padrão de três partes: o que aconteceu, por que e como resolver."
  ferramentas={['Figma', 'Planilha de inventário de textos', 'Guia de estilo']}
/>

Uma boa mensagem de erro responde a três perguntas: o que aconteceu, por que aconteceu e o que a pessoa pode fazer agora. Abaixo estão três exemplos da revisão.

## Falha no envio de arquivo

<Revisao
  antes="Erro 413: Payload Too Large. A requisição não pôde ser processada pelo servidor."
  depois="O arquivo tem mais de 5 MB. Reduza o tamanho da imagem e tente de novo."
  nota="O código HTTP não ajuda quem está no painel. Troquei pelo limite real e por uma ação possível."
/>

## Campo obrigatório vazio

<Revisao
  antes="Ocorreu um erro de validação. Verifique os campos do formulário e tente novamente."
  depois="Preencha o SKU para salvar o produto."
  nota="A mensagem genérica obrigava a pessoa a procurar o problema. Agora ela aparece junto do campo e diz exatamente o que falta."
/>

## Sessão expirada

<Revisao
  antes="Sua sessão expirou devido a inatividade. Por motivos de segurança, todas as alterações não salvas foram descartadas e você precisará realizar o login novamente."
  depois="Você ficou 30 minutos sem usar o painel e saiu da conta. Entre de novo para continuar. As alterações não salvas foram perdidas."
  nota="Mantive a informação sobre a perda de dados, mas na ordem em que a pessoa precisa: o que houve, o que fazer, o que mudou."
/>

## Padrão adotado

| Parte | Pergunta que responde | Exemplo |
| --- | --- | --- |
| O que aconteceu | O que deu errado? | O arquivo tem mais de 5 MB. |
| Por que | O que causou isso? Omitir quando for óbvio. | O limite de envio é 5 MB. |
| Como resolver | O que eu faço agora? | Reduza o tamanho da imagem e tente de novo. |
