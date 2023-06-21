---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% include base_path %}

  You can find my articles on <a href="{{author.googlescholar}}">my Google Scholar profile</a>
[my Google Scholar profile](https:{{author.googlescholar}}){:target="_blank"}{:rel="noopener noreferrer"}

- - - - - 
[my Google Scholar profile](https://scholar.google.de/citations?hl=en&user=CBgK8gIAAAAJ){:target="_blank"}{:rel="noopener noreferrer"}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
