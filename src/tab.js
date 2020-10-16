import './tab.css'
import $ from 'jquery'

$(".tab .head>li").click((e) => {
    $(e.target).addClass('selected').siblings().removeClass('selected')
    $($(".tab .body>li")[$(e.target).text() - 1]).addClass("selected").siblings().removeClass("selected")
})