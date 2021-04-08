
//alert("inside script");

//Challege1

function consumer(){
    var myHeaders = new Headers();
myHeaders.append("Accept", "application/json;charset=UTF-8");
myHeaders.append("Content-Type", "application/json;charset=UTF-8");
myHeaders.append("Cache-Control", "no-store");
myHeaders.append("Authorization", "eyJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAtMjU2In0.LktWyUyoOqvQtSF0DVONp8IzfdzDFud2oQFrDHGqDyhyYh7Imz0xRobTp5FnVtSgn-3fEaroQ7HE-qA2ey8_ET0CorNqpl8RrJCcFISqbqgu1LdOj7iNXsesuWx92aMMpsScibY_ct7fL4T8Pel55vz6_NK1TvqKS8g9ljE53aXgRjCYC36JuAzra5ajGT2J-LLWICd5JsRlvaOvi-3PE3e2-5h06AL2l24KOEywt3KF3_40laJDN93-0gNlvZAEbXIOJvClFIFqc5sRSrbtPS6Irst5_gvsQCFGd6e1_Mk4eRGQgMh5CLhiXtDT7uqBim7--Ygx5MN7itsu2HJ-9w.baa7AvQo3-3Po4PK.swY5Gl4jieD_aL2BGI6mmHq_2Uin7CFSr9b8SKWbKIXnk-rTbiZBtTc-9b_K3K0OdCIpnl7q2le2Ej4_tFzSzIO8uuVFNcu7bihUWytZfwLdxtjNLGbqmfzYVbfnhO5wwmE3Iqtn-kQ3cBygQT5XeJ8LanCl2mhI00STom6wIjaN2RIpcYOKxjyw7rQc2DOmDrMOOlvCRKfDgNZE9L666MaxvsH3gOfx48RrXz_hgtMu6BrSViuxi3GCrCH_pSsAucCp0v8P3LfUm2_ZfcQdAWUKoKya0ByK6Ay-uouXhV3rUT-cqOeu1T_94b2QkQh6C37ZfMUW3fQ3E1XZLyv075hrBLALPt6KQmvE2_5MgW6ITd5sT-8z8ns8eumoSbh9kfbPS7MyM-BRhqMFeNUYlmlAZRCqVto36HEHuwJePGdO_lmRn3gKMWFUPooK5Lta_l-tu7MV8JHZPCJrm3ib-klGq7WC-yZklEdbMS4D_uvWgkOaRMKIz37T8BJxPAw3PtR-OhH21ddloCCw5W7sKDQWyGsksESx_m5wmgoQHHMfnou9a8zrHIdtTbcrirdLmMHVWRDqLlh3chQqbOXMnR0JQWH95S0M721bZatxKhlBZkjSiPW8I0QWYK5S2lMgR17WdJ8t2CswSQmxQrahhBs4YTSsED3vLUohA5_u4gR7ksFqbhjRgh3f9_BJ1yllpw9F8e1dmI5_6Zz7L_tYgDkep8ukl7KDGZX6gp5ERSKwhG6szAX4QMN8UyLpELEVa6uzf7KLYg0VFckeADYM7bqOlpIH77E_g-jYSHaj4OPUYhMosnX802JjllshvhFLBxvpw8-ec5qUDKdNQKiA89CzrnCASrialZZX1ZFq_srN8l_Oa33F5xPryuUDZNC3XXcM5d2x63aVtAcdZdq3vU8b4Tzi9aoJ_dB3iCWWjBNFARAgkwbxDu-VHLOqxYZLDLX1OGSzwIoFOjffi7KZrNDKTkEw22HHskPACFZnahjjNLmyoaKZWufq1K9kkq7BJ3oc7zt208sQ6WSLu4rth57w-nmhE4SOSUyjP_ZbJaZz3Vw8wtjp2VCNbfYIxIflhH1FQY697qVsdlLgVF5jgd6pCUwcMvS0zHhjR0HWQMhQMs4ciMJ03WX7VXDbhimDDLLFKSItK6UkvSHyZyyBfT8ZwG6RupO9iPMWFL5sI_14SDDcAcZTtHUMgpzy2Vw-8UbBfxyQlSGh6GoyzCPJNUcCZ9U03UcVLDDXT0PY-q8dfc9XV2A-JlBxCZ5OzmizX_Lwvwj6EwZOCyhYrgZUP0nFSAeLsungbVJgGPkcT_ib1L-ruLCLnrHYav0m5lt5Ap7KdAERydOJLHE72O2FkE8g8X0znFxkZrsXN2aPd5PUyY5yDkYJpA-Vkw.jxlCeHY0l5nl1Q_UKgn0Lg");
myHeaders.append("localAuthorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJTb21lICBTeXN0ZW0iLCJpYXQiOjE1NTg2MzY2MTAsImV4cCI6MTU5MDE3MjYxMCwiYXVkIjoic29tZWNsaWVudEBzb21lY2xpZW50ZG9tYWluLmNvbSIsInN1YiI6InNvbWVzeXN0ZW1Ac29tZXN5c3RlbWRvbWFpbi5jb20iLCJGaXJzdE5hbWUiOiJGTkFNRSIsIkxhc3ROYW1lIjoiTE5BTUUiLCJFbWFpbCI6InNvbWVjb25zdW1lckBzb21lZG9tYWluLmNvbSIsIlJvbGUiOiJVc2VyIn0.5HoQJn28n-Ic-Nwwm9xGuN_oeNoYdNkJJLE_2-gN9aM");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://sandbox.src.apis.discover.com/dcf/v1.1/consumerprofile?srcDpaId=07e490fc-b710-42e6-bbc1-7bcc32e3cd60&srciTransactionId=0c824fe4-6d56-4434-9d80-ff0ea5e25f32&srcCorrelationId=71fd9dd2-eb4b-4926-a747-5d2a1dcf31e7&srcClientId=6c2efa4b-1a53-4268-8df1-1503a31b02d3", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}
function ageInDays() {
    var birthyear = prompt("what is your birth year .. good frield?");
    var ageInDayss = (2020 - birthyear) * 365
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer)
    document.getElementById('flex-box-result').appendChild(h1)
}

