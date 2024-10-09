

var myInput = document.getElementById('ans')



function EnterEqual(e)
{
    myInput.value = eval(myInput.value)
}


function EnterNumber(n)
{

   myInput.value += n
}


function EnterOperator(o)
{
    myInput.value += o

}


function EnterClear()
{
    myInput.value = null

}



