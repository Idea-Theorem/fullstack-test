const createSkillPracticeTable = async (dbClient) => {
  await dbClient
    .query(
      'CREATE TABLE IF NOT EXISTS skill_practice ' +
        '(' +
        'id SERIAL,' +
        'PRIMARY KEY (id),' +
        'learner_id VARCHAR NOT NULL,' +
        'FOREIGN KEY (learner_id) REFERENCES learners (id),' +
        'skill_id INT NOT NULL,' +
        'FOREIGN KEY (skill_id) REFERENCES skills (id),' +
        'tasks json[],' +
        'questions json[],' +
        'total_points INT,' +
        'total_time INT,' +
        'attempts INT,' +
        'wrong_attempts INT,' +
        'total_questions INT,' +
        'created_at timestamptz NOT NULL DEFAULT now()' +
        ')'
    )
    .then((success) => {
      console.log('18 - skill_practice table created!');
    });
};

module.exports = createSkillPracticeTable;
