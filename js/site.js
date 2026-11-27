/* Site behaviour: enquiry form and lightweight analytics events.
   Analytics: when Google Analytics 4 (gtag) or Google Tag Manager (dataLayer)
   is added to the page, every element with data-track sends an event.
   TODO (Sahil): add your GA4 snippet to each page's <head> to start collecting. */
(function () {
  'use strict';
  var EMAIL = 'kamdar.sahil@gmail.com';

  function track(name, params) {
    params = params || {};
    try {
      if (typeof window.gtag === 'function') window.gtag('event', name, params);
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(Object.assign({ event: name }, params));
    } catch (e) { /* analytics must never break the page */ }
  }

  document.addEventListener('click', function (e) {
    var el = e.target.closest ? e.target.closest('[data-track]') : null;
    if (!el || el.tagName === 'BUTTON' && el.type === 'submit') return;
    track(el.getAttribute('data-track'), { location: el.getAttribute('data-track-location') || '' });
    var interest = el.getAttribute('data-interest');
    var select = document.getElementById('f-interest');
    if (interest && select) {
      for (var i = 0; i < select.options.length; i++) {
        if (select.options[i].text === interest) select.selectedIndex = i;
      }
    }
  });

  var form = document.getElementById('enquiry-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var v = function (id) { return (document.getElementById(id).value || '').trim(); };
    var name = v('f-name'), email = v('f-email'), company = v('f-company'),
        interest = v('f-interest'), msg = v('f-msg');
    var err = document.getElementById('form-error');
    var ok = name && msg && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!ok) { err.style.display = 'block'; return; }
    err.style.display = 'none';
    var subject = 'Discovery call request: ' + interest + (company ? ' (' + company + ')' : '');
    var body = 'Name: ' + name + '\nWork email: ' + email + '\nCompany: ' + (company || '-') +
               '\nArea of interest: ' + interest + '\n\nChallenge:\n' + msg + '\n';
    track('form_submit', { interest: interest });
    window.location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(subject) +
                           '&body=' + encodeURIComponent(body);
    document.getElementById('form-confirm').style.display = 'block';
  });
})();
