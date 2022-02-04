var elem =  document.getElementById('louis')
function testFunc(){
    console.log('MAKING REQUEST TO URL')
    fetch(
        `${window.origin}/appel_api_test`,{
            method:'GET'
        }
    ).then( response => response.json())
    .then(
        (data)=> {
            console.log('DATA : ', data)
        }
    )
}
elem.addEventListener('click', testFunc)
// https://www.youtube.com/watch?v=PkZNo7MFNFg