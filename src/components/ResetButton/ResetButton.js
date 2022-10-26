import './ResetButton.css'

const ResetButton = ({onClick}) => {
    return (
        <button className='resetButton'
            onClick={() => onClick()}
        > Reset Board </button>
    )
}

export default ResetButton