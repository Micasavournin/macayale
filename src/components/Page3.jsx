

const Page3 = () => {
    const locationUrl2 = "https://maps.app.goo.gl/J7dK1AnULB91aQBT7";
    return (
        <div className="contenedor">
            <img 
                src="https://firebasestorage.googleapis.com/v0/b/tarjeta-invitacion-2f4f0.appspot.com/o/MACA%20Y%20ALE%20(BODA)-03.jpg?alt=media&token=707137ab-1fa0-4550-a679-bbf99902d474" 
                alt="" 
                style={{ maxWidth: '100%', maxHeight: '100%' }} 
            />
            <a
                style={{ position: 'absolute', top: '86%', left: '50%', transform: 'translate(-50%, -50%)' }}
                href={locationUrl2}
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="botonLlegar">Ubicación</button>
            </a>
        </div>
    );
}

export default Page3;
