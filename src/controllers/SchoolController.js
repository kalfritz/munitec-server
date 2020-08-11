import School from '../models/School';

class SchoolController {
  async index(req, res) {
    const schools = await School.findAll();
    return res.json(schools);
  }
}

export default new SchoolController();
