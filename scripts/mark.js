function percentage_2() {
 
    // Method returns the element of num1 id
    let num1 = document.getElementById("marknum1").value;
     
    // Method returns the elements of num2 id
    let num2 = document.getElementById("marknum2").value;
    document.getElementById("value2")
            .value = (num1 * 100) / num2 + "%";
}