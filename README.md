# Genius-Forest_be

Here is the guidelines to start the backend development

PRE-STEPS:
1- Create and configure you Postgress database.

2- The following fields are required: host, user, password, port, database name.

Once you have the database created in your local environment you can follow the steps below:

1- Update your local environment values

2- Create tables: (Only for local Databases, not from the cloud)

  2.A - Is this a new database (is there any database tables)?
    NO: run "node ./api/seeder/create-tables.js" to create the initial tables
        run "node ./api/seeder/addInitialData/addInitialData.js" to add initial data
    YES: Skip step #2

3- Run "node server.js"

4- Point your frontend API calls to your localhost backend server

