---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% include base_path %}

  You can find my articles on <a href="{{author.googlescholar}}">my Google Scholar profile</a>

TESTING {author.googlescholar}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
