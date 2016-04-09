README for Assignment 3 - WPL
=============================

Webpage is hosted at the following location:

                  utdallas.edu/~jxp151930/Assignment3.html
				  
Webpage can also be accessed by clicking Assignment3.html file locally after unzipping the folder.

Browser Requirement: Google Chrome or Edge

Below are the .html, .css and .js files
---------------------------------------
1. Assignment3.html -> Main file for assignment 3. This contains all the information and links.
2. form.html -> last part of the assignment to construct dynamic table.
3. carousel.css -> All the style related code boostrap carousel template.
4. form.css -> All the style related code for form.html page.
5. Assignment3.jss -> Javascript/jQuery functions for Assignment3 page.
6. carousel.js -> Javascript/jQuery functions for carousel.
7. form.js -> Javascript/jQuery functions for dynamic table.

All the elements have been implemented in Assignment3.html page. Not required to open other pages.

Below are the placeholders in source code and also in webpage for Assignment 3. 

1.
(a) Bootstrap is added within the head section on Assignment3.html page.
	
(b). 
	i. Image slider with 3 images are added at the beginning of the web page. Images and links are placed at the <!-- Carousel --> section.
	By clicking the link in the image, it will take to respective section on the webpage.
	
	ii. A navigation bar is added with 5 sections at the top of the webpage. This code is inside the <!-- NAVBAR --> section, and the first thing in the body.
	
	iii. All the below are implemented in the section "Assignment 3 other events demonstration".
		1. Click: Hide, show and toggle
			This is implemented near the end the of webpage.
			Three buttons are added each for hide, show and toggle. It will do respective operation on the text which reads "Company projects".
		
		2. DblClick: FadeIn, FadeOut, FadeTo and FadeToggle.
			Four buttons each for the above operation are added. The operations are implemented on the image.
			
		3. Mouseenter: Animate CSS
			Used animate function on image. When the mouse enters the image area, the image increases its width.
			
		4. Mouseleave: Stop effects with callback
			This is implemented on the same image using callback. When the mouse leave the image area, it stops the image from growing to its right.
			
		5. Keypress: Chain three (3) fading events
			This is implemented at the end of the page. A text box is added and when we press any key on the textbox, three fading events happens.

		6. Keydown: Chain three (3) animate events
			This is implemented above the keypress event. 
			Example 1: A text box is added and when we enter something, background color, font color will change inside the textbox.
			Example 2: A text box is added and when we enter something, a div element will animate and changes its position and size.
			
(c).
	This section is implemented separetely in another file form.html
	
	i. Added a 4x4 table with the given headings.
	ii. "Add row" button is added at the end of the table to add new row(s).
	iii. Each row contains a "delete" button, when pressed will delete the respective row.
	iv. Table contains text boxes which can be edited.
	v. The effect is implemented, when an alt is pressed and hover on any cell, it will change background color to blue and font color to red.
		When we remove alt, the cell and text will come to normal colors. (Implemented in form.js)
