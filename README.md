# async-race - school task

1. Task: https://github.com/rolling-scopes-school/tasks/blob/master/tasks/async-race.md
2. Screenshot: 
![image](https://user-images.githubusercontent.com/66797250/124021633-700bc800-d9f4-11eb-9d18-dfb0e841db9b.png)


3.Deploy: https://rolling-scopes-school.github.io/dizollate-JSFE2021Q1/async-race/

4. Done: 17.06.21 / Deadline:  17.06.21

5. (+5) There should be two views on the site: "Garage" and "Winners".
(+5) "Garage" view should contain its name, page number, and the full amount of items in the database (how many car user has in his garage).
(+10) View state should be saved when user switches from one view to another. For example, page number shouldn't be reset, input controls should contain that they contained before switching, etc.
"Garage" view:
(+15) User should be able to create, update, delete a car, and see the list of the cars. Car has only two attributes: "name" and "color". For "delete"-operation car should be deleted from "garage" table as well as from "winners".
(+10) User should be able to select any color from an RGB-Palete like here and see the picture of the car colored with the color selected and car's name.
(+5) Near the car's picture should be buttons to update its attributes or delete it.
(+10) There should be pagination on the "Garage" view (7 cars per one page).
Car animation:
(+5) Near the car's picture should be buttons for starting / stoping the car engine.
(+20) User clicks to the engine start button -> UI is waiting for car's velocity answer -> animate the car and makes another request to drive. In case api returned 500 error car animation should be stopped.
(+5) User clicks to the engine stop button -> UI is waiting for answer for stopping engine -> car returned to it's initial place.
(+5) Start engine button should be disabled in case car is already in driving mode. As well as stop engine button should be disabled when car is on it's initial place.
(+15) Car animation should work fine on any screen (smallest screen size is 500px).
Race animation:
(+10) There should be a button to start race. After user clicks this button all the cars on the current page start driving.
(+10) There should be a button to reset race. After user clicks this button all the cars return to it's initial places.
(+10) After some car finishes first user should see the message contains car's name that shows which one has won.
