export default function ({value , handler}) {
    return (
        <button className="block" onClick={() => value ? undefined : handler()}>{value}</button>
    )
}