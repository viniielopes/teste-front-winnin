# Teste Front Winnin

Neste teste foi proposto listar os posts do subreddit [Reactjs](https://www.reddit.com/r/reactjs/) utilizando a api do reddit, seguindo este prototipo no [Figma](https://www.figma.com/file/PPvIPPITdlgZo9CeGDVezk/DesafioWinnin?type=design&node-id=0-1&mode=design&t=SOsPte5OTo55VcFB-0).

Bibliotecas e tecnologias que utilizei.

- NextJS
- App Router
- TanStack Query (React Query)
- Zustand
- React Infinite Scroll
- TailwindCSS
- Jest/React Testing library
- StoryBook

Projeto e Storybook estão na Vercel.

[Projeto](https://teste-front-winnin.vercel.app/)

[Storybook](https://teste-front-winnin-ifti.vercel.app/?path=/docs/components-button--docs)

Para rodar local é apenas necessario clonar o repositorio e seguir os seguintes passos:

Instalar as dependências

```jsx
npm install
```

Rodar o ambiente de dev do projeto:

```jsx
npm run dev
```

Para iniciar o storybook é necessario:

```jsx
npm run storybook
```

Features que foram implementadas:

- [x] Testes unitarios
- [x] Documentação dos components com storybook
- [x] Projeto rodando na Vercel
- [x] Dark Mode
- [x] Infinite Scroll
- [x] TabBar fixo ao scrollar.

Cobertura com testes unitarios

![Untitled](https://github.com/viniielopes/teste-front-winnin/assets/26721938/2bebb82f-f330-4f49-ae2d-ee9cc7c040d4)

Não foi possivel utilizar o mock service worker para mockar retornos da api tem essa [Issue](https://github.com/mswjs/msw/issues/1644) aberta e parece que não ta 100% para o NextJS 13.
