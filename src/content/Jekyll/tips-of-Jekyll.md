---
layout: post
title: 'Jekyll Tips'
author: [bradkim06]
tags: ['Jekyll']
date: '2020-07-31'
draft: false
excerpt: Collection Jekyll Tips.
---
Jekyll
-------
Jekyll is a static site generator. You give it text written in your favorite markup language and it uses layouts to create a static website. You can tweak how you want the site URLs to look, what data gets displayed on the site, and more.

gem
----
A gem is code you can include in Ruby projects. It allows you to package up functionality and share it across other projects or with other people. Gems can perform functionality such as:
- Converting a Ruby object to JSON
- Pagination
- Interacting with APIs such as GitHub
- Jekyll itself is a gem as well as many Jekyll plugins including jekyll-feed<br>,jekyll-seo-tag and jekyll-archives.

Gemfile
-------
A Gemfile is a list of gems required for your site. For a simple Jekyll site it might look something like this:

~~~ruby
source "https://rubygems.org"

gem "jekyll"

group :jekyll_plugins do
  gem "jekyll-feed"
    gem "jekyll-seo-tag"
    end
~~~

Bundler
-------
Bundler installs the gems in your Gemfile. It's not essential to use. However highly recommend as it help using Jekyll.

Usage
-----
Run Local Site[bundle exec can be omiited]
~~~zsh
bundle exec jekyll serve
~~~
Options
~~~
--livereload [Real Time Running except _config.yml]
~~~
Reference
---------
[Jekyll](https://jekyllrb.com/)
[Using Jekyll with Bundler](https://jekyllrb.com/tutorials/using-jekyll-with-bundler/)
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

