// function waterfall(wrap, boxes) {
//     // 获取屏幕可以显示的列数
//     var boxWidth = boxes[0].offsetWidth + 20; // 不包括 padding，所以要加上 20
//     var windowWidth = document.documentElement.clientWidth; // 视觉宽度
//     var colsNumber = Math.floor(windowWidth / boxWidth) // 只能是整数

//     // 设置容器的宽度
//     wrap.style.width = boxWidth * colsNumber + 'px'; // 为了让容器居中，margon: 0 auto;

//     // 找到目前一排中最小的高度，把新的图片排在下面

//     // 定义一个数组并存储每一列的高度
//     var everyHeight = new Array();
//     for (var i = 0; i < boxes.length; i++) {
//         if (i < colsNumber) {
//             everyHeight[i] = boxes[i].offsetHeight + 20;    // 要加外边距
//             console.log(boxes[i].offsetHeight);    
//         } else {
//             var minHeight = Math.min.apply(null, everyHeight);
//             var minIndex = getMinIndex(minHeight, everyHeight)
//             console.log(minIndex)
//             var leftValue = boxes[minIndex].offsetLeft - 10;
//             console.log(leftValue)

//             boxes[i].style.position = 'absolute'
//             boxes[i].style.top = minHeight + 'px';
//             boxes[i].style.left = leftValue + 'px';
//             everyHeight[minIndex] += boxes[i].offsetHeight + 20;
//             console.log(everyHeight[minIndex])
//         };
//     }
//     console.log(everyHeight)
// };

// // 获取最小列的索引
// function getMinIndex(minHeight, everyHeight){
//     for (var i = 0; i < everyHeight.length; i++){
//         if(minHeight == everyHeight[i]) {
//             return i;
//         }
//     }

//     // for (index in everyHeight){
//     //     if (everyHeight[index] == minHeight) {
//     //         return index
//     //     }
//     // }
// }


// window.onload = function() {
//     var wrap = document.getElementById('wrap')
//     var boxes = wrap.getElementsByTagName('div')
//     waterfall(wrap, boxes)
// }

function waterfall(wrap, boxes) {
    var boxWidth = boxes[0].offsetWidth + 20;
    var windowWidth = document.documentElement.clientWidth;
    var colsNumber = Math.floor(windowWidth / boxWidth);

    wrap.style.width = boxWidth * colsNumber + 'px';

    var everyHeight = new Array();

    for (var i = 0; i < boxes.length; i++) {
        if (i < colsNumber) {
            everyHeight[i] = boxes[i].offsetHeight + 20;
        } else {
            var minHeight = Math.min.apply(null, everyHeight);
            var minIndex = getMinIndex(minHeight, everyHeight);

            boxes[i].style.position = 'absolute';
            boxes[i].style.left = boxes[minIndex].offsetLeft - 10 + 'px';
            boxes[i].style.top = minHeight + 'px';

            // refresh everyHeight array
            everyHeight[minIndex] += boxes[i].offsetHeight + 20;
        }
    }

    console.log(everyHeight)
}

function getMinIndex(minHeight, everyHeight) {
    for (index in everyHeight) {
        if (everyHeight[index] == minHeight) {
            return index;
        }
    }
}

window.onload = function() {
    var wrap = document.getElementById('wrap')
    var boxes = wrap.getElementsByTagName('div')
    waterfall(wrap, boxes)
}