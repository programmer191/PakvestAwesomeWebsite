/*module.exports = function () 
{
    return 
    {
        favMovie: ''
    }
};
*/

window.onload = function () 
{
    //template strings, doesn't ignore white spaces. CONCATINATION is also different.

    //spread operator, take an array and spread it into individual elements
    var num1 = [1,2,3];
    //var num2 = [...num1,4,5,6,7];

    function add(a,b,c)
    {
        console.log(a+b+c);
    }
    add(...num1);

/*
---------------------------------------------------------------------
difference between LET and VAR 
    var items = document.getElementsByTagName("li");
    for(let x=0; x< items.length; x++)
    {
        items[x].onclick = function ()
        {
            console.log(x);
        }
    }
---------------------------------------------------------------------


/-------------------------------------------------------
    const pi =3.14;
    console.log (pi);
---------------------------------------------------------------------
*/


}

