const {  dbClient } = require('../../dbConnection');

// <---- Add Initial Data ---->

const addCoursesData = require('./courses');
const addSubjectsData = require('./subjects');
const addTopicsData = require('./topics');
const addSkillsData = require('./skills');

async function addInitialData() {
  try {
    console.log('<------- DATABASE ADD INITIAL DATA HAS STARTED -------->');
    await addCoursesData(dbClient);
    await addSubjectsData(dbClient);
    await addTopicsData(dbClient);
    await addSkillsData(dbClient);
  } catch (error) {
    console.log(error)
    console.log(`Error message: ${error}`);
  } finally {
    await dbClient.end();
    console.log('<------- DONE! -------->');
  }
}

addInitialData();
