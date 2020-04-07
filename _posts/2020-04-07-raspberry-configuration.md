---
layout: post
title: 树莓派初始配置
subtitle: 树莓派绿灯四闪问题
tags: [Raspberry]
---

在我使用树莓派的这段时间里，遇到过了两次绿灯四闪问题，但我始终没有找到好的解决方法，网上有说是缺少start文件，但没有解决方法
我唯一能做的办法就是重新烧录树莓派的系统，但是每次烧录费时费力，很多知识忘记，导致又要重新学习，所以特意记下。

## 系统镜像
系统镜像可以直接去[官网](https://www.raspberrypi.org/)下载，当然国内速度让人内心是很无奈的。
然后使用烧录软件，我用的是Win32DiskImager烧录进SD卡，结束后不要格式化。
我用的是官方镜像，需要在根目录下新建一个无后缀的ssh文件。

## 更换镜像源
使用自带的下载地址实在太慢，所以一上来要先更换一下国内下载源：
```
sudo nano /etc/apt/sources.list
```
```
deb http://mirrors.tuna.tsinghua.edu.cn/raspbian/raspbian/ stretch main contrib non-free rpi
deb-src http://mirrors.tuna.tsinghua.edu.cn/raspbian/raspbian/ stretch main contrib non-free rpi
```
```
sudo nano /etc/apt/sources.list.d/raspi.list
```
```
deb http://mirrors.tuna.tsinghua.edu.cn/raspberrypi/ stretch main ui
deb-src http://mirrors.tuna.tsinghua.edu.cn/raspberrypi/ stretch main ui
```
然后更新一下
```
sudo apt-get update
sudo apt-get upgrade
```
删除默认的vi，再安装一下vim
```
sudo apt-get remove vim-common
sudo apt-get install vim
```
更换一下pip的镜像源
```
sudo vim /etc/pip.conf
```
在文件里面添加一句
```
index-url=https://mirrors.aliyun.com/pypi/simple/
```
## 下列软件包有未满足的依赖关系：xxxx 依赖: xxxx 但是它将不会被安装
https://www.jianshu.com/p/946964725967
