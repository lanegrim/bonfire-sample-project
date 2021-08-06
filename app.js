$(() => {
    const populateContentBoxes = (num) => {
        for (let i = 1; i <= num; i++) {
            let $contentBox = $('<section></section>', {
                'class': 'content-box',
                'id': `content-box-${i}`
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
            $contentBox.append($contentBoxTitle)
            $contentBox.append($contentBoxSubtitle)
            $contentBox.append($contentBoxLinkArea)
            $('#content-boxes').append($contentBox)
        }
    }

    populateContentBoxes(6);
})