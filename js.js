document.getElementById("prijava").addEventListener("click", async Event=>{
    
    const podatak = {
        username: document.getElementById("username").value,
        password: document.getElementById("lozinka").value
    }

    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json"
    };

    const request = {
        method: "POST",
        body: JSON.stringify(podatak),
        headers: headers
    }
    
    try {
        const response = await fetch("http://localhost:4000/provjera", request)
        
        if (response.ok) {
            window.location.href ="./prviKolokvij.html"
        } else {
            alert("Nepostojeći korisnik ili kriva lozinka!")
        }
    } catch (error) {
        alert("Server je pao ili nije uključen.")
    }
})

addEventListener("keypress",async Event => {
    if(Event.key === "Enter"){const podatak = {
        username: document.getElementById("username").value,
        password: document.getElementById("lozinka").value
    }

    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json"
    };

    const request = {
        method: "POST",
        body: JSON.stringify(podatak),
        headers: headers
    }
    
    try {
        const response = await fetch("http://localhost:4000/provjera", request)
        
        if (response.ok) {
            window.location.href ="./prviKolokvij.html"
        } else {
            alert("Nepostojeći korisnik ili kriva lozinka!")
        }
    } catch (error) {
        alert("Server je pao ili nije uključen.")
    }

    }
})