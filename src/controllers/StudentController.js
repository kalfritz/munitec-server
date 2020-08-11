import Student from '../models/Student';
import Attendance from '../models/Attendance';
import Score from '../models/Score';

class StudentController {
  async index(req, res) {
    const { class_id } = req.params;

    const students = await Student.findAll({
      where: {
        class_id,
      },
      include: [
        {
          model: Attendance,
          as: 'attendances',
        },
        {
          model: Score,
          as: 'scores',
        },
      ],
    });

    return res.json(students);
  }
}

export default new StudentController();
