---
layout: post
title: 'Vim Tips'
author: [bradkim06]
tags: ['Vim Script']
date: '2020-08-11'
draft: false
---

Tip. Vimrc Edit Mapping
---
edit VIMRC Mapping
```vim
:nnoremap <leader>ev :vsplit $MYVIMRC<cr>
```

***

Tip. Vimrc Source Mapping
---
source VIMRC Mapping

```vim
:nnoremap <leader>sv :source $MYVIMRC<cr>
```

***

Tip. Don’t Repeat Yourself
---
복잡한 기능을 줄인 단순한 Mapping을 찾아 써라.

| **단순** | **복잡** | **기능**                         |
|--------|--------|--------------------------------|
| C      | c$     | 현재 커서 위치에서 마지막 라인까지 삭제후 Insert |
| s      | cl     | 현재 커서 문자 삭제후 Insert            |
| S      | ^C     | 현재 라인 삭제 후 Insert              |

***

Tip. Take One Step Back, Then Three Forward
---

#### Purpose
첫번째 문장을 두번째 문장으로 바꾸는 방법.

```vim
var foo = "method("+argument1+","+argument2+")";
```
```vim
var foo = "method(" + argument1 + "," + argument2 + ")"
```

1. 줄의 처음에서 `f+`로 이동
2. `s`명령으로 커서 밑의 글자를 지우고 입력모드 진입
3. ` + `수정. `;`로 다음으로 이동하고 `.`로 반복

>`f[char]`는 현재 라인의 char를 찾아준다. `f+`를 하면 `+`기호를 찾아줌.  
>`.`명령은 가장 최근의 변경을 반복한다.  
>`;`명령은 `f`명령이 수행한 마지막 검색 반복.

***

Tip. Act, Repeat, Reverse
---

| **Intent**                    | **Act**               | **Repeat** | **Reverse** |
|-------------------------------|-----------------------|------------|-------------|
| Make a change                 | \{edit\}              | \.         | u           |
| Scan line for next char       | f\{char\}/t\{char\}   | ;          | ,           |
| Scan line for previous char   | F\{char\}/T\{char\}   | ;          | ,           |
| Scan document for next match  | /pattern<cr>          | n          | N           |
| Scan document for prev match  | ?pattern<cr>          | n          | N           |
| Perform subsitution           | :s/target/replacement | &          | u           |
| Execute a sequence of changes | qx\{changes\}q        | @x         | u           |

***


Reference
---
[Practical Vim](https://www.amazon.com/gp/product/B018T6ZVPK/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B018T6ZVPK&linkCode=as2&tag=nolbookim-20&linkId=45b16dbe20fb6e3a35a594a85f9ba1a6)
