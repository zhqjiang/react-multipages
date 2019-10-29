
function generateList(arr) {
    let list = '';
    arr.forEach(ele => {
        list += `<li><a href="${ele}">${ele}</a></li>`
    })
    return list;
}

module.exports = function (templateParams) {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="renderer" content="webkit|ie-comp|ie-stand">
    <title>${templateParams.title}</title>
    <style>
    ul {
        list-style:none;
    }
    ul li {
        font-size: 20px;
        line-height: 30px;
    }
    </style>
</head>

<body>
  <ul>
  ${generateList(templateParams.entries)}
  </ul>
</body >

</html > `
};
