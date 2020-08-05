---
layout: post
title: Tips of Jekyll
image: img/testimg-cover.jpg
author: [bradkim06]
date: 2020-07-31
tags:
  - Jekyll
---
Link
-----
[How to enable horizontal scrolling in Jekyll with Lanyon](https://stackoverflow.com/questions/31713994/how-to-enable-horizontal-scrolling-in-jekyll-with-lanyon)

[How to display {% raw %} and {% endraw %} using markdown?](https://stackoverflow.com/questions/47106191/how-to-display-raw-and-endraw-using-markdown)

[Liquid](https://jekyllrb-ko.github.io/docs/liquid/)

How to write liquid codeblock in markdown
-----------------------------------------
```markdown
{% raw %}
<ul>
    {% for item in site.data.samplelist[page.sidebar] %}
        <li><a href="{{ item.url }}">{{ item.title }}</a></li>
    {% endfor %}
</ul>
{% endraw %}
```

