# Message Specification App

## Overview

This is a web application for writing and running "Message Specifications", built with ES6, React, Redux, HTML, and Mocha/Expect for testing. A "Message Specification" is a simple object, composed of two strings: a name and a specification.

A Message Specification, when run, will output the string that is their spec property. Within the spec property, another Message Specification may be referenced by name, with the appropriate syntax: ms(...name...) without the elipses. When created like so, the named Message Specification's output will be include at the point of reference.

Users can create, edit, and delete their message specifications. All data will be wiped upon navigating away from the page and on refresh.

Special cases include: looping between two Message Specifications that reference one another. The app will end such a loop after twenty returns.

Another is nesting a reference syntax within another, like so: ms(ms(spec1)). The app handles this situation like any other functional call, resolving the inner and then the outer: ms(ms(spec1)) -> ms(spec2) -> spec3.

Last, there is a restriction against submitting a new Message Specification. The browser will alert the user.

##Instructions

- In your terminal, navigate to the project directory.

- Using the command line, run `npm start`. This bundles the files and serves them from a local server, port 8080.

- In your browser, navigate to the url localhost:8080 and follow the instructions.

- Run the test suite from the command line with `npm test`.