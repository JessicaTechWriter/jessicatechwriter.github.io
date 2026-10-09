---
sidebar_position: 4
title: POST /produtos
description: Referência do endpoint que cadastra um produto na API do Estoque Simples.
---

{/* MODELO: substitua por uma amostra sua. Mantenha a ficha no topo. */}

<FichaAmostra
  publico="Desenvolvedores que já integram com a API e consultam detalhes durante o trabalho."
  problema="A referência antiga era gerada só do código: sem exemplos, sem regras de validação e com erros sem explicação."
  contribuicao="Padrão de página de referência, com tabelas escaneáveis, exemplos completos e uma ação de correção para cada erro."
  ferramentas={['OpenAPI 3.1', 'Markdown', 'Postman', 'Docusaurus']}
/>

Cadastra um produto no estoque da loja.

```http
POST https://api.estoque-simples.example/v1/produtos
```

## Autenticação

Envie a chave de acesso no cabeçalho `Authorization`:

```http
Authorization: Bearer <sua-chave>
```

A chave precisa da permissão **Produtos: escrita**.

## Corpo da requisição

Formato: `application/json`.

| Campo | Tipo | Obrigatório | Descrição |
| --- | --- | --- | --- |
| `sku` | string | Sim | Código único do produto na loja. De 3 a 40 caracteres: letras, números e hífen. |
| `nome` | string | Sim | Nome exibido no painel e nos relatórios. Até 120 caracteres. |
| `quantidade` | integer | Não | Unidades em estoque. Padrão: `0`. Não aceita valores negativos. |
| `preco_centavos` | integer | Não | Preço de venda em centavos. Por exemplo, `4990` para R$ 49,90. |
| `ativo` | boolean | Não | Se `false`, o produto fica fora dos relatórios. Padrão: `true`. |

## Exemplo de requisição

```bash
curl https://api.estoque-simples.example/v1/produtos \
  -X POST \
  -H "Authorization: Bearer $ESTOQUE_CHAVE" \
  -H "Content-Type: application/json" \
  -d '{
    "sku": "CAN-001",
    "nome": "Caneca de cerâmica 300 ml",
    "quantidade": 25,
    "preco_centavos": 4990
  }'
```

## Resposta de sucesso

Status `201 Created`. O corpo traz o produto cadastrado:

```json
{
  "id": "prd_8f2k1",
  "sku": "CAN-001",
  "nome": "Caneca de cerâmica 300 ml",
  "quantidade": 25,
  "preco_centavos": 4990,
  "ativo": true,
  "criado_em": "2026-10-07T14:32:10Z"
}
```

| Campo | Tipo | Descrição |
| --- | --- | --- |
| `id` | string | Identificador gerado pela API. Use-o para consultar, alterar ou excluir o produto. |
| `criado_em` | string | Data e hora do cadastro, em UTC e no formato ISO 8601. |

Os demais campos repetem os valores enviados ou os valores padrão.

## Erros

| Status | Código | Causa | Como corrigir |
| --- | --- | --- | --- |
| `400` | `campo_invalido` | Um campo não segue as regras da tabela acima. O campo `detalhes` da resposta indica qual. | Corrija o valor e envie de novo. |
| `401` | `chave_invalida` | A chave não existe, foi excluída ou está incompleta. | Gere uma nova chave em **Configurações > Integrações**. |
| `403` | `sem_permissao` | A chave não tem a permissão **Produtos: escrita**. | Edite a chave e marque a permissão. |
| `409` | `sku_duplicado` | Já existe um produto com esse `sku`. | Use outro `sku` ou altere o produto existente. |
| `429` | `limite_excedido` | Mais de 120 requisições no último minuto. | Aguarde o tempo indicado no cabeçalho `Retry-After`. |

Exemplo de resposta de erro:

```json
{
  "erro": {
    "codigo": "sku_duplicado",
    "mensagem": "Já existe um produto com o SKU CAN-001.",
    "detalhes": { "campo": "sku" }
  }
}
```
