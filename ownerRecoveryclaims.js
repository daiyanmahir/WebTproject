function claimReport() {

    let reports = document.getElementById("reportsSection");

      reports.style.display = "block";
      reports.scrollIntoView({
        behavior: "smooth",
        block: "start"})

};

function viewReport() {
    let reportright = document.getElementById("report-right");

    reportright.style.display = "block";
}
