const jwt = require('jsonwebtoken');

const secret = 'Esto-Es-UnA-PalbR@_SecretA12341267';

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const isCustomAuth = token.length < 500;
    const decodedData = jwt.decode(token);
    if (token && isCustomAuth) {
      const isValid = jwt.verify(token, secret);
      req.userId = isValid.id;
    }
    else {
      req.userId = decodedData.sub;
    }
    next();
  }
  catch (error) {
    res.status(403).json({ message: 'Forbidden' });
  }
};

module.exports = auth;
