# 🎬 GhibliExplorer

<div align="center">
  <img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB">
  <img alt="TypeScript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white">
  <img alt="TailwindCSS" src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white">
  <img alt="React Query" src="https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white">
  <img alt="React Router" src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white">
</div>

<br>

<div align="center">
  <a href="README.md">🇺🇸 English</a> | 🇧🇷 <strong>Português</strong>
</div>

<br>

Uma aplicação web moderna e responsiva que busca e exibe dados de filmes da API do Studio Ghibli. Construída como um desafio para o curso de desenvolvimento web DevQuest, com foco em arquitetura limpa, consumo avançado de dados e componentização.

## ✨ Funcionalidades

- **Consumo Dinâmico de Dados:** Integração com a API do Studio Ghibli para listar o catálogo de filmes e detalhes específicos.
- **Cache Inteligente:** Utiliza TanStack Query (React Query) para cache eficiente de dados, reduzindo chamadas desnecessárias à API e gerenciando estados de carregamento e erro de forma elegante.
- **Code Splitting:** Implementa React Router DOM com `lazy()` e `<Suspense>` para otimizar o tempo de carregamento inicial.
- **Arquitetura Limpa:** Uso de custom hooks (`useFilms`, `useFilm`) para separar a lógica de negócio dos componentes visuais.
- **UI Responsiva:** Design totalmente responsivo construído com Tailwind CSS, com um layout inspirado no IMDb para os detalhes dos filmes.
- **Princípio DRY:** Componentes de UI reutilizáveis (Loading, ErrorMessage) e configurações de API centralizadas.

## 🚀 Tecnologias Utilizadas

- **Vite**
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **React Router DOM v6**
- **TanStack Query v5**

## 💻 Como rodar localmente

1. Clone este repositório:
```bash
git clone https://github.com/[SEU_USERNAME]/[SEU_REPOSITORIO].git
```
2. Entre na pasta do projeto:

```Bash
cd [your-repo-name]
```

3. Instale as dependências:


```Bash
npm install
```

4. Inicie o seu servidor de desenvolvimento:

```Bash
npm run dev
```

Projeto desenvolvido como parte do curso DevQuest do <a href="https://www.devemdobro.com/">Dev em Dobro</a>