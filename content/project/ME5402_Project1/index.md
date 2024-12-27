---
title: UR5e modeling and simulation
summary: Simulation in MATLAB for robotic arm UR5e trajectory planning without relying on the Robotics System Toolbox.
tags:
  - Trajectory planning
  - Kinematics
  - MATLAB
date: '2023-03-01T00:00:00Z'

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
url_code: 'https://github.com/SimonTao0831/Robot-arm-writes-word'
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
Date: 2023-03

The simulation process is shown, the word ‘FLOW’ can be written well. The whole process is to move to the starting point of a letter, start writing until the end point, move to the starting point of the next letter, until all are completed, and pause for 2s at the beginning and end of each letter.

![result1](./result1.png)

For the details, we choose the front view of the word in above figure. All points are in the x-z plane, the dense part represents the acceleration and deceleration process, the sparse part represents the uniform velocity process.

![flow1_video](./flow1_video.gif)

![flow1_video2](./flow1_video2.gif)

![flow2](./flow2.gif)

Thanks to other team members, Wending Zhang and Qiong Wu.
