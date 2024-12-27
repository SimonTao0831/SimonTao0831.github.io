---
title: Quadruped robot modeling and simulation
summary: Simulation in MATLAB for quadruped robot kinematics, dynamics, and itrajectory planning.
tags:
  - Trajectory planning
  - Kinematics
  - Dynamics
  - MATLAB
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

 Following figures show the simulation model of a quadruped robot in different poses:
![kinematics](./kinematics.png)

Position and velocity of each joint:
![CTM](./CTM.png)

The final foot trajectory with computed torque method:
![Trajectory](./Trajectory.png)

![Computed_Torque_Method](./Computed_Torque_Method.gif)

The final foot trajectory with PID method:

![PID](./PID.gif)

Thanks to other team members, [Lei Wu](https://www.linkedin.com/in/lei-wu-9b2901248/) and [Zifan Zhou](https://www.linkedin.com/in/zifan-zhou-500932288/).
