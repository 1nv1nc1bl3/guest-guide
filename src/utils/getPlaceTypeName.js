export function getPlaceTypeName(placeTypes, id) {
    const title = placeTypes.find((item) => String(item.term_id) === id);

    return title?.name;
}
