---
title: Humanoid Robot Shoes Design and Model-free Self-calibration Methods
summary: Graduate final year project. This project mainly introduced two primary research:circuit hardware design and model-free self-calibration(MFSC).
tags:
  - Humanoid Robot
  - Electronics
  - PCB
  - Control
  - Calibration
date: '2023-05-01T00:00:00Z'

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
url_code: ''
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
Date: 2023-05

![PCB](./PCB.jpg)

A solution combing FSR and shoes is proposed.
![new_shoe](./new_shoe.png)

FSR data acquisition PCB are designed:
![new_PCB](./new_PCB.png)

There are three reference frames in the experiment: camera frame, world frame, and foot frame:
![exp1](./exp1.png)

In experiment, Nao moves itself CoP from the middle to the right side by the model-free control method.
![exp2](./exp2.png)

Different postures when the robot moves the CoP to different points on the path.
![exp3](./exp3.png)

When the sensor is accurate, the experimental results of running the same path three times.
![result1](./result1.png)

![result2](./result2.png)

Thanks to other team members, Boren Jiang, etc. Thanks to my supervisor [Prof. Gregory Chirikjian](https://scholar.google.com/citations?user=qoIuyMoAAAAJ&hl=en).
