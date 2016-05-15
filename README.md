## Accredible certificate embed tool

Notes here: https://www.evernote.com/l/ANhbALBofQdACppdB4Ep2vJqyaDHrV7Mcpg

###This project is organized into modules:

Embed Builder is a tool used by the user to generate their own email or website embed.

There is no routing in place, as this is structured as a demo. If this were a part of a larger project using UI Router, I would have used ui views for the embed preview, rather than ng-includes. 

I prefer UI Router states, mostly in case some data manipulation was later necessary, or separate controllers were used. I find the route declarations a lot more straightforward, and you can find everything defined in one place, rather than throughout the HTML.


