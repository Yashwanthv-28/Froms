document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("exampleForm");
    const submitBtn = document.getElementById("submitBtn");

    form.addEventListener("input", function() {
        let allFilled = true;
        form.querySelectorAll("input").forEach(function(input) {
            if (!input.value) {
                allFilled = false;
            }
        });
        submitBtn.disabled = !allFilled;
    });
});
