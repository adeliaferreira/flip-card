function fliperCard(hiddenId, showId) {
 
    const hiddenObj = document.getElementById(hiddenId);
    const showObj = document.getElementById(showId);

    hiddenObj.style.visibility = 'hidden';
    showObj.style.visibility = 'visible';
 
    console.log(hiddenObj);
    console.log(showObj);
}