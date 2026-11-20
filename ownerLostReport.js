function createForm(event) 
{
     event.preventDefault();
    let item = document.getElementById("item").value.trim();
    let desc = document.getElementById("desc").value.trim();
    let category = document.getElementById("category").value;
    let division = document.getElementById("division").value;
    let loc = document.getElementById("loc").value.trim();
    let date = document.getElementById("date").value;
   
     let error = document.getElementById("formError");
     error.innerText = "";


    if(item==="" ||desc=== ""|| category=== "" || division==="" ||loc=== "" ||date=== "") 
    {
         error.style.display = "block";
        error.innerText = "Please fill in all the required fields.";
       return;
    }
    else if(item.length <3)
    {
        
        error.style.display = "block";
        error.innerText = "Item name cannot be less than 3";
       return;
    }
    
  let reporttable= document.getElementById("lostReportTable");
    let row=document.createElement("tr");


    let td1 = document.createElement("td");
    td1.innerText = item;
    let td2 = document.createElement("td");
    td2.innerText = date;

    let td3 = document.createElement("td");
    td3.innerText = division;
    let td4 = document.createElement("td");
    td4.innerText = "Recovered";

    let td5 = document.createElement("td");
    let viewBtn = document.createElement("button");
    //iewBtn.type = "button";
    viewBtn.innerText = "View";
    td5.appendChild(viewBtn);

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    row.appendChild(td5);
    
    reporttable.appendChild(row);
   

    alert("Report created successfully!");
    return true;
    }




function clearError() 
{
    document.getElementById("formError").innerText = "";
    document.getElementById("formError").style.display = "none";
}


function savedReport() {

    let reports = document.getElementById("reportSection");

      reports.style.display = "block";
    reports.scrollIntoView({
        behavior: "smooth",
        block: "start"})

};
    function markedRecovered() {

    let report = document.getElementById("reportSection");
    report.alert("Report marked as recovered!");
return true;}


function viewReport() {
    let reportright = document.getElementById("report-right");

    reportright.style.display = "block";
}

