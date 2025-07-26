
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);

    function setText(id, paramName) {
    const el = document.getElementById(id);
    if (el) el.textContent = params.get(paramName) || "Not provided";
    }

    setText("firstName", "firstName");
    setText("lastName", "lastName");
    setText("email", "email");
    setText("phone", "phone");
    setText("organization", "organization");
    

    const ts = params.get("timestamp");
    const dateEl = document.getElementById("timestamp");
    if (ts && dateEl) {
    const dateObj = new Date(ts);
    dateEl.textContent = dateObj.toLocaleString();
    } else if (dateEl) {
    dateEl.textContent = "Not provided";
    }
});