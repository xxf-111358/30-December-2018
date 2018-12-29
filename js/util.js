var util = {
    extend: function ( o1, o2 ) {
        for ( var key in o2 ) {
            if ( o2.hasOwnProperty( key ) ) {
                o1[ key ] = o2[ key ];
            }
        }
    },
    loadImage: function( imgUrl, fn ) {

        var imgObj = {};

        var tempImg, loaded = 0, imgLenght = 0;

        for ( var key in imgUrl ) {
            imgLenght++;
            tempImg = new Image();
            tempImg.onload = function() {
                loaded++;
                if ( loaded >= imgLenght ) {
                    fn( imgObj );
                }
            };
            tempImg.src = imgUrl[ key ];
            imgObj[ key ] = tempImg;
        }

    }
}
