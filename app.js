$(() => {
    // POPULATE CONTENT ON LOAD
    const populateContentBoxes = (num) => {
        for (let i = 1; i <= num; i++) {
            let $contentBox = $('<section></section>', {
                'class': 'content-box',
                'id': `content-box-${i}`
            })

            let $contentBoxTextArea = $('<div>', {
                'class': 'box-text-area'
            })

            let $contentBoxTitle = $(`<h2></h2>`, {
                'class': 'box-title',
                'html': `BOX NUMBER ${i}`
            })
            let $contentBoxSubtitle = $('<p></p>', {
                'class': 'box-subtitle',
                'html': 'USELESS SUBTEXT'
            })
            let $contentBoxLinkArea = $('<div></div>', {
                'class': 'box-link-area'
            })
            let $contentBoxLink = $('<a></a>', {
                'class': 'box-link',
                'href': '#',
                'html': 'VIEW THE CASE STUDY'
            })

            $contentBoxLinkArea.append($contentBoxLink)
            $contentBoxTextArea.append($contentBoxTitle)
            $contentBoxTextArea.append($contentBoxSubtitle)
            $contentBox.append($contentBoxTextArea)
            $contentBox.append($contentBoxLinkArea)
            $('#content-boxes').append($contentBox)
        }
    }
    populateContentBoxes(11);

    // FILTER CONTENT
    let filterContentBoxes = (filterCriteria) => {
        switch (filterCriteria) {
            case 'show-all':
                $('.content-box').show()
                break;
            case 'show-odd':
                $('.content-box:even').show()
                $('.content-box:odd').hide()
                break;
            case 'show-even':
                $('.content-box:odd').show()
                $('.content-box:even').hide()
                break;
        }
    }



    /////////////////////////////////////////////////
    // EVENT LISTENERS
    /////////////////////////////////////////////////

    $('.filter-option').on('click', (e) => {
        $(e.target).siblings().removeClass('active').addClass('inactive')
        $(e.target).removeClass('inactive').addClass('active')
        filterContentBoxes(e.target.id)
    })
})