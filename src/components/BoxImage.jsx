import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'

export default function () {
    return (
        <div className="img-box">
            <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </div>
    )
}