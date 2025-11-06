import salamanderImg from '../../public/images/salamander.jpg'

export default function ProcessorStartCard(){
    return(
        <div className="container-card-starter">
            <div className="card-left">
                <ol>
                    <li>Import Video</li>
                    <li>Color</li>
                    <li>Threshold</li>
                </ol>
                <button type="submit"></button>
            </div>
            <div className="card-right">
                <img src={salamanderImg} alt="Binarized Salamander Miku" />
            </div>
        </div>
    )
}