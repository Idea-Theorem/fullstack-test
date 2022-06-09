const addCoursesData = async (dbClient) => {
  const formateQuery = (data) => {
    return {
      text: 'INSERT INTO courses (id, name, description, points) VALUES($1, $2, $3, $4);',
      values: [
        data.id,
        data.name,
        data.description,
        data.points
      ],
    };
  };

  courses_data = [
    {
      id: 1,
      name: 'mathematics',
      description: 'The study of mathematics equips students with knowledge, skills, and habits of mind that are essential for successful and rewarding participation in such a society',
      points: 0,
    }
  ]

  for (let i=0; i< courses_data.length; i++) {
    await dbClient
    .query(formateQuery(courses_data[i]))
    .then((success) => {
      console.log('1- Courses data successfully added');
    });
  }
};

module.exports = addCoursesData;
