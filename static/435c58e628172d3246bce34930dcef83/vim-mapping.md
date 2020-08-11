---
layout: post
title: 'Vim Mapping'
author: [bradkim06]
tags: ['Vim Script']
date: '2020-08-11'
draft: false
---

Basic Mapping
---
Vim에서는 아주 높은 자유도의 Key Mapping을 지원한다.

```vim
:map - x
```

위의 명령을 입력하고 **-**키를 누르면 문자 하나가 삭제된다.  
:map a b 명령은 a를 입력하면 b가 실행되게 Mapping을 해준다.

Special Characters
---
Space, Ctrl과 같은 특수한 문자는 `<keyname>`으로 사용한다.

```vim
:map <space> viw
:map <C-d> dd " Ctrl+d
:map <S-d> 2dd " Shift+d
```

Modal Mapping
---
Vim은 여러가지 모드(`normal`,`insert`,`visual`)가 존재한다.
특정모드에만 적용되는 Mapping이 `nmap`, `imap`, `vmap` 명령으로 가능하다.

```
:nmap - dd
```

위의 명령은 Insert,Visual모드에선 동작하지 않는다.


### Example - 현재단어 대문자로 변환

```vim
:nmap <S-U> viwU
```

Mapping Problem
---
map, nmap, vmap, imap 등은 여러가지 문제로 인해 사용하지 말것을 권고한다.

### Not working **dd**
```vim
:nmap - dd
:nmap \ -
```

### Recursion **dd**
```vim
:nmap dd O<esc>jddk
```

This mapping is actually recursive! When you press **dd**, Vim says:

- **dd** is mapped, so perform the mapping.
  - Open a line.
  - Exit insert mode.
  - Move down a line.
  - **dd** is mapped, so perform the mapping.
      - Open a line.
      - Exit insert mode.
      - Move down a line.
      - **dd** is mapped, so perform the mapping, and so on.

Nonrecursive Mapping
---
`*noremap`은 기존 Mapping 고려 하지 않는 Mapping이다.

Insert \ -> 1 Line Delete
```vim
:nmap x dd
:nnoremap \ x
```

Leader Key
---
Vim은 custom prefix키를 지원한다.

```vim
" custom prefix "
:let mapleader = ","
:let maplocalleader = "\\"

" Usage "
:nnoremap <leader>d dd
:nnoremap <localleader>d dd
```

A More Complicated Mapping
---

### 단어 앞뒤에 **"**삽입 Example

```
:nnoremap <leader>" viw<esc>a"<esc>bi"<esc>lel
```
