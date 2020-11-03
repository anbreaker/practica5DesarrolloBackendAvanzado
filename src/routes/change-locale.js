const express = require('express');
const router = express.Router();

/**
 * GET /change-locale/:locale
 */
router.get('/:locale', (req, res, next) => {
  const locale = req.params.locale;

  const backTo = req.get('referer');

  res.cookie('nodeapi-locale', locale, {maxAge: 1000 * 60 * 24 * 2});

  res.redirect(backTo);
});

module.exports = router;
