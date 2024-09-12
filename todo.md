## Scoreboard
- [ ] Current score
- [ ] Best score

## Cards and text
- [x] Fetch API data
- [x] Filter images
- [x] Filter text


## Card click
- [x] Check if card was pressed already (compare by id)
- [x] If not save card 
  - [x] increment the score
  - [x] shuffle cards
- [x] If it was 
  - [x] reload the card holder component, 
  - [x] current score
  - [x] saved cardIds

## App flow
1. Fetch data from API (Save data as [id, name, img])
2. Display header, rules, scores and cards
3. On card click
   1. Check if card was pressed already (compare by id)
   2. If not save card, increment the score and shuffle cards
   3. If it was reload the card holder component, current score and saved cardIds

  
