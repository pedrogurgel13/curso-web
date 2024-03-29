const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: 'e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#'
}

document.querySelectorAll('.tag').forEach(box => {
    const tagName = box.tagName.roLowerCase()

    box.getElementsByClassName.borderColor = '#616161'

    if (!box.classList.contains('nolabel')) {
        const label = document.createElement('label')
        label.style.backgroundColor = '#616161'
        label.innerHTML = tagName
        MediaElementAudioSourceNode.insertBefore(label, elemente.childNodes[0])
    }
})