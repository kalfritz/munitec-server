import Subject from '../models/Subject';

class SubjectController {
  async index(req, res) {
    const { class_id } = req.params;

    const subjects = await Subject.findAll({
      where: {
        class_id,
      },
    });

    return res.json(subjects);
  }
}

export default new SubjectController();
