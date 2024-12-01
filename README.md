# quiteja-frontend-test

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

## Instruções do projeto

### API para o projeto

https://dummyapi.io/docs

Obs: para utilizar a API, deve se enviar um cabeçalho "app-id" com um id, o id esta no documento .env, esperamos que voce use o mesmo a partir da variavel de ambiente

#### Resource utilizado

https://dummyapi.io/docs/user

### Descrição

Nesse projeto, você devera desenvolver uma aplicação consumindo uma Api externa que lista Usuários, esperamos ver uma tela onde sejam listados os usuários (vai da sua conta e criatividade como mostrar isso, ex: data table, cards e etc...), nessa tela, também deve existir a possibilidade de editar o usuário assim como excluir

#### O que esperamos ver

- Proficiência com Vue.js
- Utilização de libs do eco sistema Vue
- consumo de API's Rest
- Componentização
- Clean Code
- Conhecimentos em material design
- Reatividade com as respostas retornadas da API
- Criatividade

#### O que adorariamos ver

- Persistência do estado da página utilizando query params
- Utilização de módulos namespaced no vuex
- Compatibilidade cross device e cross plataform
- Deploy da aplicaçao em serviços como Netlify ou Aws amplify

### Milestones

1. Fazer um Fork do projeto para desenvolvimento local
2. Criar serviços para isolar a camada de comunicaçao com a API utilizando a lib Axios
3. Adicionar a Biblioteca Vuetify e utlizar seus components
4. Criar a rota /usuários para listar o retorno da API
5. Utilizar o Vuex para gerenciar os estados da aplicação
6. Criar componentes para CRUD actions (editar e excluir)

### Algumas considerações

Ao terminar o projeto, você pode enviar o link do seu repositório (Deixar o mesmo publico) e se tiver alcançado a meta de realizar o deploy, mandar o link junto ao responsável.

### Modificações realizadas e descrição do sistema

1. **Atualização para Vue 3**  
   Optou-se por utilizar o Vue 3 e seu ecossistema principal, substituindo o Vue 2, que não recebe suporte desde 2023. O Vue 3 oferece suporte nativo ao TypeScript, permitindo maior segurança e eficiência no desenvolvimento. Além disso, a _Composition API_ possibilita uma melhor organização do código e maior flexibilidade na construção de componentes.

2. **Gerenciamento de estado com Pinia**  
   Subsitituição do Vuex pelo [Pinia](https://pinia.vuejs.org/), que é a solução oficial de gerenciamento de estado suportada pela equipe do Vue. O Pinia apresenta diversas vantagens, como:

   - **Facilidade de implementação:** API simples e intuitiva.
   - **Melhor desempenho:** Arquitetura otimizada em relação ao Vuex.
   - **Documentação robusta:** Facilidade de aprendizado e uso.

3. **Sobre o sistema**

   - No sistema foram implementadas a vizualização, edição e remoção de usuários.

   - Uma das melhorias implementadas com o Pinia foi o sistema de [cache](src/store/cache.ts), que reduz solicitações desnecessárias à API, otimizando a performance e a experiência do usuário. Isso evita que sejam feitas chamadas a api através de sucessivos reloads forçados (F5) ou transições de páginas muito rápidas. O tempo limite especificado foi de 5s.

   - O deploy do sistema foi feito na Vercel. O link é [projeto](https://quiteja-frontend-test-git-develop-emersonleites-projects.vercel.app/).
