export const timeNow = () => {
    const time = new Intl.DateTimeFormat('ru-Ru', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hourCycle: 'h23'
    }).format()
    return time
}
