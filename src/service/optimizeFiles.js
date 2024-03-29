import { getAllFilesInHome } from './getAllFilesInHome'

const nameList = {
    'application/octet-stream': 'octet-stream',
    'application/pdf': 'pdfs',
    'application/vnd.google-apps.document': 'documents',
    'application/vnd.google-apps.jam': 'jamboards',
    'application/vnd.google-apps.presentation': 'presentations',
    'application/vnd.google-apps.script': 'google-scripts',
    'application/vnd.google-apps.spreadsheet': 'spreadsheets',
    'application/vnd.google.colaboratory': 'colaborators',
    'application/vnd.oasis.opendocument.text': 'documents',
    'application/x-xz': 'compressed',
    'image/png': 'images',
    'image/jpeg': 'images',
    'video/mpeg': 'videos',
    'video/mp4': 'videos',
    'video/ogg': 'videos',
    'video/webm': 'videos',
    'video/x-ms-wmv': 'videos',
    'video/x-flv': 'videos',
    'video/quicktime': 'videos',
}


const handleOptimizeDrive = async (event) => {
    try {
        const all = await getAllFilesInHome();

        const groupedByMimeType = {};

        exportData(all)
        all.forEach(item => {
            const mimeType = item.mimeType;
            if (!groupedByMimeType[mimeType]) {
                groupedByMimeType[mimeType] = [];
            }
            groupedByMimeType[mimeType].push(item);
        });
        return all
    } catch (err) {
        console.log(err)
    }
}

const exportData = (data) => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
        JSON.stringify(data)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
};

export { handleOptimizeDrive };