window.onload=function(){toggleMobileMenu();window.onresize=checkWidth;document.querySelectorAll('.page-scroll').forEach(function(el){el.addEventListener('click',scrollToSection)});tabWithIndicator('teams-tab');tabWithButtons('employees-tab');commonOnload()};function scrollToSection(e){if(e)e.preventDefault();var target=this.getAttribute('href').substr(1);var offset=/who-we-are|page-top/.test(target)?55:60;var el_target=document.getElementById(target);var to=el_target?el_target.offsetTop-offset:'';scrollTo(to,500);collapseMenu()}function tabWithIndicator(id){var container=document.getElementById(id)?document.getElementById(id):document.body;var indicator=container.querySelector('.tab-menu .active-tab-indicator');var tabs=container.querySelectorAll('.tab-menu .tab');var contents=container.querySelectorAll('.tab-content-wrapper > div.tab-content');var numOfTabs=tabs.length;indicator.style.width=100/numOfTabs+'%';tabs.forEach(function(el,index){el.index=index;el.addEventListener('click',updateActiveTab)});contents.forEach(function(el,index){if(index){el.classList.add('invisible')}});function updateActiveTab(e){if(e)e.preventDefault();indicator.style.left=100/numOfTabs*this.index+'%';var target=this.querySelector('a').getAttribute('href').substr(1);updateTabContent(target)}function updateTabContent(target){contents.forEach(function(el){el.classList[el.id===target?'remove':'add']('invisible')})}}function tabWithButtons(id){var container=document.getElementById(id)?document.getElementById(id):document.body;var contents=container.querySelectorAll('div.twb-content');var numOfItems=contents.length;contents.forEach(function(el,index){if(index){el.classList.add('invisible')}});var index=0;container.querySelectorAll('.twb-button').forEach(function(el){el.addEventListener('click',function(e){e.preventDefault();if(el.id==='next')updateTabContent(++index);else updateTabContent(--index)})});function updateTabContent(target_index){contents.forEach(function(el,idx){var toShow=target_index%numOfItems<0?target_index%numOfItems+numOfItems:target_index%numOfItems;el.classList[toShow===idx?'remove':'add']('invisible')})}}
//# sourceMappingURL=graduate_program.js.map
