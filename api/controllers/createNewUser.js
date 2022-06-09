module.exports = createNewSubscription = async (req, res) => {
  const data = req.body;

  const errorObject = (message, title, description) => {
    return {
      dev_message: message,
      title: title,
      description: description,
    };
  };

  try {
    if (!data.full_name || data.full_name === '') return res.status(400).send(errorObject('full_name is required', 'Registration Error', 'Full name is required!'));

    if (!data.contact_number || data.contact_number === '') return res.status(400).send(errorObject('contact_number is required', 'Registration Error', 'Contact number is required!'));

    if (!data.date_of_birth || data.date_of_birth === '') return res.status(400).send(errorObject('date_of_birth is required', 'Registration Error', 'date of birth is required!'));

    if (!data.email || data.email === '') return res.status(400).send(errorObject('email is required', 'Registration Error', 'Email is required!'));

    if (!data.password || data.password === '') return res.status(400).send(errorObject('password is required', 'Registration Error', 'Password is required!'));

    return res.status(200).send({
      data: {
        data: req.body,
      },
      dev_message: 'Registration completed!',
      title: 'Success',
      description: 'New user successfully created. Thank you!',
    });
  } catch (error) {
    console.log(error);

    return res.status(500).send({
      dev_message: error,
      title: 'Server Error',
      description: 'We are unable to create a new user at this time, please contact the administrator, or try again later. Thank you!',
    });
  }
};
