const addTopicsData = async (dbClient) => {
  const formateQuery = (data) => {
    console.log(data.id);
    return {
      text: 'INSERT INTO topics (id, subject_id, course_id, name, description, points) VALUES($1, $2, $3, $4, $5, $6);',
      values: [data.id, data.subject_id, data.course_id, data.name, data.description, data.points],
    };
  };

  topic_data = [
    {
      id: 1,
      subject_id: 6,
      course_id: 1,
      name: 'numbers',
      description:
        'It consists of understanding place values, adding, subtracting, By the end of Grade 6, students will represent and compare very large and very small numbers, including through the use of scientific notation, and describe various ways they are used in everyday life.',
      points: 25000,
    },
    {
      id: 2,
      subject_id: 6,
      course_id: 1,
      name: 'algebra',
      description: 'identify and describe repeating, growing, and shrinking patterns, including patterns found in real-life contexts, and specify which growing patterns are linear.',
      points: 25000,
    },
    {
      id: 3,
      subject_id: 6,
      course_id: 1,
      name: 'data',
      description:
        'Collect qualitative data and discrete and continuous quantitative data to answer questions of interest about a population, and organize the sets of data as appropriate, including using intervals.',
      points: 25000,
    },
    {
      id: 4,
      subject_id: 6,
      course_id: 1,
      name: 'spatial sense',
      description: 'Create lists of geometric properties of various types of quadrilaterals, including the properties of the diagonals, and rotational symmetry.',
      points: 25000,
    },
    {
      id: 5,
      subject_id: 6,
      course_id: 1,
      name: 'financial literacy',
      description: 'Demonstrate the knowledge and skills needed to make informed financial decisions.',
      points: 25000,
    },
  ];

  for (let i = 0; i < topic_data.length; i++) {
    await dbClient.query(formateQuery(topic_data[i])).then((success) => {
      console.log('3- Topics data successfully added');
    });
  }
};

module.exports = addTopicsData;
