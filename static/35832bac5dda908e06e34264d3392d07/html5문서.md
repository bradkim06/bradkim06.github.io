---
layout: post
title: '1장. HTML5 문서'
author: [bradkim06]
tags: ['Book - HTML5 For Masterminds']
date: '2020-08-10'
draft: false
---

HTML5의 기본 구성
---
- 구조(Structure) - HTML
- 스타일(Style) - CSS
- 기능(Function) - JavaScript


`<!DOCTYPE html>`
> 이 줄은 파일의 첫 번째 줄에 있어야 하며 이 줄 앞에 공백이나 다른 줄이 있으면 안된다. 독타입은 표준 모드를 활성화하고 가능하면 브라우저가 HTML5를 해석하게 하고 그렇지 않으면 무시하게 하는 방법.

`<html>`  
```html
<!DOCTYPE html>
// highlight-start
<html lang="en">
</html>
// highlight-end
```

lang 속성의 사용 가능한 언어는 <https://www.w3schools.com/tags/ref_language_codes.asp> 에서 확인 가능하다.

> HTML5는 구조와 구조 구성에 사용되는 요소와 관련하여 매우 유연하다. <html> 요소는 속성 없이 추가할 수 있으며 심지어 완전히 무시할 수도 있다. 하지만 호환성 등 여러가지 이유로 기본 규칙을 준수하는 것이 좋다.



`<head>`  

html 태그 사이에 삽입된 HTML 코드는 두 개의 메인 섹션으로 나눠야 한다.  `<head>` , `<body>`

```html
<!DOCTYPE html>
<html lang="en">
// highlight-start
<head>
</head>
// highlight-end
</html>
```

웹 페이지의 제목을 정의하고, 문자 인코딩을 선언하며, 문서의 일반적인 정보, 스타일, 스크립트, 페이지 렌더링에 필요한 이미지 등의 외부 파일을 포함한다.

`<body>`  

```html
<!DOCTYPE html>
<html lang="en">
<head>
</head>
// highlight-start
<body>
</body>
// highlight-end
</html>
```

`<meta>`  
문서의 문자 인코딩을 정의하는 meta 태그로 텍스트를 화면에 표시하는 방법, Description, Kewords 등.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  // highlight-start
  <meta charset="utf-8">
  <meta name="description" content="This is an HTML5 example">
  <meta name="keywords" content="HTML5, CSS3, JavaScript">
  // highlight-end
</head>
</html>
```

`<title>`  
일반적으로 title 태그는 단순 문서의 제목을 지정한다.

```html
<head>
  // highlight-start
  <title>This text is the title of the document</title>
  // highlight-end
</head>
```

`<link>`  
문서 내에서 외부 파일의 스타일, 스크립트, 이미지, 아이콘을 포함하는데 사용된다.

```html
<head>
  // highlight-start
  <link rel="stylesheet" href="mystyles.css">
  // highlight-end
</head>
```

> 스타일은 반드시 외부 파일에서 가져오는 방식을 강력히 권장한다. CSS 규칙을 외부 문서에서 로드하면 메인 문서를 체계적으로 구성할 수 있으며, 웹사이트의 로딩 속도가 향상되고, 새로운 HTML5 기능을 활용할 수 있다.

`<body>`  
HTML은 항상 문서의 body에 정보를 구축하고 구성하는 다양한 종류의 방법(table, div 등)을 제공한다.

![html-body](../../img/book-html5/stylingblocks.png)

`<header>`  
섹션의 헤더를 표시하는 용도지만 인덱스, 검색 폼, 로고 등을 묶는 데에도 사용한다.

```html
<body>
  // highlight-start
  <header>
    <h1>This is the main title of the website</h1>
  </header>
  // highlight-end
</body>
```

`<nav>`  
메뉴나 인덱스 같은 내비게이션 목적의 링크 섹션.

```html
<body>
  // highlight-start
  <nav>
    <ul>
      <li>home</li>
      <li>photos</li>
      <li>videos</li>
      <li>contact</li>
    </ul>
  </nav>
  // highlight-end
</body>
```

`<section>`  
일반적으로 column같은 여러 컨텐츠 구역을 구축하는 데 사용한다. 예컨대 Page, Chapter, Post 등 특정 테마를 공유하는 콘텐츠를 그룹화하는 데 사용한다.

```html
<body>
  <header>
  </header>
  <nav>
  </nav>
    // highlight-start
  <section>
    <p>Hello World!</p>
  </section>
    // highlight-end
</body>
```

`<aside>`  
메인 콘텐츠와 관련 있지만 그 일부는 아닌 콘텐츠. 예컨대 인용, 사이드바의 정보, 광고 등.

```html
<body>
  <section>
  </section>
    // highlight-start
  <aside>
    <blockquote>Article number one</blockquote>
    <blockquote>Article number two</blockquote>
  </aside>
    // highlight-end
</body>
```

`<footer>`  
문서의 바디 끝. 문서의 추가 정보 제공.

```html
<body>
  <aside>
  </aside>
    // highlight-start
  <footer>
    Copyright &copy; 2010-2011
  </footer>
    // highlight-end
