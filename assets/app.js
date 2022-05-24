const wrapper = document.querySelector('.wrapper'),
generateBtn = wrapper.querySelector('.form button'),
urlInput = wrapper.querySelector('.form input'),
qrImage = wrapper.querySelector('.qr-code img');

generateBtn.addEventListener('click', ()=>{
    let urlValue = urlInput.value;
    const expression = /(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g;
    const regex = new RegExp(expression);
    if(!urlValue){
        return swal("Forgot Link","Please type in a link to generate a QR Code", "error");
        
    };
    if(!urlValue.match(regex)) {
        swal("Forgotten something?","Please type in a link", "error");
        return false;
      }
    generateBtn.innerText = "Generating QR Code ...";
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${urlValue}`;
    qrImage.addEventListener("load", ()=>{
        wrapper.classList.add('active');
        generateBtn.innerText = 'Generate QR Code';
    })    
});

urlInput.addEventListener('keyup', ()=>{
    if(!urlInput.value){
        wrapper.classList.remove('active');
    }
})