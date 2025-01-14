# Vertical Carousel

it is a vertical carousel that can be controlled with the mouse drag events or touch events in the mobile device. The cards have smoopth transition while draggding the card.

## Project Structure

1. **HTML:** The project contains a container (`.carousel-section`) class that holds other class or is a parent element/class. Each carousel item is wrapped inside `.card` elements. The cards are stacked and interactively rotated through CSS transformations and JavaScript logic.

2. **CSS Styling:**

   - The layout is centered using Flexbox.
   - Each `.card` is styled with a transparent background, backdrop blur and shadow effect.
   - The `active` card is scaled and moved to the front using `transform: scale()` and `z-index`.
   - The other cards (`card-1`, `card-3`) are positioned with slight vertical offsets and a blur effect.

3. **JavaScript Interaction:**
   - Event listeners are set up for both mouse and touch events.
   - When the user drags a card, the script calculates the movement and triggers a rotation in the carousel.
   - The `rotateCards` function changes the active card and repositions the surrounding cards.

## How to Run

### 1. Clone the Repository

clone the project repository to your local machine with command:

```bash
git clone https://github.com/Baroon-Shrestha/Internship-carousel.git
```

### 2. Open the project

cd Internship-carousel

### 3. Run the project

for macOs

```bash
open index.html
```

for windows

```bash
start index.html
```

for linux

```bash
xdg-open index.html
```
