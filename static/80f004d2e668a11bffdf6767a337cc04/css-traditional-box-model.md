---
layout: post
title: '2-2장. 전통적 박스모델'
author: [bradkim06]
tags: ['Book - HTML5 For Masterminds']
date: '2020-08-10'
draft: false
---

### 전통적 박스 모델(Traditional Box Model)
초기의 HTML은 테이블과 함께 시작되었다. 하지만 웹사이트가 더 커지고 복잡해질 경우 table 방식은 유지보수와 크기와 관련된 심각한 문제를 일으킨다.

이러한 문제들로 div태그와 css스타일의 사용으로 table 기능을 대체하였고, 표현으로부터 HTML 구조를 효과적으로 분리시켰다. div요소와 css로 화면에 박스를 생성하고, 특정 크기, 테두리, 색상 등을 제공할 수 있게 됐다. css는 원하는 대로 박스를 구성할 수 있도록 특정 프로퍼티를 제공했고 오늘날 전통적 박스 모델로 알려진 박스 모델을 탄생시켰다.

이 모델의 일부 단점은 테이블을 한동안 존속하게 했지만 Ajax의 성공과 수많은 신규 대화형 어플리케이션의 영향을 받아 대세는 점차 div와 css 스타일이 표준이 됐으며 폭넓게 채택됐다.

#### 예제 템플릿
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="description" content="This is an HTML5 example">
  <meta name="keywords" content="HTML5, CSS3, JavaScript">
  <title>This text is the title of the document</title>
  <link rel="stylesheet" href="mystyles.css">
</head>

<body>
<div id="wrapper">
  <header id="main_header">
    <h1>This is the main title of the website</h1>
  </header>
  <nav id="main_menu">
    <ul>
      <li>home</li>
      <li>photos</li>
      <li>videos</li>
      <li>contact</li>
    </ul>
  </nav>
  <section id="main_section">
    <article>
      <header>
        <hgroup>
          <h1>Title of post One</h1>
          <h2>subtitle of the post One</h2>
        </hgroup>
        <time datetime="2011-12-10" pubdate>posted 12-10-2011</time>
      </header>
      This is the text of my first post
      <figure>
        <img src="https://cdn.pixabay.com/photo/2019/10/08/18/41/nuclear-power-plant-4535760_1280.jpg">
        <figcaption>
          this is the image of the first post
        </figcaption>
      </figure>
      <footer>
        <p>comments (0)</p>
      </footer>
    </article>
    <article>
      <header>
        <hgroup>
          <h1>Title of post Two</h1>
          <h2>subtitle of the post Two</h2>
        </hgroup>
        <time datetime="2011-12-15" pubdate>posted 12-15-2011</time>
      </header>
      This is the text of my second post
      <footer>
        <p>comments (0)</p>
      </footer>
    </article>
  </section>
  <aside id="main_aside">
    <blockquote>Article number one</blockquote>
    <blockquote>Article number two</blockquote>
  </aside>
  <footer id="main_footer">
    Copyright &copy 2010-2011
  </footer>
</div>
</body>
</html>
```

<a href="/html-test/">Result</a>

#### 범용 선택자 `*`

디자인에 일관성을 제공하는 기본 규칙 일반적으로 마진을 Customize하거나 최소 마진을 유지한다.

```css
* {
  margin: 0px;
  padding: 0px;
}
```

> 모든 요소는 박스로 간주된다는 사실을 기억하라.  
> margin은 박스 외부 여백의 크기  
> padding은 박스 내부 여백의 크기이다.

#### 제목 꾸미기

```css
h1 {
  font: bold 20px verdana, sans-serif;
}
h2 {
  font: bold 14px verdana, sans-serif;
}
```

<h1 style="font: bold 20px verdana, sans-serif;">Hello World!</h1>
<h2 style="font: bold 14px verdana, sans-serif;">Hello World!</h2>

***

#### 처음에 선언해야 될 요소들
일부 브라우저는 아래 요소들을 인식하지 못하는 경우가 있다. 블록 요소로 선언해준다.

```css
header, section, footer, aside, nav, article, figure, figcaption, hgroup {
  display: block;
}
```

#### body 중앙 정렬
박스 모델의 첫 번째 요소는 항상 `<body>`이다. 웹페이지의 중앙으로 정렬하는게 보통.

```css
body {
  text-align: center;
}
```

#### 메인 박스 생성
바디의 콘텐츠 최대 크기나 고정 크기를 지정한다.

```css
#wrapper {
  width: 960px; // 고정 너비 960px
  margin: 15px auto; // 상하단 15px 좌우 여백은 자동
  text-align: left;
}
```
