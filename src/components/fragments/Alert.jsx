import { React } from "react"

const Alert = ({ alertData, closeAlert }) => {
    return (
        <>
            <div key={'alert'} className="alertStyle" style={{ display: alertData.state ? 'flex' : 'none', background: alertData.color }}>
                <strong>{alertData.text}</strong>
                <button type="button" style={{ width: '0.5em', height: '0.5em' }} className="btn-close" onClick={() => closeAlert()} data-bs-dismiss="alert" />
            </div>
        </>
    )
}

export default Alert;