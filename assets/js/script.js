$(funtion(){
    $("a").click(function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var gato = this.hash;

            $("html, body").animate({
                scrollTop: $(gato).offset().top
            }, 800, funtion(){
                windows.location.hash = gato;
            });
        }
    }),