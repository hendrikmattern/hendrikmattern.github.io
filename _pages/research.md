---
layout: archive
title: "Research & publications"
permalink: /research/
author_profile: true
---

{% include base_path %}

  You can find my publications on [my Google Scholar profile](https://scholar.google.com/citations?hl=en&user=CBgK8gIAAAAJ "link to my Google scholar profile") and my research topics below.
  
  ...
  
{% for post in site.research %}
  {% include archive-single.html %}
{% endfor %}

