import { Router } from 'express';

import SchoolController from './controllers/SchoolController';
import ClassController from './controllers/ClassController';
import StudentController from './controllers/StudentController';
import SubjectController from './controllers/SubjectController';
import AttendanceController from './controllers/AttendanceController';
import ScoreController from './controllers/ScoreController';

const routes = new Router();

routes.get('/schools', SchoolController.index);
routes.get('/classes/:schoolId', ClassController.index);
routes.get('/students/:classId', StudentController.index);
routes.get('/subjects/:classId', SubjectController.index);

routes.post('/attendances/:subjectId', AttendanceController.store);
routes.post(
  '/students/:studentId/subjects/:subjectId/score',
  ScoreController.store
);

export default routes;
