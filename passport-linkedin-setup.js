const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

passport.serializeUser(function(user, done){
    done(null, user);
})

passport.deserializeUser(function(user, done) {
        done(null, user);
});

passport.use(new LinkedInStrategy({
    clientID: process.env.LINKEDIN_CLIENT_ID,
    clientSecret: process.env.LINKEDIN_SECRET,
    callbackURL: "http://localhost:3000/linkedin/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      return done(null, profile);
  }
));