export const SortBy = (data, by='voteScore') => {
    return Object.keys(data).map(k => data[k]).sort((d1, d2) => (d2[by] - d1[by]))
}