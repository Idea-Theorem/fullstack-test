const { SingleDbClient } = require('../../dbConnection');

const createSubscriptionTable = require('./subscriptions');
const createReceiptsTable = require('./receipts');
const createLearnersTable = require('./learners');
const createPreSignUpTable = require('./pre_signUp');

// <---- Courses ---->
const createCoursesTable = require('./courses/courses');
const createCourseLearnerTable = require('./courses/course_learner');
const createCourseLevelTable = require('./courses/course_level');

// <---- Subjects ---->
const createSubjectTable = require('./subjects/subjects');
const createSubjectLearnerTable = require('./subjects/subject_learner');
const createSubjectLevelTable = require('./subjects/subject_level');

// <---- Topics ---->
const createTopicsTable = require('./topics/topics');
const createTopicLearnerTable = require('./topics/topic_learner');
const createTopicPractice = require('./topics/topic_practice');
const createTopicLevelTable = require('./topics/topic_level');

// <---- Skills ---->
const createSkillsTable = require('./skills/skills');
const createSkillLearnerTable = require('./skills/skill_learner');
const createSkillPractice = require('./skills/skill_practice');
const createSkillLevelTable = require('./skills/skill_level');

// <---- Tasks ---->
const createTasksTable = require('./tasks/tasks');
const createTaskLearnerTable = require('./tasks/task_learner');
const createTaskPracticeTable = require('./tasks/task_practice');
const createTaskLevelTable = require('./tasks/task_level');

// <---- Questions ---->
const createQuestionsTable = require('./questions/questions');
const createQuestionHelperTable = require('./questions/question_helper');
const createQuestionLearnerTable = require('./questions/question_learner');

async function createTables() {
  try {
    await SingleDbClient.connect();
    console.log('<------- DATABASE TABLES CREATION STARTED -------->');
    await createSubscriptionTable(SingleDbClient);
    await createReceiptsTable(SingleDbClient);
    await createPromoCodeTable(SingleDbClient);
    await createLearnersTable(SingleDbClient);
    await createCoursesTable(SingleDbClient);
    await createSubjectTable(SingleDbClient);
    await createTopicsTable(SingleDbClient);
    await createSkillsTable(SingleDbClient);
    await createTasksTable(SingleDbClient);
    await createTaskLearnerTable(SingleDbClient);
    await createQuestionsTable(SingleDbClient);
    await createQuestionHelperTable(SingleDbClient);
    await createSubjectLearnerTable(SingleDbClient);
    await createCourseLearnerTable(SingleDbClient);
    await createTopicLearnerTable(SingleDbClient);
    await createSkillLearnerTable(SingleDbClient);
    await createPreSignUpTable(SingleDbClient);
    await createTopicPractice(SingleDbClient);
    await createSkillPractice(SingleDbClient);
    await createTaskPracticeTable(SingleDbClient);
    await createQuestionLearnerTable(SingleDbClient);
    await createCourseLevelTable(SingleDbClient);
    await createSubjectLevelTable(SingleDbClient);
    await createTopicLevelTable(SingleDbClient);
    await createSkillLevelTable(SingleDbClient);
    await createTaskLevelTable(SingleDbClient);
    await SingleDbClient.end();
  } catch (error) {
    console.log(`Error message: ${error}`);
  } finally {
    await SingleDbClient.end();
    console.log('<------- DONE! -------->');
  }
}

createTables();
