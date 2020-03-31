---
layout: post
title: 关于master分支的页面构建失败，_config.yml文件一直报错
subtitle: 网页背景路径正确却无法显示的问题
tags: [GitHub Pages]
---

经过简单的学习，我想尝试一下更换网页背景，本来只需要将三个变量赋予相应的路径，奈何却无论如何也不显示。
在网上搜索过后，我一度认为自己路径设置出错，但经过排查，也一样没有问题，无奈之下，只好作罢。

今天登录谷歌邮箱看了一眼，发现Github给我发了n多邮件，原来之前的网页一直构建失败了，难怪背景没有更换。

邮件内容如下：


The page build failed for the `master` branch with the following error:

You have an error on line 4 of your `_config.yml` file. For more information, see
https://help.github.com/en/github/working-with-github-pages/troubleshooting-jekyll-build-errors-for-github-pages-sites#config-file-error.

For information on troubleshooting Jekyll see: https://help.github.com/articles/troubleshooting-jekyll-builds

If you have any questions you can submit a request on the Contact GitHub page at
https://support.github.com/contact/pages?repo_id=249618713&page_build_id=171362097

该`master`分支的页面构建失败，并出现以下错误：

您的`_config.yml`文件的第4行出现错误。有关更多信息，请参见https://help.github.com/en/git hub / working-with-github-pages /
疑难解答-jekyll-build- errors-for-github-pages-sites＃config-file-error。

有关对Jekyll进行故障排除的信息，请参阅：https : //help.github.com/articl es / troubleshooting-jekyll- builds

如果您有任何疑问，可以在https://support.github.com的Contact GitHub页面上提交请求。/ con tact / pages？repo_id = 249618713＆page_build_id = 171362097

我是第四行开始进行变量赋值的，而它便从第四行开始报错，一开始我以为第四行有误，可无论如何发现不了错误，我尝试注释第四行，便从第六行也就是下一个变量赋值处开始报错，
一时间我怀疑我整个文件都有错误。

后来仔细看了看Github提供的方法，最后从[YAML linter](https://codebeautify.org/yaml-validator)中进行Validata(验证)后，
出现了`Error : Unable to parse.`(错误：无法解析)的显示。
去代码里一看，正是原来我给背景变量(`navbar-img`)赋值的语句出错了。

一开始`navbar-img`是被注释掉的
“#navbar-img”但我删除“#”后留了一个
**空格**，导致了背景无法显示，config.yml文件处处报错

简单的一个小错误，困扰我了许久，也是自身资历浅薄，这也是我第一次发表博客，以此纪念。
