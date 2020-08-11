import Attendance from '../models/Attendance';

class AttendanceController {
  async store(req, res) {
    const { subject_id } = req.params;
    const { date, students } = req.body;

    await Promise.all(
      students.map(({ id, present }) => {
        console.log(present);
        return Attendance.create({
          student_id: id,
          subject_id,
          date,
          present,
        });
      })
    );

    return res.json({
      message: 'ok',
    });
  }
}

export default new AttendanceController();
