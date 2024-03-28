const handleOptimizeDrive = async (event) => {
    try {
        var allFiles = await gapi.client.drive.files
            .list({
                fields: 'nextPageToken, files(id, name, mimeType, modifiedTime)',
                nextPageToken: '',
                q: "'root' in parents"
            });
        allFiles = JSON.parse(allFiles.body);
        console.log(allFiles)
        exportData(allFiles)
        return
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

export default handleOptimizeDrive;