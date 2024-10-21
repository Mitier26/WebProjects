let input = document.querySelector('input');
let btn = document.querySelector('.btn');
let indicator = document.querySelector('.indicator');
let indSpans = document.querySelectorAll('.indicator span');

let weakSpan = indSpans[0];
let mediumSpan = indSpans[1];
let strongSpan = indSpans[2];

let res = document.querySelector('.res');

let weakRegExp = /[a-z]/;
let mediumRegExp = /\d+/;
let strongRegExp = /.[!,@,#,$,%,^,&,*,?,_,-,(,)]/;

let checkPass = () => {
  if (input.value == "") {
    indicator.style.display = "none";
    res.style.display = "none";
  }
  else {
    indicator.style.display = "flex";
    res.style.display = "block";

    let val = input.value;

    if (val.length < 6) caseNo = 1;

    if (val.length >= 6 && (val.match(weakRegExp) || val.match(mediumRegExp) || val.match(strongRegExp))) caseNo = 1;

    if (val.length >= 6 && ((val.match(weakRegExp) && val.match(mediumRegExp)) || (val.match(mediumRegExp) && val.match(strongRegExp)) || (val.match(weakRegExp) && val.match(strongRegExp)))) caseNo = 2;

    if (val.length >= 6 && val.match(weakRegExp) && val.match(mediumRegExp) && val.match(strongRegExp)) caseNo = 3;

    if (caseNo == 1) {
      weakSpan.classList.add('active');
      res.textContent = "Password is weak";
      res.classList.add("weak");
    }

    if (caseNo == 2) {
      mediumSpan.classList.add('active');
      res.textContent = "Password is medium";
      res.classList.add("medium");
    } else {
      mediumSpan.classList.remove('active');
      res.classList.remove('medium');
    }

    if (caseNo == 3) {
      strongSpan.classList.add('active');
      mediumSpan.classList.add('active');
      weakSpan.classList.add('active');
      res.textContent = "Password is strong";
      res.classList.add("strong");
    } else {
      mediumSpan.classList.remove('active');
      res.classList.remove('strong');
    }

  }
};

btn.addEventListener('click', () => {
  if (input.type == "password") {
    input.type = "text";
    btn.innerHTML = `<i class="fas fa-eye-slash"></i>`;
  }
  else {
    input.type = "password";
    btn.innerHTML = `<i class="fas fa-eye"></i>`;
  }

  input.focus();
})