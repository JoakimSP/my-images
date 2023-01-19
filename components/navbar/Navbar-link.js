

export default function Navbarlink(props) {
    const {
        name,
    } = props
    return (

        <span className="col-span-1 mx-3"><a className="flex-1 text-white">{name}</a></span>
    )
}