</body>
```

body 내부
---

`<article>`  
section 내부의 독립적인 콘텐츠 항목들. 중첩이 가능하다.

![article](../../img/book-html5/article.jpg)

```html
<body>
  <section>
    // highlight-start
    <article>
      This is the text of my first post
    </article>
    <article>
      This is the text of my second post
    </article>
    // highlight-end
  </section>
</body>
```

<body>
  <section>
    <article>
      This is the text of my first post
    </article>
    <article>
      This is the text of my second post
    </article>
  </section>
</body>

******************

`<hgourp>`  
header에 제목과 부제목 또는 더 많은 H태그를 함께 배치해야 할 때 사용한다.

```html
<body>
  <section>
    <article>
      <header>
    // highlight-start
        <hgroup>
          <h1>Title of post One</h1>
          <h2>subtitle of the post One</h2>
        </hgroup>
    // highlight-end
      </header>
          This is the text of my first post
    </article>
    <article>
      <header> 
    // highlight-start
        <hgroup>
          <h1>Title of post Two</h1>
          <h2>subtitle of the post Two</h2>
        </hgroup>
    // highlight-end
      </header>
          This is the text of my second post
    </article>
  </section>
</body>

```

<body>
  <section>
    <article>
      <header>
        <hgroup>
          <h1>Title of post One</h1>
          <h2>subtitle of the post One</h2>
        </hgroup>
      </header>
          This is the text of my first post
    </article>
    <article>
      <header> 
        <hgroup>
          <h1>Title of post Two</h1>
          <h2>subtitle of the post Two</h2>
        </hgroup>
      </header>
          This is the text of my second post
    </article>
  </section>
</body>

******************

`<figure>`와 `<figcaption>`  
독립적 콘텐츠(삽화, 사진, 비디오 등)을 식별하는 태그.

```html
<body>
  <section>
    <article>
      <header>
        <hgroup>
          <h1>Title of post One</h1>
          <h2>subtitle of the post One</h2>
        </hgroup>
      </header>
          This is the text of my first post
    // highlight-start
      <figure>
        <img src="https://cdn.pixabay.com/photo/2019/10/08/18/41/nuclear-power-plant-4535760_1280.jpg">
        <figcaption>
          This is the image of the first post
        </figcaption>
      </figure>
    // highlight-end
    </article>
  </section>
</body>
```

<body>
  <section>
    <article>
      <header>
        <hgroup>
          <h1>Title of post One</h1>
          <h2>subtitle of the post One</h2>
        </hgroup>
      </header>
          This is the text of my first post
      <figure>
        <img src="https://cdn.pixabay.com/photo/2019/10/08/18/41/nuclear-power-plant-4535760_1280.jpg">
        <figcaption>
          This is the image of the first post
        </figcaption>
      </figure>
    </article>
  </section>
</body>

******************

`<mark>`  
검색 문자열과 일치하는 텍스트의 부분에 하이라이트 표시. 'car' 검색

```html
<span>My <mark>car</mark> is red</span>
```

<span>My <mark>car</mark> is red</span>

******************

기타 비슷한 용도의 태그들
- `<em>` : 강조 표시에 사용한다. 예전에 사용한 `<i>`태그를 대체.
- `<strong>` : 중요 표시에 사용.
- `<b>` : 적합한 다른 요소가 없는 경우에 사용.

`<small>`  
이전에는 작은 폰트로 나타내는 데 사용했다. HTML5에서 새로운 목적은 저작권, 면책 조항등의 작은 문구를 나타내는 태그.

```html
<small>Copyright &copy; 2011 MinkBooks</small>
```

<small>Copyright &copy; 2011 MinkBooks</small>

******************

`<cite>`  
책, 영화, 음악 등의 제목을 둘러싼다.

```html
<span>I love the movie <cite>Temptations</cite></span>
```

<span>I love the movie <cite>Temptations</cite></span>

******************

`<address>`  
article요소나 전체 body의 콘텐츠에 대한 연락처 정보를 나타내는 요소.

```html
<footer>
  // highlight-start
  <address>
    <a href="http://bradkim06.github.io">bradkim06</a>
  </address>
  // highlight-end
</footer>
```

<footer>
  <address>
    <a href="http://bradkim06.github.io">bradkim06</a>
  </address>
</footer>

***

`<time>`  
article에 게시된 일자를 추가할 수 있다. p요소를 사용해 날짜를 보여줄 수 있지만 HTML5에는 이와 같은 목적에 특화된 요소가 있다. time요소는 기계가 인식할 수 있는 타임 스탬프와 사람이 인식할 수 있는 텍스트를 선언하여 일자와 시간을 표시한다.

```html
<article>
  <header>
    <h1>Title of post Two</h1>
    <time datetime="2020-08-10" pubdate>posted 10-08-2020</time> // highlight-line
  </header>
  This is the text of the article
</article>
```

<article>
  <header>
    <h1>Title of post Two</h1>
    <time datetime="2020-08-10" pubdate>posted 10-08-2020</time>
  </header>
  This is the text of the article
</article>

***

Reference Link
---
[Book Homepage](http://www.minkbooks.com/)
