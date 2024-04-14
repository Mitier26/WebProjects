let passwordInput = document.getElementById('password');
let passwordStrengths = document.querySelectorAll('.password-strength');
let text = document.getElementById('text');

passwordInput.addEventListener('input', function (event) {
    let password = event.target.value;
    // 입력받는 패스워드가 최대 12까지 반환되게 만든다.
    // Math.min 을 이용해 길이가 20이 넘어도 12 까지
    let strength = Math.min(password.length, 12);
    // 12로 한 이유는 30 * 12 = 360 이기 때문이다.
    let degree = strength * 30;
    // 이 각도를 이용해 conic-gradient에 사용한다.
    // 12가 넘으면 색이 넘어가나?

    // 각 범위 마다 각도를 지정하고 해당 각도의 색과 텍스트
    let gradientColor = strength <= 4 ? '#ff2c1c' : strength <= 8 ? '#ff9800' : '#12ff12';
    let strengthText = strength <= 4 ? 'Weak' : strength <= 8 ? 'Medium' : 'Strong';

    // passwordStrength div 가 여러개 이다.
    // 화면에 표시하기 위해 여러개를 만들었다.
    // blur를 이용하기 때문
    passwordStrengths.forEach((passwordStrength) => {
        passwordStrength.style.background = `conic-gradient(${gradientColor} ${degree}deg, #1115 ${degree}deg)`;
    });

    text.textContent = strengthText;
});
