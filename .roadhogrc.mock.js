export default {
  'POST /api/login'(req, res) {
    res.json({
      errno: 0,
      error: "success",
      data: {
        token: "xxxxxxx"
      }
    });
  }
}
