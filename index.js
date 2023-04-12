let countvalue = document.querySelector("#counter");

// using arrow fn
let increament = ()=>{

    // hmko counter ke ander ka contente chahiye

    // ye o/p me ak string deta hai so isko ham int me convert  krne ke liye parseint ka use krenge
    let value = countvalue.innerText;
    let ans =parseInt(value);
    // update value
    ans=ans+1;

    // ab hme vaps ans ko ui me dalna hai to ham ye use krenge
    countvalue.innerText=ans;    
}


// using arrow fn
let decreament= ()=>{

    
    // ye o/p me ak string deta hai so isko ham int me convert  krne ke liye parseint ka use krenge
    let value = countvalue.innerText;
    let ans =parseInt(value);
    // update value
    ans=ans-1;

    // ab hme vaps ans ko ui me dalna hai to ham ye use krenge
    countvalue.innerText=ans;  
}