const containerService = require('../services/containers.services')

exports.create = async function (req, res) {
    containerService.create(req);
}
exports.open = async function (req, res) {
    containerService.open(req);
}
exports.delete = async function (req, res) {
    containerService.remove(req);
}
