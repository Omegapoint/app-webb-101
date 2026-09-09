document.addEventListener('DOMContentLoaded', function () {
    var dataBlob = undefined;

    fetch('./data.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            dataBlob = data;
        });

    document.getElementById('animal-search').addEventListener('input', function (event) {
        var value = event.target.value;
        var hit = dataBlob[value];

        if (hit !== undefined) {
            // clear the list of past results.
            document.getElementById('results').innerHTML = '';

            // go through each elements in the array for the datablog key
            for (var i = 0; i < hit.length; i++) {
                var currentImage = hit[i];
                var listElement = '<li><img class="img-thumbnail" src="' + currentImage + '" /></li>';
                // adds the list item to the DOM.
                document.getElementById('results').innerHTML += listElement;
            }
        }
    });
});
