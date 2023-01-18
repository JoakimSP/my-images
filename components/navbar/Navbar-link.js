

export default function Navbarlink(props) {
    const {
        name,
    } = props
    return (

        <span className="flex-0"><a className="flex-1 text-white">{name}</a></span>
    )
}
