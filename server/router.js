const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

//session: false means that we don`t want to create cookie session
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });
module.exports = (app) => {
    app.get('/', requireAuth, (req, res) => {
        res.send({ content: 'Secret Page' });
    })
    app.post('/signin', requireSignin, Authentication.signin);
    app.post('/signup', Authentication.signup);
}