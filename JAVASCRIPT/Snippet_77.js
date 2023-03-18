let storage = document.getElementById("saveServer")
    function saveData(){
        console.log("input saved to localStorage")
        localStorage.setItem("input", storage.value)
    }