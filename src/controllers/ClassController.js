import Class from '../models/Class';

class ClassController {
  async index(req, res) {
    const { school_id } = req.params;
    const classes = await Class.findAll({
      where: {
        school_id,
      },
    });

    return res.json(classes);
  }
}

export default new ClassController();
