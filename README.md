# search_pdf_and_bookmark

What this script does
---------------------
When run in Acrobat, this script searches a PDF for a string. Each time the string is found, the script creates a bookmark for the page that the string was found on.


How to use this script
----------------------
First you'll need to create the action to run your script:
 1. Create a New Action in Adobe Acrobat.
 2. Add an "Execute Javascript" tool to the action.
 3. Click "Specify Settings" on the tool you added to open the editor.
 4. Paste the script into the editor and click "OK".
 5. Ensure that "Prompt User" is checked, and click "Save".
 
When you run the script, there are two pieces you will need to change:
 1. For `var stringToSearchFor = "ENTER SEARCH TERM HERE";` (line 3) change `ENTER SEARCH TERM HERE` to the string that you'd like to search for.
 2. for `bookmarkPrefix = "ENTER PREFIX NAME HERE";` (line 4) change `ENTER PREFIX NAME HERE` to the text you'd like to have appear at the beginning of every bookmark name.
