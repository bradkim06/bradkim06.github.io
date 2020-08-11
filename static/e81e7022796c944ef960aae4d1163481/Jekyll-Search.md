---
layout: post
title: 'Implement Jekyll Search'
author: [bradkim06]
tags: ['Jekyll']
date: '2020-08-02'
draft: false
excerpt: Simple-Jekyll-Search
---

**Create search.json** 
---

```liquid
{% raw %}
---
---
[
  {% for post in site.posts %}
    {

      "title"    : "{{ post.title | escape }}",
      "url"      : "{{ site.baseurl }}{{ post.url }}",
      "category" : "{{ post.category }}",
      "tags"     : "{{ post.tags | join: ', ' }}",
      "date"     : "{{ post.date }}"

    } {% unless forloop.last %},{% endunless %}
  {% endfor %}
]
{% endraw %}
```

**Search Script**
---

#### 1. without installing anything
```html
<script src="https://unpkg.com/simple-jekyll-search@latest/dest/simple-jekyll-search.min.js"></script>
```

#### 2. Download Search Script

```html
<!-- Script pointing to search-script.js -->
<script src="/path/to/search-script.js" type="text/javascript"></script>
```

**Search Box**
---
```html
<!-- Html Elements for Search -->
<div id="search-container">
<input type="text" id="search-input" placeholder="search...">
<ul id="results-container"></ul>
</div>
```

**Setting & Usage**
---

```javascript
{% raw %}
var sjs = SimpleJekyllSearch({
  // required option
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  searchResultTemplate: '<li><a href="{{ site.url }}{url}">{title}</a></li>',
  json: '/search.json'
})
{% endraw %}
```

See more option [Simple-Jekyll-Search Wiki](https://github.com/christian-fei/Simple-Jekyll-Search/wiki)

Referece
-------
[christian-fei/Simple-Jekyll-Search](https://github.com/christian-fei/Simple-Jekyll-Search)  
[Jekyll Instant Search in 3 simple steps!](https://blog.webjeda.com/instant-jekyll-search/)

