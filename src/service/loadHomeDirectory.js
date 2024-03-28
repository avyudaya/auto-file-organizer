import {getAllFilesInHome} from './getAllFilesInHome'

const loadHomeDirectory = async (event) => {
    let count = 0;
    try {
        const all = await getAllFilesInHome();

        all.forEach(item => {
            const mimeType = item.mimeType;
            if (mimeType === 'application/vnd.google-apps.folder') {
                count++;
            }
        })

        let perc = count / all.length;

        if (perc > 0 && perc < 0.4) {
            return {
                'type':'UNORGANIZED',
                'total': all.length,
                'files': all.length - count,
            };
        } else if (perc > 0.4 && perc < 0.7) {
            return {
                'type':'MODARATELY ORGANIZED',
                'total': all.length,
                'files': all.length - count,
            };
        } else if (perc > 0.7 && perc < 0.95) {
            return {
                'type':'KIND OF ORGANIZED',
                'total': all.length,
                'files': all.length - count,
            };
        } else {
            return {
                'type':'VERY ORGANIZED',
                'total': all.length,
                'files': all.length - count,
            };
        }

    } catch (err) {
        console.log(err)
    }
}


export { loadHomeDirectory }