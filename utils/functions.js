import { cities } from "../components/shared/utilities/constance/cities";

export const getCities = id => {
    const res = cities.filter(item => item.fields.province_id == id);
    return res;
}

export const convertToSlug = (Text) => {
    return Text.toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '');
}


export const EditData = (data, id, bool) => {
    const newData = data.map(item =>
        (item.id === id ? item.is_active = { ...item, is_active: bool } : { ...item })
    )
    return newData;
}

export const EditDataComment = (data, id) => {
    const newData = data.map(item =>
        (item.id === id ? item = { ...item, response: true } : { ...item })
    )
    return newData;
}

export const EditDataReceptor = (data, id, bool) => {
    const newData = data.map(item =>
        (item.id === id ? { ...item, is_active: bool } : { ...item })
    )
    return newData;
}

export const EditDataReserve = (data, id, typeState) => {
    const newData = data.map(item =>
        (item.id === id ? item = { ...item, state: typeState } : { ...item })
    )
    return newData;
}


export const EditDataCategories = (data, id, item) => {
    var newData = data.findIndex(x => x.id == id);
    data[newData] = item;
    return data;
}

export const DeleteData = (data, id) => {
    const newData = data.filter(item => item.id !== id);
    return newData;
}

export const plusItemFunc = (data, id, num) => {
    data.forEach(item => {
        if (item.id === id) {
            item.count += num
        }
    })
    return data
}

export const minusItemFunc = (data, id, num, min = 1) => {
    data.forEach(item => {
        if (item.id === id) {
            item.count === min ? item.count = num : item.count -= num
        }
    })
    return data
}


export const checkItemIn = (list, itemId) => {
    const filter = list.some(item => item.id === itemId);
    return filter;
}

export const deleteLastIndex = (list) => {
    list.shift()
    return list;
}

export const addData = (state, payload) => {
    const data = {
        links: { ...state.links },
        results: [payload, ...state.results]
    };
    return data;
}