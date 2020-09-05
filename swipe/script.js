(() => {
    console.log('Swipe V1.0')

    let swiped = false;

    document.addEventListener('touchstart', (e) => {
        swiped = false;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    })
        
    document.addEventListener('touchmove', (e) => {
        if(swiped) return false;
        diffX = startX - e.changedTouches[0].clientX;
        diffY = startY - e.changedTouches[0].clientY;
        
        if(Math.abs(diffX) > 50 || Math.abs(diffY) > 50) {
            swiped = true;

            //Horizontall Swipe
            if(Math.abs(diffX) > Math.abs(diffY)) {
                
                //Swipe Left
                if(diffX > 0) {
                    console.log('swipe left')
                }
                
                //Swipe Right
                else if(diffX < 0) {
                    console.log('swipe right')
                } ;
            }
            
            //Vartical Swipe
            else if(Math.abs(diffX) < Math.abs(diffY)) {
                
                //Swipe Up
                if(diffY > 0) {
                    console.log('swipe up')
                }
                
                //Swipe Down
                else if(diffY < 0) {
                    console.log('swipe down')
                } ;
            }

        }
    })
})();