const createSkillLevelTable = async (dbClient) => {
  await dbClient
    .query(
      'CREATE TABLE IF NOT EXISTS skill_level ' +
        '(' +
        'id SERIAL,' +
        'PRIMARY KEY (id),' +
        'learner_id VARCHAR NOT NULL,' +
        'FOREIGN KEY (learner_id) REFERENCES learners (id),' +
        'practice_id INT NOT NULL,' +
        'FOREIGN KEY (practice_id) REFERENCES skill_practice (id),' +
        'skill_id INT NOT NULL,' +
        'FOREIGN KEY (skill_id) REFERENCES skills (id),' +
        'level INT,' +
        'total_points INT,' +
        'total_time INT,' +
        'attempts INT,' +
        'wrong_attempts INT,' +
        'total_questions INT,' +
        'created_at timestamptz NOT NULL DEFAULT now()' +
        ')'
    )
    .then((success) => {
      console.log('23 - skill_level table created!');
    });
};

module.exports = createSkillLevelTable;
