---
title: Autonomous mobile robot simulation and navigation in ROS and Gazebo
summary: Implemented SLAM algorithm A-LOAM for mapping, and navigated robot in Gazebo.
tags:
  - Autonomous mobile robot
  - ROS
date: '2023-04-01T00:00:00Z'

# Optional external URL for project (replaces project detail page).
external_link: ''

image:
  caption: ''
  focal_point: Smart

# links:
#   - icon: twitter
#     icon_pack: fab
#     name: Follow
#     url: https://twitter.com/georgecushen
url_code: 'https://github.com/SimonTao0831/mobile_final_group12'
url_pdf: ''
url_slides: ''
url_video: ''

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
# slides: example
---
Date: 2023-04

![map](./map.png)

The above results show that the map obtained after applying the filter retains the original information while removing the influence of ground noise, thus can be used for subsequent navigation work.

We put obstacles at gazebo randomly and observe the performance of navigation algorithm, some avoiding obstacle effects are shown as follows:

![navigation](./navigation.png)

![navigation_video](./navigation_video.gif)

Thanks to other team members, [Zifan Zhou](https://www.linkedin.com/in/zifan-zhou-500932288/), [Ceng Zhang](https://www.linkedin.com/in/ceng-zhang-3854a3185/), and Wending Zhang.
