const addSubjectsData = async (dbClient) => {
  const formateQuery = (data) => {
    return {
      text: 'INSERT INTO subjects (id, course_id, name, description, points) VALUES($1, $2, $3, $4, $5);',
      values: [data.id, data.course_id, data.name, data.description, data.points],
    };
  };

  subject_data = [
    {
      id: 6,
      course_id: 1,
      name: 'grade 6',
      description: 'missing description',
      points: 125000,
    },
    {
      id: 7,
      course_id: 1,
      name: 'grade 7',
      description: 'missing description',
      points: 125000,
    },
  ];

  for (let i = 0; i < subject_data.length; i++) {
    await dbClient.query(formateQuery(subject_data[i])).then((success) => {
      console.log(`3- Subjects data: ${i} of ${subject_data.length}`);
    });
  }
};

module.exports = addSubjectsData;
