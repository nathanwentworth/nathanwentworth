---
title: Recommendations
excerpt: "Things I like! Frequently updated."
---

<p>
Things that I like! A chronological list of music, games, articles, websites, or anything else that I'm enjoying. Blatantly stolen from <a href="https://ethanthibault.com/recommendations/">Ethan Thibault</a> and <a href="http://daywreckers.com/">daywreckers</a>.
</p>

<div class="recommendations">
  {% assign sorted = site.data.recommendations | sort: 'date' | reverse %}
  {% assign first = sorted[0] %}
  {% assign date = '' %}
  {% for recommendation in sorted %}
    {% assign currentdate = recommendation.date | date: '%Y-%m-%d' %}
    {% if currentdate != date %}
      {% if first != recommendation %}
      </ul>
      </div>
      {% endif %}
      <div class="recommendation-outer">
      <h3 id="y{{currentdate}}" class="recommendation-date">{{ currentdate }}</h3>
      {% assign date = currentdate %}
      <ul class="recommendation-main">
    {% endif %}
    <li class="recommendation-body">
      <div class="tag tag--{{ recommendation.type }}">{{ recommendation.type }}</div><div class="recommendation-text"><a href="{{ recommendation.link }}">{{ recommendation.name }}</a>{% if recommendation.desc %}<div>{{ recommendation.desc }}</div>{%endif%}</div>
    </li>
  {% endfor %}
  </ul>
</div>

