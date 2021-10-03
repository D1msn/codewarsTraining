/* 1 Your task is to construct a building which will be a pile of n cubes.
The cube at the bottom will have a volume of n^3, the cube above will
have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.
 */

function findNb(m) {
    for ( let n = 0;;n++) {

        if ( m > 0 ) {
            let currCubeVol = Math.pow( n+1, 3);
            m = m - currCubeVol;
        } else if ( m === 0 ) {
            return n;
        } else if ( m < 0 ) {
            return (-1);
        }
    }
}