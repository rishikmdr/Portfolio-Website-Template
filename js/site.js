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
  // Enquiries are delivered by FormSubmit (formsubmit.co) straight to EMAIL.
  // The very first submission sends an "Activate form" email to that inbox;
  // click the link once and every later enquiry arrives directly.
  var ENDPOINT = 'https://formsubmit.co/ajax/' + EMAIL;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var v = function (id) { return (document.getElementById(id).value || '').trim(); };
    var name = v('f-name'), email = v('f-email'), company = v('f-company'),
        interest = v('f-interest'), msg = v('f-msg');
    var err = document.getElementById('form-error');
    var confirmBox = document.getElementById('form-confirm');
    var button = form.querySelector('button[type=submit]');
    var ok = name && msg && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    err.textContent = 'Please add your name, a valid work email and a short description.';
    if (!ok) { err.style.display = 'block'; return; }
    err.style.display = 'none';
    if (v('f-honey')) return; // bot
    var subject = 'Discovery call request: ' + interest + (company ? ' (' + company + ')' : '');
    button.disabled = true;
    var label = button.textContent;
    button.textContent = 'Sending…';
    fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        name: name, email: email, company: company || '-', interest: interest, message: msg,
        _subject: subject, _template: 'table', _replyto: email, _captcha: 'false'
      })
    }).then(function (r) { return r.json(); }).then(function (data) {
      if (String(data.success) !== 'true') throw new Error(data.message || 'Not sent');
      track('form_submit', { interest: interest });
      form.reset();
      confirmBox.style.display = 'block';
      button.textContent = 'Sent';
    }).catch(function () {
      var mail = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' +
        encodeURIComponent('Name: ' + name + '\nCompany: ' + (company || '-') + '\nArea of interest: ' +
        interest + '\n\n' + msg);
      err.innerHTML = 'Sorry, your message could not be sent just now. Please <a href="' + mail +
        '">email it to me instead</a>.';
      err.style.display = 'block';
      button.disabled = false;
      button.textContent = label;
    });
  });
})();
