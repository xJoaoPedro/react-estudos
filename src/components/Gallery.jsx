import Profile from "./Profile"

export default function Gallery({ size }) {
    let content = []

    for (let i = 0; i < size; i++) {
        content.push(<Profile />)
    }

    return <div style={{ padding: '20px', maxWidth: '600px'}}>
        {content}
    </div>
        
}