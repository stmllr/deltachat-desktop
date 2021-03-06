const React = require('react')
const { Classes, Dialog } = require('@blueprintjs/core')
const qr = require('react-qr-svg')

class QrCode extends React.Component {
  render () {
    const { qrCode, onClose } = this.props
    const isOpen = !!qrCode
    const tx = window.translate

    return (
      <Dialog
        isOpen={isOpen}
        title={tx('qrscan_title')}
        icon='barcode'
        onClose={onClose}
        style={{ width: 296 }}
        canOutsideClickClose={false}>
        <div className={Classes.DIALOG_BODY}>
          {qrCode && <qr.QRCode
            bgColor='#FFFFFF'
            fgColor='#000000'
            level='Q'
            style={{ width: 256 }}
            value={qrCode}
          />
          }
        </div>
      </Dialog>
    )
  }
}

module.exports = QrCode
