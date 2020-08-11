---
layout: post
title: 'Vim Regular Expressions'
author: [bradkim06]
tags: ['Vim Script']
date: '2020-07-28'
draft: false
---
#### Example Code [Python]

```python
max = 10
print "Starting"

for i in range(max):
    print "Counter:", i

    print "Done"
```

#### for loop search methods
- Hard way. execute takes a String so must type double backslashes
```vim
:execute "normal! gg/for .\\+ in .\\+:\<cr>"
```
- Better way. This concatenates the three smaller strings before sending them to execute
```vim
:execute "normal! gg" . '/for .\+ in .\+:' . "\<cr>"
```
- Best way. `\v` tells Vim to use its "very magic" regex parsing mode, which is pretty much the same as you're used to in any other programming language.
```vim
:execute "normal! gg" . '/\vfor .+ in .+:' . "\<cr>"
```

**Using `\v` is the best way.**

Reference
---------
[Learn Vimscript the Hard Way Chap 31]<br>
[regular expression site]<br>

[Learn Vimscript the Hard Way Chap 31]: https://learnvimscriptthehardway.stevelosh.com/chapters/31.html
[regular expression site]: https://regex101.com/
