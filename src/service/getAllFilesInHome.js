const getAllFilesInHome = async () => {
    let all = []
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
        all.push(...response.result.files)
    }
    return all
}

export { getAllFilesInHome }