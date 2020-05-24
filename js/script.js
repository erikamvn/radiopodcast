window.addEventListener('load', start);

var inputRage = null;
var inputFrenquency = null;
var divPodcasts = null;

function start(){
    inputRage = document.querySelector('#inputRage');
    inputFrenquency = document.querySelector('#inputFrequency');  
    divPodcasts = document.querySelector('#divPodcast');

    inputRage.addEventListener('input', handleRangeChange);

    handlePodCastFrom(inputRage.value);
}

function handleRangeChange(event){
    var currentFrequency = event.target.value;
    inputFrenquency.value = currentFrequency;

    handlePodCastFrom(currentFrequency);
}

function handlePodCastFrom(frequency){
    var foundPodcast = null;

//    for(var i = 0; i < realPodcasts.length; i++){
//        var currentPodcast = realPodcasts[i];

//        if(currentPodcast.id === frequency){
//            foundPodcast = currentPodcast;
//            break;
//        }
//    }

    foundPodcast = realPodcasts.find(function (currentPodcast){
        return currentPodcast.id === frequency;
    })

    renderPodcast(foundPodcast);

}

function renderPodcast(podcast){
    if(!podcast){
        divPodcasts.innerHTML = 'Nenhum podcast encontrado!';
        return;
    }

 //   const img = document.createElement('img');
//    img.src = '../img/' + podcast.img;
    
//    const title = document.createElement('h2');
//    title.textContent = podcast.title;

//    const description = document.createElement('p');
//    description.textContent = podcast.description;

//    divPodcasts.innerHTML = '';
//    divPodcasts.appendChild(img);
//    divPodcasts.appendChild(title);
//    divPodcasts.appendChild(description);

    var { img, title, description } = podcast;


    divPodcasts.innerHTML =`
        <img src = '../img/${img}' /> 
        <h2>${title}</h2>
        <p>${description}</p>
    `

}

