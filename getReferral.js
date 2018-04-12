function getReferralCode(srcURL) {
  var code = srcURL.match(/\d*/);
  return code;
}

var referralCode = getReferralCode(document.referrer);
