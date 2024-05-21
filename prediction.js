// const display=document.querySelector('.diplay');
// const input=document.querySelector('#upload');
// let img=document.querySelector('img');
// input.addEventListener('change',()=>{
//   let reader=new FileReader();
//   reader.readAsDataURL(input.files[0]);
//   reader.addEventListener("load",()=>{
//     display.innerHTML=`<img src=${reader.result} />`
//   })
//  })



const image_input=document.querySelector('#image_input');
var uploaded_image="";
image_input.addEventListener("change",function(){
  const reader= new FileReader();
  reader.addEventListener("load",()=>{
  uploaded_image=reader.result;
  document.querySelector("#display_image").style.backgroundImage= url`(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
})


// const fileInput = document.querySelector('input[type="file"]');
// const imageDisplay = document.querySelector('#displayImage');

// fileInput.addEventListener('change', (event) => {
//   const file = event.target.files[0];

//   if (file) {
//     const reader = new FileReader();

//     reader.onload = () => {
//       // Inside this function, the `result` property contains the data URL
//       imageDisplay.src = reader.result;
//     };

//     reader.readAsDataURL(file);
//   }
// });
