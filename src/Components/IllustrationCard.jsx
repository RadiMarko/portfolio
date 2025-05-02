export default function IllustrationCard(props) {
    return (
        <div className="illustration-card">
            <h2>
                {props.language === "english"
                    ? `${props.engTitle}`
                    : `${props.hunTitle}`}
            </h2>
            <img
                className="illustration"
                src={props.imagePath}
                alt={props.imageAlt}
            ></img>
        </div>
    )
    
    
}