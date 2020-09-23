const loadPage = async () => {
    const things = await $.get('/things')
    $('#things').empty()

    things.forEach(thing => {
        $('#things').append(`<p>${thing.word}</p>`)
    })
}
loadPage()
$('button').on('click', async () => {
    const word = $('input').val()
    await $.post('/things', { word })
    loadPage()
})

