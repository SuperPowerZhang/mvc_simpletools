import "./calculator.css"
import $ from "jquery"


let num = 100
let calculate = {
    0: (n) => {
        return n + 1
    },
    1: (n) => {
        return n - 1
    },
    2: (n) => {
        return n * 2
    },
    3: (n) => {
        return n / 2
    }
}

$(".calculator ul>li>button").each((index, ele) => {
    $(ele).click(() => {
        num = parseInt(calculate[index](num))
        $(".number").html(num)
    })
})
$(".number").html(num)

