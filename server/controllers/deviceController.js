class DeviceController {
  async create(req, res) {}

  async getAll(req, res) {}

  async getOne(req, res) {
    res.json({ message: 'getOne' });
  }
}

module.exports = new DeviceController();
