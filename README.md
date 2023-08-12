# Agent_Randomizer
TODO:
- Fix inconsistent use of classes and ID. Fix inconsistent naming of classes and IDs.

- Fix bug where it will only filter based on your first role selection and not if you choose a different role afterwards.

- Continue styling.

#############################################################

Valorant agent randomizer changelog:

Changed layout to flexbox. began styling.

Aug11/23: Changed all agent icon and role filter img src from Wikipedia link to png files.

Apr05/23: Added DOM method that creates p tag and textcontent. Text is a template literal which states the result of randomAgent. randomAgent stores the return value of agentRandomizer().

Apr 04/23: Added inputs type = image each with a picture of one of the four valorant roles. Each input acts as a filter. When one filter is clicked, it will lower the opacity of all agents not in that role. All agents are given a class corresponding with their role.

Expanded the filters to the agent randomizer. Sliced the array containing all agents into four new arrays grouping agents based on their roles. If a filter is selected, the agents with the corresponding role will be randomized and one will be selected. If no filter is selected, all agents will be randomized. 

Apr 01/23: Created array with all valorant agents.

Used math.floor(math.random) to randomly select one agent when "Choose My Agent!" button is clicked.

Added img of all agents currently available in the game.