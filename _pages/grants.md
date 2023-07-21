---
layout: archive
title: "Grants & Funding"
permalink: /grants/
author_profile: true
redirect_from:
  - /grants
---

{% include base_path %}

Together with partners, I have been granted funding for the following projects:

<nbsp>

{% for post in site.grants %}
  {% include archive-single.html %}
{% endfor %}
