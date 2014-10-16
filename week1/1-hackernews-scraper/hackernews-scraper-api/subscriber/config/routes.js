"use strict";

var SubscriberController = require('../controllers/subscriberController');

module.exports = function (app) {
    app.get('/listSubscribers', SubscriberController.listSubscribers);
    app.post('/subscribe', SubscriberController.subscribe);
    app.post('/unsubscribe', SubscriberController.unsubscribe);

    app.get('*', function (req, res) {
        res.send('The available site routes are get - /listSubscribers, and post - /subscribe, /unsubscribe');
    });
};