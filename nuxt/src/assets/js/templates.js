export default [
    {
        label: '[VRC]おもいでコルクボード',
        code: `
/**
 *  [VRC]おもいでコルクボード - NK_NAKA
 *  https://booth.pm/ja/items/1288171
 */

const w = 1360
const h = 765
const font = '110px sans-serif'

// init
CTX.font = font
CTX.drawImage(IMAGES[0], 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

function getDate(str) {
    const d = str.match(/_([0-9]+-[0-9]+-[0-9]+)_/)
    return d ? d[1].replace(/-/g, '.') : ''
}

// photos
CTX.drawImage(IMAGES[1], 1351, 191, w, h)
CTX.fillText(getDate(IMAGES[1].filename), 2160, 1064);
CTX.drawImage(IMAGES[2], 2728, 1204, w, h)
CTX.fillText(getDate(IMAGES[2].filename), 3530, 2070);
CTX.drawImage(IMAGES[3], 1328, 3208, w, h)
CTX.fillText(getDate(IMAGES[3].filename), 2130, 4070);
CTX.drawImage(IMAGES[4], 2729, 2195, w, h)
CTX.fillText(getDate(IMAGES[4].filename), 3530, 3060);
CTX.drawImage(IMAGES[5], 1351, 1204, w, h)
CTX.fillText(getDate(IMAGES[5].filename), 2150, 2060);
CTX.drawImage(IMAGES[6], 2720, 3208, w, h)
CTX.fillText(getDate(IMAGES[6].filename), 3530, 4070);
CTX.drawImage(IMAGES[7], -9, 176, w, h)
CTX.fillText(getDate(IMAGES[7].filename), 780, 1040);
CTX.drawImage(IMAGES[8], 1347, 2203, w, h)
CTX.fillText(getDate(IMAGES[8].filename), 2140, 3060);
CTX.drawImage(IMAGES[9], 2727, 192, w, h)
CTX.fillText(getDate(IMAGES[9].filename), 3530, 1050);
`,
    },
    {
        label: 'Custom',
        code: `
/**
 *  Create your custom code
 */        
`,
    },
]
