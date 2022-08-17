function startApp() {

  let phoneInp = document.querySelector("input[type='tel']");

  let telLogo = document.getElementById("carrierLogo");

  phoneInp.addEventListener("input", phonie);

  // To test if the phone number matches the regex
  function phonie (phoneNumber){
    
    // let phoneInp = phoneNumber.currentTarget;
    let phoneInp = phoneNumber.target.value

    // Regex to detecct & match phone numbers for the mobile carriers
    const nineMobileRegex = /^(\+)?(234)?(\-)?(809|0809|817|0817|818|0818|909|0909)(\d{7})$/;

    const mtnRegex = /^(\+)?(234)?(\-)?(703|0703|706|0706|803|0803|806|0806|810|0810|813|0813|816|0816|814|0814|903|0903)(\d{7})$/;

    const gloRegex = /^(\+)?(234)?(\-)?(705|0705|805|0805|807|0807|811|0811|815|0815|905|0905)(\d{7})$/;

    const airtelRegex = /^(\+)?(234)?(\-)?(701|0701|708|0708|808|0808|812|0812|818|0818|902|0902)(\d{7})$/;
    
    let word = "";

    // To test if the phone number matches the regex
    if (phoneInp.length >= 4 && phoneInp.length === 11){
        if (nineMobileRegex.test(phoneInp)){
          const src = `images/9mobile.png`
          telLogo.innerHTML = `<img id="telLogo" src=${src}>`
        } else if (mtnRegex.test(phoneInp)){
          const src = `images/mtn.png`
          telLogo.innerHTML = `<img id="telLogo" src=${src}>`
        } else if (gloRegex.test(phoneInp)){
          const src = `images/glo.png`
          telLogo.innerHTML = `<img id="telLogo" src=${src}>`
        } else if (airtelRegex.test(phoneInp)){
          const src = `images/airtel.png`
          telLogo.innerHTML = `<img id="telLogo" src=${src}>`
        }
    } else {
      telLogo.innerHTML = ""
    }
    if (phoneInp.length >=1 && phoneInp.length < 11) {
      word = document.getElementById("validNum").innerHTML = "Not a valid number. Please enter a valid number";
    } else {
      word = document.getElementById("validNum").innerHTML = ""}

    return word;
  }

  
  };
  
  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //