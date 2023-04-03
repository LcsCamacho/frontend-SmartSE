# Projeto Next.js feito para um teste de seleção da empresa Smart-SE
Funções:
* Adicionar veículos ao DataGrid-MUI, editar e excluir no proprio DataGrid.
* Adicionar abastecimento com o relacionamento do veiculo, editar e excluir no próprio DataGrid.
* Cadastrar usuario, fazer login.
* Editar e excluir apenas quem esta logado.
  
## Como começar

Primeiro, insira no seu terminal o seguinte comando:

` yarn install ou npm install`

Depois:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) Com seu navegador para ver o resultado.

Você pode começar a editar a página modificando `pages/index.js`. A página é atualizada automaticamente conforme você edita o arquivo.

## Aprendendo mais

Para aprender mais sobre Next.js, dê uma olhada nos seguintes recursos:

  * [Documentação Next.js](https://nextjs.org/docs) - Aprenda sobre recursos e API Next.js.
  * [Aprenda Next.js](https://nextjs.org/learn) - Um tutorial interativo Next.js.

Desenvolvimento utilizando Redux, MUI Design, Sass, e Typescript. 
Modelado pelo padrão Atomic Design.

## Aprendizados :
* MUI-Design
* DataGrid-MUI - Editar e Excluir dados diretamente da tabela.
* Resolução de problemas com localStorage, refetchs ao inserir dados no banco.
* Organização de código.

## Melhorias :
* Adicionar cálculo de gasolina comum e aditivada, por enquanto o valor esta o mesmo para as duas.
* Adicionar os veículos e os abastecimentos direto no DataGrid-MUI.
* Melhorias no layout da página
* Validação de erro ao editar a placa dos abastecimentos 

## O que eu mais gostei : 
* Durante o projeto surgiu a necessidade e utilizar o localStorage multiplas vezes para construir um objeto... entao foi feito uma função que recebe as tags que referenciam o conteudo do localStorage e retorna um objeto com o conteudo de todas as tags
