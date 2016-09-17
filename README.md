# Canva.com homepage effect
An attempt to create a similar effect to that generated on the [canva.com homepage](https://www.canva.com/): moving the cursor draws a sharp image onto a blurred version of the same image.

## Stage 1: cursor_speed/

Script to track cursor speed. Show this in live counter on screen.

Published: [edpatrick.github.io/canva_homepage_effect/cursor_speed/](https://edpatrick.github.io/canva_homepage_effect/cursor_speed/)

## Stage 2: modify_size_on_cursor_speed/

Modify canvas drawing size based on cursor speed

Published [edpatrick.github.io/canva_homepage_effect/modify_size_on_cursor_speed/](https://edpatrick.github.io/canva_homepage_effect/modify_size_on_cursor_speed/)

## Stage 3: core functionality

Draw sharp image on blurred background image using canvas. Modify size of drawing based on cursor speed using script created for stage 2. Image sources: [gratisography.com](http://gratisography.com/) under a [CC0 license](http://gratisography.com/terms.html).

Published: [edpatrick.github.io/canva_homepage_effect/](https://edpatrick.github.io/canva_homepage_effect/)

## Next stages

- make sharp image co-ordinate exactly with blurred image (fillRect vs clearRect issue)
- make animation smoother (with lerp?)
- improve performance - make sure images caching etc.
- make animation cooler! e.g. fade effects used on canva.com
