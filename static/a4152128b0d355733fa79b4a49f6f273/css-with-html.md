---
layout: post
title: '2-1장. CSS 스타일'
author: [bradkim06]
tags: ['Book - HTML5 For Masterminds']
date: '2020-08-10'
draft: false
---

CSS는 HTML과 함께 동작하는 언어로 문서의 요소에 크기, 색상, 배경, 두께 등의 시각적 스타일을 제공한다.

> CSS3 기능은 대부분 유명한 브라우저의 최신 버전에 통합되고 있다. 하지만 일부 기능은 아직 실험단계다. 이로 인해 이러한 새로운 스타일은 브라우저 엔진별로 효과적으로 사용될 수 있게 -moz-나 -webkit- 같은 접두사를 붙여야 한다.

- **block 요소** : 새로운 줄에 위치한다.
- **inline 요소** : 폭이 초과 되는 경우가 아니면 다음 줄로 변경되지 않는다.

문서에 있는 거의 모든 구조적인 요소는 기본적으로 블록 요소로 취급된다. section, nav, header, footer, div같은 html 태그는 위에서 아래 순으로 위치한다는 의미다.

### 박스 모델
자체적 레이아웃을 생성하기 전에 먼저 브라우저가 HTML 코드를 처리하는 방법을 이해해야 한다. 브라우저는 모든 HTML 요소를 박스로 간주한다. 웹페이지는 특정한 규칙에 따라 공존하는 박스의 그룹이다. 이러한 규칙은 브라우저가 제공하거나 CSS를 이용해 디자이너가 제공하는 스타일로 만들어진다.

CSS에는 브라우저의 스타일을 재작성하고 원하는 디자인을 구성할 수 있는 미리 정의된 프로퍼티의 집합이 있다. 하지만 이러한 프로퍼티는 구체적이지 않다. 다시 말해 올바른 레이아웃을 구성하는 규칙을 만드려면 이들을 서로 결합해야 한다. 이러한 규칙의 결합을 일반적으로 **모델**또는 **레이아웃 시스템**이라 부른다.

### 인라인 스타일
가장 간단한 기법 중 하나로 요소 안에 속성으로 스타일을 지정하는 방법.  
이 방법은 문서가 비정상적으로 커지고 업데이트와 유지보수가 어려우므로 권장하지 않는다.

```html
<p style="color: red">My text</p>
```

<p style="color: red">My text</p>

***

### 내장 스타일

```html
<head>
  // highlight-start
  <style>
    p { color: blue }
  </style>
  // highlight-end
</head>
<body>
  <p>My text</p>
</body>
```

  <p style="color: blue">My text</p>

***

### 외부 파일

```html
<head>
  <link rel="stylesheet" href="mystyles.css"> // highlight-line
</head>
```

CSS 규칙을 적용할 HTML 요소를 선택하는 방법
- keyword
- id
- class

### Keyword 참조

```css
p { font-size: 20px }
```

***

### id 속성으로 참조

css
```css
#text1 { font-size: 20px }
```

html
```html
<p id="text1">My text</p>
```

***

### class 속성으로 참조

css
```css
.text1 { font-size: 20px }
```

html
```html
<p class="text1">My text</p>
```

***

### 임의의 속성으로 참조
스타일을 적용할 정확한 요소를 발견하지 못하는 경우. 속성 선택자(Attribute Selector) 사용  
정규식(Regular Expression) 사용 가능.

css
```css
p[name="mytext"] { font-size: 20px }
p[name^="my"] { font-size: 20px } // "my"로 시작하는 <p> 요소
p[name$="my"] { font-size: 20px } // "my"로 끝나는 <p> 요소
p[name*="my"] { font-size: 20px } // "my"가 포함된 <p> 요소
```

### 유사 클래스로 참조
참조 뒤와 이름 앞에 콜론 `:`을 사용하여 추가된다.

hmlt
```html
<div id="wrapper">
  <p class="mytext1">My text1</p>
  <p class="mytext2">My text2</p>
  <p class="mytext3">My text3</p>
  <p class="mytext4">My text4</p>
</div>
```

css
```css
p:nth-child(2) {
  background: #999999;
}
```

<div id="wrapper">
  <p class="mytext1">My text1</p>
  <p class="mytext2" style="background: #999999">My text2</p>
  <p class="mytext3">My text3</p>
  <p class="mytext4">My text4</p>
</div>

***

### 다양한 활용 방법

```css
p:nth-child(odd) {
  background: #999999;
}

p:nth-child(even) {
  background: #CCCCCC;
}
```

<div id="wrapper">
  <p class="mytext1" style="background: #999999">My text1</p>
  <p class="mytext2" style="background: #CCCCCC">My text2</p>
  <p class="mytext3" style="background: #999999">My text3</p>
  <p class="mytext4" style="background: #CCCCCC">My text4</p>
</div>

***

```css
p:last-child{ 
  background: #999999;
}
```

<div id="wrapper">
  <p class="mytext1">My text1</p>
  <p class="mytext2">My text2</p>
  <p class="mytext3">My text3</p>
  <p class="mytext4" style="background: #999999">My text4</p>
</div>

***

p요소를 제외한 모든 요소에 스타일 적용
```
:not(p) {
  margin: 0px;
}
```

***

### 새로운 선택자

**> Selector**  
부모요소의 바로 아래에 있는 자식 요소를 가리킨다. div요소의 자식인 p요소의 class가 mytext2 경우 수정한다.

```css
div > p.mytext2{
  color: #990000;
}
```

**+ Selector**  
class가 mytext2인 p요소 다음에 있는 p요소에 적용된다.

```css
p.mytext2 + p{
  color: #990000;
}
```

**~ Selector**  
class가 mytext2인 p 요소 다음에 있는 p 요소들에 적용된다.

```css
p.mytext2 ~ p{
  color: #990000;
}
```
