import { useState } from "react"

const Task1 : React.FC = () => {

    const [imageLoaded, setImageLoaded] = useState(false)

    return (
        <div className="min-h-screen">
            <div className="text-2xl text-white">
                TAREA 1
            </div>
        </div>
    )
}

export default Task1