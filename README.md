# Building Wikistack

In this workshop, we will continue to build with the technology stack we have been learning so far: Node.js, Express.js, Postgres, and now Sequelize to interface with Postgres. This lovely Wikipedia-like application will have the following features:

- A homepage that lists all the pages in our Wiki
- The ability to create new pages, and write them in Markdown using the `marked` module.
- Open page editing (no login for now)
- Page searching
- Tagging
- Bonus: version history, discussion tab on each page

# Wikistack deployed - comments by [@swyx](https://twitter.com/swyx)

This is a version of FSA wikistack deployed on Heroku at <https://swyx-wikistack.herokuapp.com/> and the code is at <https://github.com/sw-yx/fsa-wikistack-deploy/>.

There are some extra things done to make this webapp a little nicer compared to the supplied solution
- separate index page and wiki page, turn index page into a landing page
- edit page button fixed (it has an error now as it redirects to a nonexistent url when you edit title)
- ugly form fields fixed
- about page points to source code
- get rid of search navigation

Ideas for extension
- make into an SPA
- add authentication, roles
- version history, discussion tab
- inline search
- image upload