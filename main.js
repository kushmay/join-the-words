function getParagraph1()
{
    var inputs=[];
    for (var i=1;i<=5;i++)
{
    inputs.push(document.getElementById("paral_input_box_"+i).value);
}
   document.getElementById("showParagraph1").innerHTML=inputs.join(". ");
}
function getParagraph2()
{
    var inputs=[];
    for (var i=1;i<=5;i++)
{
    inputs.push(document.getElementById("para2_input_box_"+i).value);
}
   document.getElementById("showParagraph2").innerHTML=inputs.join(". ");
}
