import { React } from "react"

const Alert = ({ alertData, removeAlert }) => {

    return (
        <>
            <div key={'alert'} className="alertStyle" style={{ display: alertData.state ? 'flex' : 'none', background: alertData.color }}>
                <strong>{alertData.text}</strong>
                <button type="button" style={{ width: '0.4em', height: '0.4em' }} className="btn-close" onClick={() => removeAlert()} data-bs-dismiss="alert" />
            </div>
        </>
    )
}

export default Alert;