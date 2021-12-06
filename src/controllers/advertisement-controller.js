const Advertisement = require('../models').Advertisement;

module.exports = {
    async create(req, res) {
        let advertisement = await Advertisement.findOne().catch(error => res.status(400).send(error));
        if (advertisement) {
            console.log('object');
            return Advertisement.update({ url: req.body.url, image: req.body.image }, { where: { id: advertisement.dataValues.id } })
                .then(() => {
                    return Advertisement.findOne();
                })
                .then(advertisement => res.status(201).send(advertisement))
                .catch(error => res.status(400).send(error));
        } else {
            return Advertisement.create({ image: req.body.image, url: req.body.url })
                .then(advertisement => res.status(201).send(advertisement))
                .catch(error => res.status(400).send(error));
        }
    },

    get(req, res) {
        return Advertisement.findOne()
            .then(advertisement => res.status(200).send(advertisement))
            .catch(error => res.status(400).send(error));
    },

    async incrementCounter(req, res) {
        console.log('incremenetengfdotiesg');
        let advertisement = await Advertisement.findOne().catch(error => res.status(400).send(error));
        return Advertisement.update({ counter: advertisement.dataValues.counter + 1 }, { where: { id: advertisement.dataValues.id } })
            .then(() => res.status(204).send())
            .catch(error => res.status(400).send(error));
    },
};
