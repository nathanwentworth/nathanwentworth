---
title: "Suki's Soul Food"
tags: [Unity, C Sharp, game jam, game]
image: sukis-soul-food-sm.png
links:
  source: https://github.com/TheConBot/Cat-In-a-Truck
  download: https://wickedly.itch.io/sukis-soul-food
---
First-person cooking game, where you make cat food for cats. Made in a week for the [Games Made Quick 1½](https://itch.io/jam/games-made-quick-one-and-a-half) jam. [Download](https://wickedly.itch.io/sukis-soul-food) [Source](https://github.com/theconbot/Cat-In-a-Truck)

I did about 50% of the programming and all of the UI design/implementation. While [Connor](https://connor.games) made the base ingredient/recipe data structures, I made code to generate [recipes](https://github.com/TheConBot/Cat-In-a-Truck/blob/master/Assets/Scripts/RecipeGenerator.cs) and the [visuals](https://github.com/TheConBot/Cat-In-a-Truck/blob/master/Assets/Scripts/RecipeVisualGenerator.cs) for them. I also made the code for the [paw movement](https://github.com/TheConBot/Cat-In-a-Truck/blob/master/Assets/Scripts/PawMovement.cs) and interactions. Lastly, I wrote the [highscore network code](https://github.com/TheConBot/Cat-In-a-Truck/blob/master/Assets/Scripts/StoreHighScores.cs).

{% include img.html url='sukis-soul-food-01.png' desc='gameplay' %}
{% include img.html url='sukis-soul-food-02.png' desc='main menu / difficulty select' %}
{% include img.html url='sukis-soul-food-03.png' desc='a recipe' %}