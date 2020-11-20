function fliperCard(hiddenId, showId) {
    //get obj from dom tree using getElementById
    const hiddenObj = document.getElementById(hiddenId);
    const showObj = document.getElementById(showId);
    //remove previous class to hidden
    hiddenObj.classList.remove('card-rotate-hidden');
    showObj.classList.remove('card-rotate-hidden');
    //remove previous class to show
    hiddenObj.classList.remove('card-rotate-show');
    showObj.classList.remove('card-rotate-show');
    //initial new events
    hiddenObj.classList.add('card-rotate-hidden');
    showObj.classList.add('card-rotate-show');
}