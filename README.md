# 🎯 Pokédex - BSN

<p align="center"> <img src="https://i.postimg.cc/mDXZ8N0h/entei.png" alt="Pokédex Main Page" width="500"/> </p> <p align="center"> Projeto desenvolvido com <strong>Ionic + Angular</strong> focado em responsividade,
  experiência do usuário e código limpo.<br> Consome dados da <a href="https://pokeapi.co/">PokéAPI</a> e oferece uma navegação fluida, com interface moderna, leve e intuitiva.<br> Conta com sistema de favoritos 
  persistente, navegação dinâmica e layout otimizado para dispositivos móveis e desktop. </p>
  

## ✨ Funcionalidades

**🧭 Navegação Intuitiva**

* Acesse rapidamente qualquer Pokémon pelo nome.

**🏠 Home Page**

* Pesquise e visualize cards com as informações principais.

<p align="center"> <img src="https://i.postimg.cc/7LBbWkzx/Informa-es-Poke.gif" alt="Home Page Demonstração" width="500"/> </p>

**🔍 Detalhes do Pokémon**

* Veja informações detalhadas como ID, altura, peso, habilidades, experiência, ordem e sprites (incluindo shiny).

<p align="center"> <img src="https://i.postimg.cc/kgs52mfx/enteidescricao.png" alt="Detalhes do Pokemon" width="500"/> </p>

**⏩ Navegação entre Pokémons**

* Avance ou retorne facilmente entre Pokémons sem voltar para a busca.

<p align="center"> <img src="https://i.postimg.cc/Dwx22cw6/Paginacao-Poke.gif" alt="Paginação" width="500"/> </p>

**⭐ Favoritos**

* Marque seus Pokémons favoritos e acesse rapidamente via um moderno bottom sheet, com persistência em localStorage.

<p align="center"> <img src="https://i.postimg.cc/KvFFBWKQ/favoritos-Poke.gif" alt="Favoritos" width="500"/> </p>


## 🚀 Tecnologias Utilizadas
**Frontend:**

* 🔥 [**Angular**](https://angular.dev/) – Framework para construção da interface.
* 🌐 [**Ionic Framework**](https://ionicframework.com/) – Layout responsivo e componentes mobile first.

**Dados:**
* 📦 **LocalStorage** – Para persistência local dos favoritos.
* 🔗 [**PokéAPI**](https://pokeapi.co/) – API pública de dados dos Pokémons.

## ⚙️ Como Rodar o Projeto

```bash
# 1. Clone este repositório
git clone https://github.com/GiulioArantes/pokeapi-bsn.git

# 2. Acesse a pasta do projeto
cd pokeapi-bsn

# 3. Instale as dependências
npm install

# 4. Rode o projeto localmente
ionic serve
```


## 🤝 Contribuição

Obrigado por visitar este projeto!
Se quiser trocar uma ideia, dar feedback, tirar dúvidas ou simplesmente conversar sobre desenvolvimento, sinta-se à vontade para me contatar:
* 💼 Meu [LinkedIn](https://www.linkedin.com/in/giulio-arantes/)
* 📧 giulio.arantes@icloud.com

Será um prazer conversar com você! 😊

> ⚠ Este projeto foi desenvolvido utilizando **Ionic + Angular**, priorizando **responsividade, experiência do usuário** e um **código limpo e escalável**. A busca e visualização dos Pokémons é feita via **PokéAPI**, com navegação fluida entre páginas e seus respectivos detalhes. A funcionalidade de favoritos conta com persistência utilizando **localStorage**, acessível através de um **bottom sheet moderno**, inspirado nos padrões de apps mobile.
A estilização em CSS foi cuidadosamente ajustada para oferecer uma interface agradável em qualquer dispositivo, mantendo a identidade visual do **Ionic**. A arquitetura segue princípios de componentização, utilizando **serviços Angular** para centralizar as regras de negócio, especialmente na manipulação dos favoritos e das requisições.
As **rotas standalone** foram adotadas para tornar a navegação mais modular e facilitar futuras expansões. Todo o desenvolvimento seguiu práticas que priorizam **acessibilidade, performance, manutenibilidade e usabilidade**, com animações suaves e feedbacks visuais consistentes. A lógica foi planejada para ser **intuitiva, sustentável e de fácil adaptação**, caso novas funcionalidades sejam implementadas no futuro.
