const createSkillLearnerTable = async (dbClient) => {
  await dbClient
    .query(
      'CREATE TABLE IF NOT EXISTS skill_learner ' +
        '(' +
        'id SERIAL,' +
        'PRIMARY KEY (id),' +
        'learner_id VARCHAR NOT NULL,' +
        'FOREIGN KEY (learner_id) REFERENCES learners (id),' +
        'skill_id INT NOT NULL,' +
        'FOREIGN KEY (skill_id) REFERENCES skills (id),' +
        'points INT,' +
        'total_time INT,' +
        'total_questions INT,' +
        'attempts INT,' +
        'wrong_attempts INT,' +
        'skill_level INT,' +
        'created_at timestamptz NOT NULL DEFAULT now()' +
        ')'
    )
    .then((success) => {
      console.log('14 - skills_learner table created!');
    });
};

module.exports = createSkillLearnerTable;
