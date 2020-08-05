---
layout: post
title: 'The Basic of Jekyll'
author: [bradkim06]
tags: ['Jekyll']
date: '2020-07-29'
draft: false
excerpt: Study Jekyll Basic.
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
