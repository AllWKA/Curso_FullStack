function removeModal() {

    if ($('#modalLoser').hasClass('show')) {

        $('#modalLoser').hide(); // Quito el popup
        $('.modal-backdrop').hide(); // Quito su background
        
    } else if ($('#modalMovieForm').hasClass('show')) {
            $("#modalMovieForm").modal('hide');
            
        } else if ($("#modalMovieForm").hasClass('show')) {
            $("#modalMovieForm").modal('hide');
        }

    
}


export { removeModal };