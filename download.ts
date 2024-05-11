/**
 * 下载文件
 * @param {String} url 下载地址或流文件 下载地址不要传type字段
 * @param {String} name 下载名称带后缀 列：a.pdf
 * @param {String} type 数据类型 例：application/pdf
 */
export function downloadFile (url:string, name:string, type:string) {
  let elink = document.createElement('a')
  elink.download = name

  elink.style.display = 'none'
  if (type) {
    let blob = new Blob([url], { type: type })
    url = window.URL.createObjectURL(blob)
  }
  elink.href = url
  document.body.appendChild(elink)
  elink.click()
  document.body.removeChild(elink)
}