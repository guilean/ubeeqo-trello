## Challenge

Build a TODO application, like Trello app (www.trello.com) to display the tasks and columns, enable users to interact with the application and save their data.

## Setup & Run

To execute the project you will need to run the following commands:

1. Clone the repository
`git clone https://github.com/guilean/ubeeqo-trello.git`
2. Change to ubeeqo-trello path `cd ubeeqo-trello`
3. Install node dependencies `npm install`
4. Run start script to launch the application locally `npm run start`

Once the APP is launched and the browser is open, we should be able to interact with the application.

## Improvements

There's a lot of space for improvements:

- Add capability to drag and drop tasks 
- Add control errors on actions
- Add parsers and serializers in actions methods
- Improve empty cases / error ui
- Add unit test
- Create a solid architecture for styling. Base.scss should contain all the classes of the design system.

## Scripts

To run the application in local

`npm run start`

To open cypress window to run E2E

`npm run cypress:open`

To 'compile' the application

`npm run build`
