---
layout: post
title: 'Vim Buffer'
author: [bradkim06]
tags: ['Vim Script']
date: '2020-08-11'
draft: false
---

Buffer
---
Vim에서 Buffer란 현재 열려있는 창을 의미한다.


```vim
$ vim foo bar
" 버퍼 간 이동 Vim에서 다음 명령을 실행 "
:bnext
" Help Document "
:h buffer-list
```

Vim에서 두 개의 파일을 연다. foo 파일에서 다음 명령을 입력한다.
```vim
:nnoremap <buffer> <leader>x dd
:nnoremap <leader>d dd
```
<leader>x , <leader>d가 기대한대로 작동한다.  
bar 파일로 옮겨서 단축키를 쓰면 <leader>x는 작동하지 않는다.  
`<buffer>`는 현재 버퍼만 적용하는 명령이다.

Local Settings
---
Setting 역시도 Buffer별로 가능하다.

```vim
:setlocal wrap
:setlocal nonumber
```

로컬의 매핑 속성
---
아래 Mapping 등록하고 사용하면 첫번째 매핑이 사용 된다.  
Vim은 좀 더 구채적인 명령은 우선순위로 둔다.
```vim
:nnoremap <buffer> Q x
:nnoremap          Q dd
```
