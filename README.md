## Learning Javascript ##
This is an effort to do Test Driven Learning of Javascript from
the book *JavaScript: The Good Parts Unearthing the Excellence in JavaScript*

![BookCover](http://akamaicovers.oreilly.com/images/9780596517748/lrg.jpg "Book cover")

I loose motivation for reading programming books as soon as I can barely
walk in that language and never go back to doing a cover to cover
reading. I am a big fan of Coursera and like how they make the videos
interactive with quizes. That allows you to validate your assumptions and
fail fast to ensure you are getting the concepts right. That sounds
very much like what programmers know as unit tests, right?

So here's the deal - we write small tests as an when we come across new
concepts in javascript. As in any software development project, unless you
can write tests for the requirement, you really haven't really understood
the requirement to write the code. Similarly if you can write sufficient tests
around a concept, you are ready to turn the pages.

### Node.js  ###
While Chrome dev tools rock, using node.js makes it much easier to run longer scripts
from the command line. Get [node.js](http://nodejs.org/download/).

### Jasmine ###
[Jasmine](http://jasmine.github.io) is a testing framework for doing behavior
driven development. It's simple enough to get started and write basic tests,
even if you don't have enough Javascript background.

You can install it by using the node package manager.
`npm install jasmine-node -g`

[Here](http://evanhahn.com/how-do-i-jasmine/) is a good enough tutorial for getting
as much as its needed.

#### Running the tests ####

`jamsine-node scriptname.js`

### Emacs and jshint ###
In case you are using emacs you can use the following steps to get
your enviroment set up for development. I am using the dotfiles
from [Startup Engineering course](https://github.com/startup-class/dotfiles)


#### Install rlwrap ####
`brew install rlwrap`

### Install jshint ####
`npm install -g jshint`


When in emacs, hit `C-c!` to bring up a prompt in the js buffer.  Then
hit `C-c C-j` to send the current line from the buffer to the prompt in
the *js* buffer, or select a set of lines and hit `C-c C-r` to send an
entire region.
