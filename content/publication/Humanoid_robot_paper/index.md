---
title: "Model-Free Self-Calibration of Force-Sensing Shoes for Humanoids"
authors:
- Boren Jiang
- admin
- Yuanfeng Han
- Wanze Li
- Gregory Chirikjian

# author_notes:
# - "Equal contribution"
# - "Equal contribution"
date: "2023-01-28T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2023-01-28T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "18th International Symposium on Experimental Robotics"
publication_short: ""

abstract: This paper presents a novel model-free method for humanoid robot quasi-static movement control to self-calibrate their foot force sensor. Traditional model-based methods typically rely on accurate robot model parameters, including kinematic and inertial parameters, to generate whole-body trajectories. In contrast, we propose a proprioceptive framework based only on sensory outputs. Our model-free whole-body trajectory planner consists of three steps:1. Planning different pairs of the center of pressure (CoP) and foot position objectives. 2. Searching around the current configuration by slightly moving the robot's leg joints back and forth while recording the sensor measurements of its CoP and foot positions. 3. Updating the robot motion with an optimization algorithm until all objectives are achieved. Then, the foot sensor parameters are determined by minimizing the error between the measured and reference CoP and ground reaction force (GRF) during the robot's movement using optimization. We demonstrate our approach on a NAO humanoid robot platform. Experiment results show that the model-free self-calibration can successfully estimate CoP and GRF.

# Summary. An optional shortened abstract.
# summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.

tags:
- Humanoid Robot
- Calibration
featured: true

# links:
# - name: ""
#   url: ""
url_pdf: 'https://arxiv.org/pdf/2302.14249.pdf'
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  # caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/jdD8gXaTZsc)'
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
# slides: example
---

