---
# Leave the homepage title empty to use the site title
title:
date: 2023-9-3
type: landing

sections:
  - block: about.biography
    id: about
    content:
      title: About me
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
  - block: experience
    content:
      title: Experience
      # Date format for experience
      #   Refer to https://wowchemy.com/docs/customization/#date-format
      date_format: Jan 2006
      # Experiences.
      #   Add/remove as many `experience` items below as you like.
      #   Required fields are `title`, `company`, and `date_start`.
      #   Leave `date_end` empty if it's your current employer.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - title: Research Engineer
          company: National University of Singapore
          company_url: ''
          company_logo: nus
          location: Singapore
          date_start: '2023-08-04'
          date_end: ''
          description: Worked on the electronics and control part of the port automation project.
    design:
      columns: '2'
  - block: Collection
    id: featured
    content:
      title: Publications
      filters:
        folders:
          - publication
        featured_only: true
    design:
      columns: '1'
      view: citation
  - block: Collection
    id: patents
    content:
      title: Patents
      filters:
        folders:
          - publication
        exclude_featured: true
    design:
      columns: '1'
      view: compact
  - block: portfolio
    id: projects
    content:
      title: Projects
      filters:
        folders:
          - project
      # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
      default_button_index: 0
      # Filter toolbar (optional).
      # Add or remove as many filters (`filter_button` instances) as you like.
      # To show all items, set `tag` to "*".
      # To filter by a specific tag, set `tag` to an existing tag name.
      # To remove the toolbar, delete the entire `filter_button` block.
      buttons:
        - name: All
          tag: '*'
        - name: Electronics
          tag: Electronics
        - name: PCB
          tag: PCB
        - name: Mechanical design
          tag: Mechanical design
    design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '1'
      view: compact
      # For Showcase view, flip alternate rows?
      flip_alt_rows: false
---
