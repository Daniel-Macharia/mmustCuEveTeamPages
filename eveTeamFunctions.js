document.addEventListener("DOMContentLoaded", ()=>{
    //document.querySelector("#menu-options").style.display = "none";

    document.querySelector("#menu-icon").addEventListener("click", event=>{
        document.querySelector("#menu-icon").style.display = "none";
        document.querySelector("#menu-options").style.display = "block";
        event.stopPropagation();
    });

    document.querySelector("#cancel").addEventListener("click", event=>{
        document.querySelector("#menu-icon").style.display = "block";
        document.querySelector("#menu-options").style.display = "none";
        event.stopPropagation();
    });

    document.querySelectorAll(".option").forEach(option=>{
        option.addEventListener("click", event=>{

            //console.log(`cancel state: ${document.querySelector("#cancel").style.display.value}`);
            //document.querySelector("#menu-icon").style.display = "block";
            //document.querySelector("#menu-options").style.display = "none";
        });
    });

});