let element = document.getElementById("fileUpload");
element.addEventListener("change", (e) => {
    let file = element.files[0]
    let t = file.type;
    let fName = btoa(file.name) + "." + t.split("/")[1];
    let blob = file.slice(0,file.size, t);
    let newFile = new File([blob], fName, {type: t});
    console.log(newFile);
})