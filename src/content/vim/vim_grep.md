---
layout: post
title: 'Vim Grep Script'
author: [bradkim06]
tags: ['Vim Script']
date: '2020-07-28'
draft: false
---
study purpose
--------------
- `<leader>giw`: Grep for the word under the cursor.
- `<leader>giW`: Grep for the WORD under the cursor.
- `<leader>gi'`: Grep for the contents of the single-quoted string you're currently in
- `viwe<leader>g`: Visually select a word, extend the selection to the end of the word after it, then grep for the selected text.

all we need to do is implement the "operator" functionality and Vim will handle the rest.

A Preliminary Sketch
--------------------
We'll map this to `<leader>g` for now.
"create a mapping to search for the word under the cursor".

`<cword>` is a special bit of text you can use in Vim's command-line mode, and Vim will replace it with "the word under the cursor" before running the command.
```vim
:nnoremap <leader>g :grep -R <cword> .<cr>
```

`<cWORD>`Now try the mapping when your cursor is over something like foo-bar. Vim will grep for foo-bar instead of just part of the word.
```vim
:nnoremap <leader>g :grep -R <cWORD> .<cr>
```

Type `foo;ls` search
```vim
:nnoremap <leader>g :grep -R '<cWORD>' .<cr>
```

Reference
---------
[Learn Vimscript the Hard Way Chap 32]<br>

[Learn Vimscript the Hard Way Chap 32]: https://learnvimscriptthehardway.stevelosh.com/chapters/32.html
