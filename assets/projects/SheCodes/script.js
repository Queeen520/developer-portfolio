function getZodiac() {
  let month = document.querySelector("#month").value;
  let day = document.querySelector("#day").value;
  //console.log(month, day);
  if (month === "Jänner" && day >= 21) {
    //console.log('Wassermann')
    document.querySelector("#output").innerHTML =
      "Dein Sternzeichen ist Wassermann";
  } else if (month === "Jänner" && day <= 20) {
    //console.log('Not Wassermann')
    document.querySelector("#output").innerHTML =
      "Dein Sternzeichen ist Steinbock";
  }
  if (month === "Februar" && day >= 20) {
    document.querySelector("#output").innerHTML =
      "Dein Sternzeichen ist Fische";
  } else if (month === "Februar" && day <= 19) {
    document.querySelector("#output").innerHTML =
      "Dein Sternzeichen ist Wassermann";
  }
  if (month === "März" && day >= 21) {
    document.querySelector("#output").innerHTML =
      "Dein Sternzeichen ist Widder";
  } else if (month === "März" && day <= 20) {
    document.querySelector("#output").innerHTML =
      "Dein Sternzeichen ist Fische";
  }
  if (month === "April" && day >= 21) {
    document.querySelector("#output").innerHTML = "Dein Sternzeichen ist Stier";
  } else if (month === "April" && day <= 20) {
    document.querySelector("#output").innerHTML =
      "Dein Sternzeichen ist Widder";
  }
  if (month === "Mai" && day >= 21) {
    document.querySelector("#output").innerHTML =
      "Dein Sternzeichen ist Zwillinge";
  } else if (month === "Mai" && day <= 20) {
    document.querySelector("#output").innerHTML = "Dein Sternzeichen ist Stier";
  }
  if (month === "Juni" && day >= 22) {
    document.querySelector("#output").innerHTML = "Dein Sternzeichen ist Krebs";
  } else if (month === "Juni" && day <= 21) {
    document.querySelector("#output").innerHTML =
      "Dein Sternzeichen ist Zwillinge";
  }
  if (month === "Juli" && day >= 23) {
    document.querySelector("#output").innerHTML = "Dein Sternzeichen ist Löwe";
  } else if (month === "Juli" && day <= 22) {
    document.querySelector("#output").innerHTML = "Dein Sternzeichen ist Krebs";
  }
  if (month === "August" && day >= 24) {
    document.querySelector("#output").innerHTML =
      "Dein Sternzeichen ist Jungfrau";
  } else if (month === "August" && day <= 23) {
    document.querySelector("#output").innerHTML = "Dein Sternzeichen ist Löwe";
  }
  if (month === "September" && day >= 24) {
    document.querySelector("#output").innerHTML = "Dein Sternzeichen ist Waage";
  } else if (month === "September" && day <= 23) {
    document.querySelector("#output").innerHTML =
      "Dein Sternzeichen ist Jungfrau";
  }
  if (month === "Oktober" && day >= 24) {
    document.querySelector("#output").innerHTML =
      "Dein Sternzeichen ist Skorpion";
  } else if (month === "Oktober" && day <= 23) {
    document.querySelector("#output").innerHTML = "Dein Sternzeichen ist Waage";
  }
  if (month === "November" && day >= 23) {
    document.querySelector("#output").innerHTML =
      "Dein Sternzeichen ist Schütze";
  } else if (month === "November" && day <= 22) {
    document.querySelector("#output").innerHTML =
      "Dein Sternzeichen ist Skorpion";
  }
  if (month === "Dezember" && day >= 22) {
    document.querySelector("#output").innerHTML =
      "Dein Sternzeichen ist Schütze";
  } else if (month === "Dezember" && day <= 21) {
    document.querySelector("#output").innerHTML =
      "Dein Sternzeichen ist Steinbock";
  }
}
