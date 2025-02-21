// Разве две функции getMax1 и getMax2 не должны быть эквивалентными и возвращать одно и то же значение? Сможете ли вы обнаружить проблему и исправить ее? Можете ли вы узнать что-нибудь о стиле JavaScript в этой ката?

function getMax1() {
    var max = {
        name: 'Max Headroom'
    }
    return max;
}


function getMax2() {
    return {
        name: 'Max Headroom'
    }
}

