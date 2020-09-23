const loadPage = async () => {
    $('#things').empty()
    const things = await $.get('/things')
    things.forEach(thing =>
        $('#things').append(`<p>${thing.word}</p>`))
}
loadPage()

$('button').on('click', async () => {
    const word = $('input').val()
    await $.post('/things', { word })
    loadPage()
})