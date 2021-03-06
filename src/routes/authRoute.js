import express from 'express';
import options from './authOptions/options';// ways to auth
import { isLogged } from '../middlewares/authMiddleware';

const authRoute = new express.Router();

authRoute.get('/google', options.google.login());
authRoute.get('/google/callback', options.google.callback());

authRoute.get('/logout', isLogged, (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('Goodbye');
});
// operations for facebook
authRoute.get('/facebook', (req, res) => { res.send('fbk'); });

// operations for emails
authRoute.get('/email', (req, res) => { res.send('email'); });

export default authRoute;
