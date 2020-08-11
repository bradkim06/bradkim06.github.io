---
layout: post
title: 'Vim Setting Options'
author: [bradkim06]
tags: ['Vim Script']
date: '2020-08-11'
draft: false
---

Bool Options
---
:set [name]: true  
:set no[name]: false

```vim
:set number
:set nonumber
```

### Toggling Boolean Options

using `!`

```vim
:set number!
```

### Checking Options

using `?`

```vim
:set number?
```

Options with Values
---
일부 옵션은 Value Range가 있다.

```vim
:set numberwidth=10
```

부울 옵션과  마찬가지로 `?` 명령으로 확인 가능.

```vim
:set wrap?
```

### Setting Multiple Options at Once
**:set**명령에 둘 이상의 옵션 가능.

```vim
:set number numberwidth=6
```

> Vim은 :help 명령을 지원한다. 특정 도움말을 보고싶으면  
> :help [name] or :help '[name]'
