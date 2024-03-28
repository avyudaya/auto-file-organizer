const loadHomeDirectory = async (event) => {
    let all = []
    try {
        let response = await gapi.client.drive.files
            .list({
                fields: 'nextPageToken, files(id, name, mimeType, modifiedTime)',
                q: "'me' in owners"
            })
        all.push(...response.result.files)
        while (response.result.nextPageToken) {
            response = await gapi.client.drive.files
                .list({
                    fields: 'nextPageToken, files(id, name, mimeType, modifiedTime)',
                    pageToken: response.result.nextPageToken,
                    q: "'me' in owners"
                })
            console.log(response)
            all.push(...response.result.files)
        }
        exportData(all)
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

export { loadHomeDirectory }