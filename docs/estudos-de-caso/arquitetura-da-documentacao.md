---
sidebar_position: 1
title: Como planejei a documentação do Estoque Simples
sidebar_label: Arquitetura da documentação
description: Estudo de caso sobre as decisões de estrutura, processo e revisão por trás das amostras deste portfólio.
---

{/*
  MODELO: este estudo descreve as amostras do próprio portfólio.
  Substitua por um caso real seu, mantendo as seções:
  Contexto, Desafio, O que eu fiz, Resultado e O que eu faria diferente.
  Se o caso for de um empregador, remova nomes e dados confidenciais.
*/}

## Contexto

O Estoque Simples é um produto fictício que criei para este portfólio: uma API e um painel web de controle de estoque para pequenas lojas. A documentação atende dois públicos com necessidades diferentes: desenvolvedores que fazem a integração e gerentes de loja que usam o painel.

## Desafio

Eu queria que cada página tivesse uma única função clara para o leitor. Documentação que mistura tutorial, explicação e referência na mesma página costuma falhar com todos os públicos: quem está aprendendo se perde nos detalhes, e quem só quer consultar um parâmetro precisa atravessar um passo a passo.

## O que eu fiz

**Separei o conteúdo por tipo.** Usei o framework [Diátaxis](https://diataxis.fr/) como base. Cada página é um tutorial, um guia de tarefa ou uma referência, e o tipo define o tom, o tamanho e a estrutura.

**Escrevi a partir das tarefas.** Antes de escrever, listei o que cada público precisa fazer. O título de cada guia é uma tarefa, como "Exportar o inventário em CSV", e não o nome de uma tela.

**Tratei a documentação como código.** As páginas são arquivos Markdown versionados no Git. Cada alteração passa por um pull request, o Vale verifica o guia de estilo automaticamente e o GitHub Actions publica o site a cada mudança aprovada.

**Testei o tutorial do zero.** Segui cada passo em uma conta nova, sem atalhos, e anotei os pontos em que travei. Esses pontos viraram avisos no texto, como o alerta de que a chave de acesso aparece uma única vez.

## Resultado

- Quatro tipos de página com estruturas consistentes, prontas para servir de modelo a novas páginas.
- Um guia de estilo verificado automaticamente, com regras como evitar `clique aqui` e palavras que minimizam a dificuldade, como `simplesmente`.
- Um fluxo de publicação sem etapas manuais.

## O que eu faria diferente

Ainda falta uma página de **explicação**, o quarto tipo do Diátaxis, sobre como o Estoque Simples calcula o estoque disponível quando há pedidos em aberto. É o próximo item da lista.
