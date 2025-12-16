const Student1 = (props) => {
    var a = parseInt(props.Sub1)
    var b = parseInt(props.Sub2)
    var c = parseInt(props.Sub3)
    var Total = a + b + c
    var Percentage = Total/3
    var Grade 
    if(Percentage>=90)
    {
        Grade = "A";
    }
    else if(Percentage>=80)
    {
        Grade = "B";
    }
    else if(Percentage>=70)
    {
        Grade = "C";
    }
    else if(Percentage>=60)
    {
        Grade = "D";
    }
    else {
        Grade = "F";
    }

   return(
    <>
    <tr>
        <td>{props.Name}</td>
        <td>{props.Sub1}</td>
        <td>{props.Sub2}</td>
        <td>{props.Sub3}</td>
        <td>{Total}</td>
        <td>{Percentage.toFixed(2)}%</td>
        <td>{Grade}</td>
    </tr>
    </>
   )
   
}
export default Student1;