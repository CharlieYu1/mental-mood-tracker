const startOfMonth = (date) => {
    const [year, month] = date.split('-')

    return `${year}-${month}-01`
}

const startOfNextMonth = (date) => {
    const [year, month] = date.split('-')
    if (Number(month) < 9) {
        return `${year}-0${Number(month)+1}-01`
    } else if (Number(month) < 12) {
        return `${year}-${Number(month)+1}-01`
    } else {
        return `${Number(year)+1}-01-01`
    }
}

module.exports = { startOfMonth, startOfNextMonth }