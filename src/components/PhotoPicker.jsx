// import dummy from '../assets/dummy.png'

export default function PhotoPicker(){
    return (
        <div>

            <div className="circle">
                <img className="photo" id="photo-pre-img" src="/assets/dummy.png" alt="dummy photo" width="158px" height="152px"/>

                
                <label htmlFor="photo">

                    <a id="btn-add-photo" className='btn-add-photo'>+</a>
                </label>

                <input type="file" onChange={(e) => upPhoto(e)} name="photo" id="photo" className='photo-file' />
            </div>
        </div>
    )
}

function upPhoto(e) {
    console.log(e.target.files[0]);

    var files = e.target.files
     // FileReader support
    if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function () {
            document.getElementById("photo-pre-img").src = fr.result;
        }
        fr.readAsDataURL(files[0]);
    }
    
    // Not supported
    else {
        // fallback -- perhaps submit the input to an iframe and temporarily store
        // them on the server until the user's session ends.
    }

}