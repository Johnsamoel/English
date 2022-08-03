const handleErrors = (err, req, res, next) => {
  res.json({ message: err.message, status: err.status });
  next(err);
};
module.exports = handleErrors;
