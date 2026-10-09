---
sidebar_position: 2
title: Cadastre seu primeiro produto
description: Tutorial para fazer a primeira integração com a API do Estoque Simples.
---

{/* MODELO: substitua por uma amostra sua. Mantenha a ficha no topo. */}

<FichaAmostra
  publico="Desenvolvedores que vão integrar um sistema de vendas ao Estoque Simples pela primeira vez."
  problema="Quem chegava à API precisava ler quatro páginas de referência antes de conseguir fazer a primeira chamada."
  contribuicao="Tutorial com um único caminho, do token ao primeiro produto cadastrado, testado do zero em uma conta nova."
  ferramentas={['Markdown', 'Docusaurus', 'Postman', 'Vale']}
/>

Neste tutorial, você vai gerar uma chave de acesso, testar a conexão com a API e cadastrar seu primeiro produto. No final, o produto vai aparecer no painel do Estoque Simples com a quantidade que você informou.

O tutorial leva cerca de 10 minutos.

## Antes de começar

Você vai precisar de:

- Uma conta no Estoque Simples com perfil de administrador.
- Um terminal com o `curl` instalado. Ele já vem no macOS, no Linux e no Windows 10 ou superior.

## 1. Gere uma chave de acesso

1. No painel do Estoque Simples, abra **Configurações > Integrações**.
2. Clique em **Gerar chave**.
3. Em **Nome da chave**, digite `tutorial` e clique em **Gerar**.
4. Copie a chave exibida e guarde em um lugar seguro.

:::warning A chave aparece uma única vez
Se você fechar a janela sem copiar, gere uma chave nova e exclua a anterior.
:::

Para não repetir a chave em todos os comandos, salve-a em uma variável de ambiente. Substitua `sua-chave` pelo valor copiado:

```bash
export ESTOQUE_CHAVE="sua-chave"
```

## 2. Teste a conexão

Envie uma requisição para o endpoint `/status`:

```bash
curl https://api.estoque-simples.example/v1/status \
  -H "Authorization: Bearer $ESTOQUE_CHAVE"
```

Se a chave estiver correta, a API responde com:

```json
{
  "status": "ok",
  "loja": "Minha Loja"
}
```

Se a resposta for `401 Unauthorized`, confira se você copiou a chave completa, sem espaços no início ou no final.

## 3. Cadastre o produto

Agora, cadastre uma caneca com 25 unidades em estoque:

```bash
curl https://api.estoque-simples.example/v1/produtos \
  -X POST \
  -H "Authorization: Bearer $ESTOQUE_CHAVE" \
  -H "Content-Type: application/json" \
  -d '{
    "sku": "CAN-001",
    "nome": "Caneca de cerâmica 300 ml",
    "quantidade": 25
  }'
```

A API responde com o produto criado e um `id` gerado automaticamente:

```json
{
  "id": "prd_8f2k1",
  "sku": "CAN-001",
  "nome": "Caneca de cerâmica 300 ml",
  "quantidade": 25,
  "criado_em": "2026-10-07T14:32:10Z"
}
```

## 4. Confira no painel

No painel, abra **Produtos**. A caneca aparece no topo da lista, com 25 unidades.

Pronto: sua integração já consegue criar produtos no Estoque Simples.

## Próximos passos

- Para conhecer todos os campos de um produto, consulte a referência de [POST /produtos](./referencia-post-produtos.md).
- Para tirar um retrato do estoque em planilha, veja [Exportar o inventário em CSV](./exportar-inventario-csv.md).
