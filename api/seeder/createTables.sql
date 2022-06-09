
/* DUMP File containing all the scripts necessary to create all the tables */


/* Create questions table */
CREATE TABLE IF NOT EXISTS questions  
  ( 
    id SERIAL, 
    PRIMARY KEY (id), 
    subject_id INT NOT NULL, 
    FOREIGN KEY (subject_id) REFERENCES subjects (id), 
    course_id INT NOT NULL, 
    FOREIGN KEY (course_id) REFERENCES courses (id), 
    topic_id INT NOT NULL, 
    FOREIGN KEY (topic_id) REFERENCES topics (id), 
    skill_id INT NOT NULL, 
    FOREIGN KEY (skill_id) REFERENCES skills (id), 
    task_id INT NOT NULL, 
    FOREIGN KEY (task_id) REFERENCES tasks (id), 
    points INT NOT NULL, 
    question_type VARCHAR, 
    title VARCHAR, 
    description VARCHAR, 
    answer VARCHAR NOT NULL, 
    question_options json[], 
    image_url VARCHAR, 
    difficult_level INT, 
    question_helper_id VARCHAR, 
    created_at timestamptz NOT NULL DEFAULT now(), 
    updated_at timestamptz DEFAULT now() 
  )

/* Create faq_questions table */
CREATE TABLE IF NOT EXISTS faq_questions
  (
		id SERIAL PRIMARY KEY,
		category VARCHAR NOT NULL,
		questions json[]
  )


CREATE TABLE IF NOT EXISTS promo_code
      (
      id SERIAL PRIMARY KEY,
      code_number VARCHAR NOT NULL,
      percent_off INT NOT NULL,
      creation_date timestamptz NOT NULL DEFAULT now(),
      expiration_date timestamptz NOT NULL
      use_count INT NOT NULL DEFAULT 0,
      max_use INT NOT NULL,
      )