function reset() {
    document.getElementById('ageInDays').remove();
}




//Challenge 2
function generateCat() {
    var image = document.createElement('img')
    var div = document.getElementById('flex-cat-gen');
   image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
   div.appendChild(image);

//    var myHeaders = new Headers();
// myHeaders.append("Accept", "application/json");
// myHeaders.append("Cache-Control", "no-store");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// fetch("https://stg.mauth.src.apis.discover.com/srci/v1.1/transaction/credentials?srcClientId=aa0fa5f4-75b2-45d7-81d9-b3f79255d42e&srcCorrelationId=dca57e6c-d51b-4e2d-8d6c-81992758c27f&srcDpaId=a3933034-4062-44ef-a598-21707e70f5f4&srciTransactionId=0e8e352e-cd07-4a1d-8743-5da2cf627957&payloadTypeIndicator=FULL&serviceId=testt", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

}

//Challenge 3 :Rock , Paper , Scissors

function rpsGame(yourChoice) {

    console.log(yourChoice);
    var humanchoice, botchoice;
    humanchoice = yourChoice.id;
    botchoice = numberToChoice(randToRpsInt());
    console.log(humanchoice);
    console.log(botchoice)

    results = decideWinner(humanchoice, botchoice);
    console.log(results);
   message = finalMessage(results);
    console.log(message);

  //  message = finalMessage(results); //{'message' : 'You Won' , 'color' : 'green'}
    rpsFrontEnd(yourChoice.id,botchoice,message)

}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 }

    };
    var yourscore = rpsDatabase[yourChoice][computerChoice];
    var computerscore = rpsDatabase[computerChoice][yourChoice];
    return [yourscore, computerscore];
}

function finalMessage([yourscore, computerscore]) {
    if (yourscore == 0) {
        return { 'message': 'You Lost', 'color': 'red' };

    } else if (yourscore == 0.5) {
        return { 'message': 'You tied', 'color': 'Yellow' };
    } else {
        return {'message':'You Won','color':'green'}
    }

}

function rpsFrontEnd(humanimgchoice, botimgchoice, finalmessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'scissors': document.getElementById('scissors').src,
        'paper': document.getElementById('paper').src
        
    }
    //lets remove all images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanimgchoice] + "' height=150 width=150 style =box-shadow:0px 10px 50px rgba(37,50,233,1) >";
    messageDiv.innerHTML = "<h1 style ='color: " + finalmessage['color'] + "; font-size :60px padding:30px  ;'>" + finalmessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botimgchoice] + "' height=150 width=150 style=box-shadow:0px 10px 50px rgba(37,50,233,1)>";
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

}

function playagain() {
    window.location.reload();
}

//Challenge 4

var all_buttons = document.getElementsByTagName('button');
//console.log(all_buttons);

var copyAllbuttons = [];
for (let i = 0; i<all_buttons.length ; i++){
    copyAllbuttons.push(all_buttons[i].classList[1]);

}


 function buttonColorChange(buttonThingy){
if(buttonThingy.value=='red'){
    buttonsRed();
}else if(buttonThingy.value=='green'){
    buttonsGreen();
}else if(buttonThingy.value=='reset'){
    buttonsColorsReset();
}else if(buttonThingy.value=='random'){
    randomColors();
}

 }

 function buttonsRed(){
     for(let i = 0;i<all_buttons.length;i++){
         all_buttons[i].classList.remove(all_buttons[i].classList[1]);
         all_buttons[i].classList.add('btn-danger');
     }

 }

 function buttonsGreen(){
    for(let i = 0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }

}

function buttonsColorsReset(){
    for(let i = 0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
       all_buttons[i].classList.add(copyAllbuttons[i]);
    }

}

function randomColors(){
    var choices = ['btn-primary','btn-success','btn-warning','btn-danger'];
    for(let i = 0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
       all_buttons[i].classList.add(choices[Math.floor(Math.random() * 4)]);
    }

}

function httpGet(theUrl)
{
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
       
      fetch("http://192.168.1.9:8085/Arya", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

}


