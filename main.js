const data = [
    {
      "category": "Reaction",
      "score": 80,
      "icon": "./assets/images/icon-reaction.svg"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "./assets/images/icon-memory.svg"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "./assets/images/icon-verbal.svg"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "./assets/images/icon-visual.svg"
    }
  ];

  
  
  document.addEventListener("DOMContentLoaded", () => {

      const elStatsList = document.querySelector('.stats-list');
      const elStatsContentFragment = document.createDocumentFragment();

      data.forEach(function (item) {

        const elStatsItem = document.createElement('li');
        elStatsItem.classList.add('stats-list_item', `stats-list_item--${item.category.toLowerCase()}`);

        const elStatsListImg = document.createElement('img');
        elStatsListImg.classList.add('stats-list_item-icon');
        elStatsListImg.src = item.icon;
        elStatsListImg.alt = "";
        elStatsListImg.width = "20  ";
        elStatsListImg.height = "20";
        elStatsListImg.ariaHidden = true;

        const elStatsListTitle = document.createElement('span');
        elStatsListTitle.classList.add('stats-list_item-title');
        elStatsListTitle.textContent = item.category;


        const elStatsListResult = document.createElement('span');
        elStatsListResult.classList.add('stats-list_item-result');
        elStatsListResult.textContent = item.score;


        const elStatsListPercentage = document.createElement('span');
        elStatsListPercentage.classList.add('stats-list_item-percentage');
        elStatsListPercentage.textContent = "%";


        const elStatsListMax = document.createElement('span');
        elStatsListMax.classList.add('stats-list_item-max');
        elStatsListMax.textContent = "/ 100";

        elStatsItem.appendChild(elStatsListImg);
        elStatsItem.appendChild(elStatsListTitle);
        elStatsItem.appendChild(elStatsListResult);
        elStatsItem.appendChild(elStatsListPercentage);
        elStatsItem.appendChild(elStatsListMax);


        elStatsContentFragment.appendChild(elStatsItem);

      });

      elStatsList.appendChild(elStatsContentFragment);
    }); 
