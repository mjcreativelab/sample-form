((_win, _doc) => {
  const elmShowConvertionAreaButtons = _doc.querySelectorAll('.u-button__show-convertion-area')
  const elmConvertionArea = _doc.querySelector('#conversionArea')
  const strAttributeIsActive = 'is-active'

  window.showConvertionArea = (event) => {
    const isRequiredDataInput = _doc.querySelector('#landingPage').getAttribute('required-data-input') === 'true'
    const strProduct = event.target.getAttribute('data-product')
    let strToPath = '/#/input-name'

    if (isRequiredDataInput) {
      strToPath = '/#/input-confirm'
    }

    window.selectedItem = strProduct
    elmConvertionArea.setAttribute(strAttributeIsActive, true)
    document.location.href = strToPath
  }

  window.hideConvertionArea = () => {
    elmConvertionArea.removeAttribute(strAttributeIsActive)
  }

  elmShowConvertionAreaButtons.forEach(elmButton => {
    elmButton.addEventListener('click', window.showConvertionArea)
  })
})(window, document)
