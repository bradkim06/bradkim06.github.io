---
layout: post
title: 'Vim Autocommands'
author: [bradkim06]
tags: ['Vim Script']
date: '2020-08-11'
draft: false
---

Autocommands는 특정 Event가 발생했을때 Vim 특정 명령을 실행하는 방법.

## Autocommands 구조
```bash
:autocmd BufNewFile * :write
         ^          ^ ^
         |          | |
         |          | The command to run.
         |          |
         |          A "pattern" to filter the event.
         |
         The "event" to watch for.
```

event list는 `:help autocmd-events` 또는 <http://vimdoc.sourceforge.net/htmldoc/autocmd.html#autocmd-events>에서 볼 수 있다.

## Examples

#### 파일을 열때 자동 저장.
```vim
:autocmd BufNewFile * :write
```

#### html 파일을 읽고 저장할때 전체 정렬
```vim
:autocmd BufWritePre,BufRead *.html :normal gg=G
```

#### 각 파일에 맞는 주석 처리
```vim
:autocmd FileType javascript nnoremap <buffer> <localleader>c I//<esc>
:autocmd FileType python     nnoremap <buffer> <localleader>c I#<esc>
```

## Autocmd Problem
아래의 명령을 입력하고 `:messages`로 로그를 보면 "Writing buffer!" 출력을 볼수있다.
```vim
:autocmd BufWrite * :echom "Writing buffer!"
```
하지만 위 명령을 반복해서 해보면 끊임없이 "Writing buffer!"가 늘어나는 것을 볼수 있다.
.vimrc파일을 Sourcing할때마다 위와같은 autocmd는 무한히 반복되어 Vim 속도를 느리게 만들 것이다.

## Grouping Autocommands

```vim
:augroup testgroup " Grouping Autocommands "
  :autocmd! " 기존의 autocmd group clear "
  :autocmd BufWrite * :echom "Cats"
:augroup END
```


