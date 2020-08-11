---
layout: post
title: 'Gatsby without GraphQL'
author: [bradkim06]
tags: ['gatsby']
date: '2020-08-08'
draft: false
---

Gatsby makes it easy to programmatically control your pages.

**Pages can be created in three ways:**

1. Gatsby core automatically turns React components in src/pages/* into pages. Note that you must make the component the default export
2. Plugins can also implement createPages and create pages for you
You can also implement the API onCreatePage to modify pages created in core or plugins or to create client-only routes.
3. In your site’s gatsby-node.js by implementing the API createPages


>Note: This example is drawn from an example repo built specifically to model how to use this “unstructured data” approach. [View the full repo on GitHub](https://github.com/jlengstorf/gatsby-with-unstructured-data).


### The pros of using unstructured data
- The approach is familiar and comfortable, especially if you’re new to GraphQL
- There’s no intermediate step: you fetch some data, then build pages with it

The approach: fetch data and use Gatsby’s createPages API

Get Pokemon data with REST API
---

Get Pokemon name, ability

```jsx
const axios = require('axios');

const get = endpoint => axios.get(`https://pokeapi.co/api/v2${endpoint}`);

const getPokemonData = names =>
  Promise.all(
    names.map(async name => {
      const { data: pokemon } = await get(`/pokemon/${name}`);
      const abilities = await Promise.all(
        pokemon.abilities.map(async ({ ability: { name: abilityName } }) => {
          const { data: ability } = await get(`/ability/${abilityName}`);

          return ability;
        })
      );

      return { ...pokemon, abilities };
    })
  );
```

[**axios**](https://github.com/axios/axios): Promise based HTTP client for the browser and node.js
**Promise.all**: Wait Async ajax

Create Pokemon Pages
---

```jsx
exports.createPages = async ({ actions: { createPage } }) => {
  const allPokemon = await getPokemonData(['pikachu', 'charizard', 'squirtle', 'charmeleon', 'caterpie']);

  // Create a page that lists all Pokémon.
  createPage({
    path: `/`,
    component: require.resolve('./src/templates/all-pokemon.js'),
    context: { allPokemon }
  });

  // Create a page for each Pokémon.
  allPokemon.forEach(pokemon => {
    createPage({
      path: `/pokemon/${pokemon.name}/`,
      component: require.resolve('./src/templates/pokemon.js'),
      context: { pokemon }
    });

    // Create a page for each ability of the current Pokémon.
    pokemon.abilities.forEach(ability => {
      createPage({
        path: `/pokemon/${pokemon.name}/ability/${ability.name}/`,
        component: require.resolve('./src/templates/ability.js'),
        context: { pokemon, ability }
      });
    });
  });
};
```

`createPages`
Tell plugins to add pages. This extension point is called only after the initial sourcing and transformation of nodes plus creation of the GraphQL schema are complete so you can query your data in order to create pages.

`createPage`
Create a page. See more

### Parameters
- **page** {Object}
a page object
    - **path** {string}
    Any valid URL. Must start with a forward slash
    - **matchPath string**
    Path that Reach Router uses to match the page on the client side. Also see docs on matchPath
    - **component string**
    The absolute path to the component for this page
    - **context Object**
    Context data for this page. Passed as props to the component this.props.pageContext as well as to the graphql query as graphql arguments.

- **plugin**{optional)
Plugin
- **actionOptions**(optional)
ActionOptions

all-pokemon.js
---

```jsx
import React from 'react';
import { Link } from 'gatsby';

export default ({ pageContext: { allPokemon } }) => (
  <div style={{ width: 960, margin: '4rem auto' }}>
    <h1>Choose a Pokémon!</h1>
    <ul style={{ padding: 0 }}>
      {allPokemon.map(pokemon => (
        <li
          key={pokemon.id}
          style={{
            textAlign: 'center',
            listStyle: 'none',
            display: 'inline-block'
          }}
        >
          <Link to={`/pokemon/${pokemon.name}`}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>{pokemon.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
```

Result
---

![image](../img/pokemon.jpg)

Reference
---
[Using Gatsby Without GraphQL](https://www.gatsbyjs.org/docs/using-gatsby-without-graphql/#the-approach-fetch-data-and-use-gatsbys-createpages-api)
