/* Searches for a string and creates a bookmark when that string is found */

var stringToSearchFor = "ENTER SEARCH TERM HERE"; // MAKE SURE YOU ENTER THE SEARCH TERM HERE
var bookmarkPrefix = "ENTER PREFIX NAME HERE"; // MAKE SURE YOU ENTER THE PREFIX NAME HERE
var numberFound = 0;

for (var p = 0; p < this.numPages; p++) {
	this.pageNum = p
	console.println("Document" + this + " has " + this.getPageNumWords(p) + " words on page " + p);
	for (var w = 0; w < this.getPageNumWords(p); w++) {
		if (this.getPageNthWord(p,w) == stringToSearchFor) {
			numberFound++
			console.println("Found " + numberFound + " on " + this.pageNum);
			var bookmarkName = bookmarkPrefix + "_" + numberFound
			this.bookmarkRoot.createChild(bookmarkName, "this.pageNum = " + p);
		}
	}
}