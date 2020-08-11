import Score from '../models/Score';

class ScoreController {
  async store(req, res) {
    const { student_id, subject_id } = req.params;
    const {
      firstBemester,
      secondBemester,
      thirdBemester,
      fourthBemester,
    } = req.body;

    const [scores, created] = await Score.findOrCreate({
      where: {
        student_id,
        subject_id,
      },
      defaults: {
        ...req.body,
      },
    });

    if (created) {
      return res.json({ message: 'ok' });
    } else {
      //refactor this shit later
      if (firstBemester) scores.firstBemester = firstBemester;
      if (secondBemester) scores.secondBemester = secondBemester;
      if (thirdBemester) scores.thirdBemester = thirdBemester;
      if (fourthBemester) scores.fourthBemester = fourthBemester;

      await scores.save();

      return res.json({ message: 'ok' });
    }
  }
}

export default new ScoreController();
