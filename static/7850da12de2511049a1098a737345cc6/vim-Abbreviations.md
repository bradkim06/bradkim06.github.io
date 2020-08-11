---
layout: post
title: 'Vim Abbreviations'
author: [bradkim06]
tags: ['Vim Script']
date: '2020-08-11'
draft: false
---

Insert Mode Abbreviations
---
Vim에는 매핑과 비슷하지만 삽입, 교체 및 명령 모드에서 사용하기위한 **약어**라는 기능이 있다.

### Example
```vim
:iabbrev waht what
:iabbrev then then
```
입력  
Well, I do not know **waht** we should do **tehn**.  
출력  
Well, I don't know **what** we should do **then**.

More Abbreviations
---
자주쓰는 텍스트를 약어로 활용 가능하다.

```vim
:iabbrev @@    bradkim06@gmail.com
:iabbrev ccopy Copyright 2020 bradkim06, all rights reserved.
```

What is the difference between Abbreviations and Mapping?
---
Abbreviations와 Mapping은 유사하지만 차이점이 있다.

### Example
`Larry Lessig wrote the book "Remix".`

```vim
" Mapping "
:inoremap ssig -- <cr>bradkim06<cr>bradkim06@gmail.com
" Abbreviations "
:iabbrev ssig -- <cr>bradkim06<cr>bradkim06@gmail.com
```

Mapping은 앞뒤에 오는 문자를 고려하지 않기 때문에 Lessig에서 동작할 것이다.  
Abbreviations은 앞뒤에 오는 문자를 고려하여 ssig에서만 동작한다.
