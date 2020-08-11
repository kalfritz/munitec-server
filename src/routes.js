import { Router } from 'express';

import SchoolController from './controllers/SchoolController';
import ClassController from './controllers/ClassController';
import StudentController from './controllers/StudentController';
import SubjectController from './controllers/SubjectController';
import AttendanceController from './controllers/AttendanceController';
import ScoreController from './controllers/ScoreController';

const routes = new Router();

routes.get('/schools', SchoolController.index);
routes.get('/classes/:school_id', ClassController.index);
routes.get('/students/:class_id', StudentController.index);
routes.get('/subjects/:class_id', SubjectController.index);

routes.post('/attendances/:subject_id', AttendanceController.store);
routes.post(
  '/students/:student_id/subjects/:subject_id/scores',
  ScoreController.store
);

export default routes;
