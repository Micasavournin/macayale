const Page5C = () => {
  const pinterestUrl = "https://drive.google.com/drive/folders/15HCg5UCKgnP3whZ1d2Vn8pae5ckK2x58?usp=drive_link";
  return (
      <div className="contenedor">
          <img src="https://firebasestorage.googleapis.com/v0/b/tarjeta-invitacion-2f4f0.appspot.com/o/MACA%20Y%20ALE%20(BODA)-06.jpg?alt=media&token=c74d8c2d-caba-4d0f-93e8-28607547dc9b" alt="" style={{ maxWidth: '100%', maxHeight: '100%' }} />
          <a style={{ position: 'absolute', top: '79%', left: '50%', transform: 'translate(-50%, -50%)' }} href={pinterestUrl} target="_blank" rel="noopener noreferrer">
              <button className="botonAlbum">Cargar</button>
          </a>
      </div>
  )
}

export default Page5C;
