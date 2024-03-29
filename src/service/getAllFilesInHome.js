const getAllFilesInHome = async () => {
    try {
        let all = []
    let response = await gapi.client.drive.files
        .list({
            fields: '*',
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
    } catch(err){
        console.log(err)
    }
}

export { getAllFilesInHome }