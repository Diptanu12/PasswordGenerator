function generatePass() {
  let pass = "";
  let str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789@#$";
    

  for (let i = 1; i <= 8; i++) {
    let char = Math.floor(Math.random() * str.length + 1);

    pass += str.charAt(char);
   
    document.querySelector(".col-auto.gen.my-3").style.display = "block";
  document.querySelector(".st.my-4").style.display = "block"; 
  }

  document.getElementById("para").innerHTML = pass;

  const strength = getPasswordStrength(pass);
  displayStrengthIndicator(strength);
}

function resetAll() {
  document.getElementById("para").innerHTML = "";
  document.getElementById("strength-indicator").innerHTML = "";
  document.querySelector(".col-auto.gen.my-3").style.display = "none"; 
  document.querySelector(".st.my-4").style.display = "none"; 
}
function getPasswordStrength(password) {
  if (
    password.includes("@") ||
    password.includes("#") ||
    password.includes("$")
  ) {
    return "Strong";
  } else {
    return "Moderate";
  }
}

function displayStrengthIndicator(strength) {
  const strengthIndicator = document.getElementById("strength-indicator");
  strengthIndicator.textContent = `Password Strength: ${strength}`;
}
