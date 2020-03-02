import React from 'react'

class Texteditor extends React.Component {
    change() {
        let t = this.refs.text.innerHTML
        this.refs.copy.innerHTML = t
    }
    render() {
        return (
            <div style={{ display: 'flex' }}>
                <div style={{ height: '100vh', width: '50vw' }}>
                    <h1>编辑器</h1>
                    <button onClick={() => {
                        document.execCommand('bold', false, null);
                    }}>加粗</button>
                    <button onClick={() => {
                        document.execCommand('insertHorizontalRule', false, null);
                    }}>下划线</button>
                    <button onClick={() => {
                        let url = 'https://goss.veer.com/creative/vcg/veer/800water/veer-134671947.jpg'
                        document.execCommand('insertImage', false, url);
                    }}>图片</button>
                    <div contentEditable ref='text'>hahah</div>
                </div>

                <div style={{ height: '100vh', width: '50vw' }} >
                    <h1>预览区</h1>
                    <button onClick={() => { this.change() }}>预览</button>
                    <div ref='copy'></div>
                </div>
            </div>
        )
    }
}

export default Texteditor