$.ajax({
    url: 'https://randomuser.me/api/?results=12&lang=en',
    dataType: 'json',
    success: function (data) {
        console.log(data);
        jsonData = data.results;
        jsonData.forEach(person => {

            const picture = person.picture.large;
            const firstName = person.name.first;
            const lastName = person.lastName;
            const email = person.email;
            const locCity = person.location.city;
            const locState = person.location.state;

            const gallCard =

                `<div class="card">
<div class="card-img-container">
    <img class="card-img" src="${picture}" alt="profile picture">
</div>
<div class="card-info-container">
    <h3 id="name" class="card-name cap">${firstName} ${lastName}</h3>
    <p class="card-text">${email}</p>
    <p class="card-text cap">${locCity},${locState}</p>
 </div>`

            $('#gallery').append(gallCard);
        });
    }
});

const modWin =

    `<div class="modal-container">
                <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
                        <h3 id="name" class="modal-name cap">name</h3>
                        <p class="modal-text">email</p>
                        <p class="modal-text cap">city</p>
                        <hr>
                        <p class="modal-text">(555) 555-5555</p>
                        <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
                        <p class="modal-text">Birthday: 10/21/2015</p>
                    </div>
                </div>`