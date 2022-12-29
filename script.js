 const from = document.getElementById("from")
 const to = document.getElementById("to")
 const inputNumber = document.getElementById("input-number")
 const cnvrt = document.getElementById("convert")
 const resultBox = document.getElementById("result-box")
 const swap = document.getElementById("swap")
 cnvrt.addEventListener("click", () => {
    {
        let fromValue = from.value;
        let toValue = to.value;
        let inputValue = inputNumber.value;
        let result = convertBase(fromValue, toValue, inputValue)
        resultBox.innerText = result;
    }
    
 })
 function convertBase(fromBase, toBase, num){
    let d = parseInt(num, fromBase);// converting number into base 10
    const res = d.toString(toBase)//converting base10 to required
    return res;
 }
 swap.addEventListener("click", () => {
    let temp = from.value;
    from.value = to.value
    to.value = temp
 })