const userMiddleware = {
  isAdmin: (req, res, next) => {
    if (req.body && req.body.admin) {
      next();
    } else {
      res.status(403).json({ message: "Bạn không có quyền truy cập." });
    }
  },
};

module.exports = userMiddleware;
