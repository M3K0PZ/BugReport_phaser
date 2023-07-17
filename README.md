# BugReport_phaser
Repo i made to display a phaser bug i found using resizing, and the fix i found for it (even tho it's a bad one :P)

will delete if it's only a mistake i made 

## explaination of the bug:
I try to develop a game in landscape only, I think there's a bug when starting to portrait going into landscape (using resizing game scale mode)

I start in portrait mode (using browser built in phone emulator in console), then i switch to lanscape mode using the "rotate" button, on rotating, if it's in landscape mode, my phaser scenes starts another one, but the logo that should be displayed in the center, doesn't appear (even tho the console log after displaying the logo appears, meaning it's a coordinates issue)

what makes me think it's a bug is that if i directly start in landscape (so no resizing), the logo is in the right place, everything works, even if i rotate as much as i want after.

my resize function is only about setting the right coords for the logo and updating world boundaries (see code below)


I also got a similar bug not long ago using the same method, a game i made trying to do some adaptative desing, where going from landscape to portrait worked well to resize and replace every object, image, etc... But not starting from portrait to landscape, where every resizing failed it's job . (even going back from landscape to portrait then landscape worked, it's the **starting** in portrait only that bugs) 
