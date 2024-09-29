function sentmessage(){
  
    let params={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    const serviceId="service_1tr3sed";
    const templateId="template_y2sriop";

    emailjs
    .send(serviceId, templateId, params)
    .then((res)=>{
            document.getElementById("name").value="";
            document.getElementById("email").value="";
            document.getElementById("subject").value="";
            document.getElementById("message").value="";
            console.log(res);
            alert("Your Message Sent Successfully");
        })
        .catch((err)=>console.log(err));    
}
